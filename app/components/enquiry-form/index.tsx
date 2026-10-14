"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3500/api";
const GENERIC_ERROR = "Something went wrong. Please try again or call 0777 367 719.";

// `value` is sent to the API as-is and appears in the emails, so keep it human-readable.
const roles = [
  { value: "Architect / specifier", label: "An architect / specifier" },
  { value: "Construction company", label: "A construction company" },
  { value: "Developer", label: "A developer" },
  { value: "Pest control company", label: "A pest control company" },
  { value: "Homeowner", label: "A homeowner" },
];

const topics = [
  "Project quote",
  "TDS / test reports",
  "Technical briefing",
  "Site visit",
  "Trade supply",
  "Something else",
];

const stages = [
  "Design",
  "Before PCC / slab",
  "Under construction",
  "Completed building",
];

type Key =
  | "role"
  | "name"
  | "company"
  | "phone"
  | "email"
  | "need"
  | "projectStage"
  | "location"
  | "details";

// Mirrors the API's validation rules so most mistakes are caught before sending.
const rules: Record<Key, { required?: boolean; max: number }> = {
  role: { required: true, max: 80 },
  name: { required: true, max: 120 },
  company: { max: 120 },
  phone: { required: true, max: 20 },
  email: { required: true, max: 254 },
  need: { required: true, max: 80 },
  projectStage: { max: 80 },
  location: { max: 120 },
  details: { max: 5000 },
};
const keys = Object.keys(rules) as Key[];

const phonePattern = /^\+?[\d\s()-]{7,20}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<Key, string>>;
type Sent = { firstName: string; reference: string; customerEmailSent: boolean };

function validate(body: Partial<Record<Key, string>>): Errors {
  const errors: Errors = {};
  for (const key of keys) {
    const value = body[key];
    if (!value) {
      if (rules[key].required) errors[key] = "This field is required.";
    } else if (value.length > rules[key].max) {
      errors[key] = `Keep this under ${rules[key].max} characters.`;
    }
  }
  if (!errors.phone && body.phone && !phonePattern.test(body.phone)) {
    errors.phone = "Enter a valid phone number, e.g. 077 123 4567.";
  }
  if (!errors.email && body.email && !emailPattern.test(body.email)) {
    errors.email = "Enter a valid email address.";
  }
  return errors;
}

// The API returns messages like "phone must be a valid phone number"; the first
// word is the field key.
function serverErrors(messages: unknown): { fields: Errors; other: string[] } {
  const fields: Errors = {};
  const other: string[] = [];
  const list = Array.isArray(messages) ? messages : [messages];
  for (const message of list) {
    if (typeof message !== "string") continue;
    const key = message.split(" ")[0] as Key;
    if (keys.includes(key)) {
      fields[key] ??= message.charAt(0).toUpperCase() + message.slice(1) + ".";
    } else {
      other.push(message);
    }
  }
  return { fields, other };
}

const field = "flex min-w-0 flex-col gap-1.5";
const label = "text-[0.85rem] font-semibold";
const control =
  "w-full rounded-r border-[1.5px] border-line bg-bg px-3.5 py-3 text-[0.95rem] text-fg focus:border-brand focus:outline-none aria-invalid:border-no";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <small id={id} className="text-no">
      {message}
    </small>
  );
}

export default function EnquiryForm() {
  // CTAs link here with ?topic=… to preselect what the visitor needs.
  const requested = useSearchParams().get("topic");
  const defaultTopic =
    requested && topics.includes(requested) ? requested : topics[0];

  const [errors, setErrors] = useState<Errors>({});
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<Sent | null>(null);
  // Guards against a double click firing before the disabled state renders.
  const inFlight = useRef(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inFlight.current) return;

    const data = new FormData(e.currentTarget);
    // Only send filled-in fields; the API rejects unknown keys.
    const body: Partial<Record<Key, string>> = {};
    for (const key of keys) {
      const value = String(data.get(key) ?? "").trim();
      if (value) body[key] = value;
    }

    const invalid = validate(body);
    setErrors(invalid);
    if (Object.keys(invalid).length > 0) {
      setError("Please check the highlighted fields.");
      return;
    }

    setError("");
    setSending(true);
    inFlight.current = true;
    try {
      const res = await fetch(`${API_URL}/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json().catch(() => null);

      if (res.status === 201 && json?.reference) {
        setSent({
          firstName: body.name!.split(/\s+/)[0],
          reference: json.reference,
          customerEmailSent: json.customerEmailSent !== false,
        });
      } else if (res.status === 400) {
        const { fields, other } = serverErrors(json?.message);
        setErrors(fields);
        setError(
          other.length > 0 ? other.join(" ") : "Please check the highlighted fields.",
        );
      } else if (res.status === 429) {
        setError("Too many attempts, please wait a minute and try again.");
      } else if (res.status === 503 && typeof json?.message === "string") {
        setError(json.message);
      } else {
        setError(GENERIC_ERROR);
      }
    } catch {
      setError(GENERIC_ERROR);
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-r border border-l-4 border-line border-l-ok bg-surface px-5.5 py-5"
      >
        <b className="font-sans text-head">Thank you, {sent.firstName}.</b>
        <p className="mt-1.5 text-muted">
          Your reference is{" "}
          <b className="font-mono text-fg select-all">{sent.reference}</b>.
          We&apos;ll get back to you within one working day.
        </p>
        {!sent.customerEmailSent && (
          <p className="mt-1.5 text-muted">
            We couldn&apos;t send your confirmation email — please note your
            reference.
          </p>
        )}
      </div>
    );
  }

  // Wires a control to its error message for styling and screen readers.
  const describe = (key: Key) =>
    errors[key]
      ? { "aria-invalid": true, "aria-describedby": `e-${key}` }
      : {};

  return (
    <form
      className="grid grid-cols-1 gap-4.5 min-[621px]:grid-cols-2"
      onSubmit={submit}
      noValidate
    >
      <div className={`${field} col-span-full`}>
        <span className={label}>I am</span>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="I am">
          {roles.map((role, i) => (
            <span key={role.value}>
              <input
                type="radio"
                name="role"
                id={`r${i + 1}`}
                value={role.value}
                defaultChecked={i === 0}
                className="peer pointer-events-none absolute opacity-0"
              />
              <label
                htmlFor={`r${i + 1}`}
                className="block cursor-pointer rounded-full border-[1.5px] border-line px-3.5 py-2 text-[0.88rem] font-medium peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent"
              >
                {role.label}
              </label>
            </span>
          ))}
        </div>
        <FieldError id="e-role" message={errors.role} />
      </div>

      <div className={field}>
        <label className={label} htmlFor="f-name">
          Name
        </label>
        <input
          className={control}
          id="f-name"
          name="name"
          autoComplete="name"
          maxLength={rules.name.max}
          required
          {...describe("name")}
        />
        <FieldError id="e-name" message={errors.name} />
      </div>
      <div className={field}>
        <label className={label} htmlFor="f-co">
          Company
        </label>
        <input
          className={control}
          id="f-co"
          name="company"
          autoComplete="organization"
          maxLength={rules.company.max}
          {...describe("company")}
        />
        <FieldError id="e-company" message={errors.company} />
      </div>
      <div className={field}>
        <label className={label} htmlFor="f-phone">
          Phone
        </label>
        <input
          className={control}
          id="f-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={rules.phone.max}
          required
          {...describe("phone")}
        />
        <FieldError id="e-phone" message={errors.phone} />
      </div>
      <div className={field}>
        <label className={label} htmlFor="f-email">
          Email
        </label>
        <input
          className={control}
          id="f-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={rules.email.max}
          required
          {...describe("email")}
        />
        <FieldError id="e-email" message={errors.email} />
      </div>
      <div className={field}>
        <label className={label} htmlFor="f-topic">
          I need
        </label>
        <select
          className={control}
          id="f-topic"
          name="need"
          defaultValue={defaultTopic}
          {...describe("need")}
        >
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <FieldError id="e-need" message={errors.need} />
      </div>
      <div className={field}>
        <label className={label} htmlFor="f-stage">
          Project stage
        </label>
        <select
          className={control}
          id="f-stage"
          name="projectStage"
          defaultValue=""
          {...describe("projectStage")}
        >
          <option value="">Not sure yet</option>
          {stages.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <FieldError id="e-projectStage" message={errors.projectStage} />
      </div>
      <div className={`${field} col-span-full`}>
        <label className={label} htmlFor="f-loc">
          Project location (district)
        </label>
        <input
          className={control}
          id="f-loc"
          name="location"
          placeholder="e.g. Gampaha"
          maxLength={rules.location.max}
          {...describe("location")}
        />
        <FieldError id="e-location" message={errors.location} />
      </div>
      <div className={`${field} col-span-full`}>
        <label className={label} htmlFor="f-msg">
          Project details
        </label>
        <textarea
          className={`${control} min-h-30 resize-y`}
          id="f-msg"
          name="details"
          placeholder="Building type, approximate ground-floor area, timeline"
          maxLength={rules.details.max}
          {...describe("details")}
        />
        <FieldError id="e-details" message={errors.details} />
      </div>
      <div className="col-span-full flex flex-wrap items-center gap-3">
        <button
          className="btn btn-primary disabled:cursor-wait disabled:opacity-60"
          type="submit"
          disabled={sending}
          aria-busy={sending}
        >
          {sending ? (
            "Sending…"
          ) : (
            <>
              Send enquiry <span className="arr">→</span>
            </>
          )}
        </button>
        <small className="text-no" aria-live="polite">
          {error}
        </small>
      </div>
    </form>
  );
}
