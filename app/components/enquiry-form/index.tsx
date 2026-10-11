"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

const roles = [
  { value: "Architect", label: "An architect / specifier" },
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

const field = "flex min-w-0 flex-col gap-1.5";
const label = "text-[0.85rem] font-semibold";
const control =
  "w-full rounded-r border-[1.5px] border-line bg-bg px-3.5 py-3 text-[0.95rem] text-fg focus:border-brand focus:outline-none";

export default function EnquiryForm() {
  // CTAs link here with ?topic=… to preselect what the visitor needs.
  const requested = useSearchParams().get("topic");
  const defaultTopic =
    requested && topics.includes(requested) ? requested : topics[0];

  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!name || !phone) {
      setError("Add your name and a phone number so we can reach you.");
      return;
    }
    setError("");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-r border border-l-4 border-line border-l-ok bg-surface px-5.5 py-5">
        <b className="font-sans text-head">Enquiry captured.</b>
        <p className="mt-1.5 text-muted">
          Prototype note: this form isn&apos;t connected yet. On the live site
          it will route to info@termipore.lk.
        </p>
      </div>
    );
  }

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
          required
        />
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
        />
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
          required
        />
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
        />
      </div>
      <div className={field}>
        <label className={label} htmlFor="f-topic">
          I need
        </label>
        <select
          className={control}
          id="f-topic"
          name="topic"
          defaultValue={defaultTopic}
        >
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className={field}>
        <label className={label} htmlFor="f-stage">
          Project stage
        </label>
        <select className={control} id="f-stage" name="stage">
          {stages.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
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
        />
      </div>
      <div className={`${field} col-span-full`}>
        <label className={label} htmlFor="f-msg">
          Project details
        </label>
        <textarea
          className={`${control} min-h-30 resize-y`}
          id="f-msg"
          name="msg"
          placeholder="Building type, approximate ground-floor area, timeline"
        />
      </div>
      <div className="col-span-full flex flex-wrap items-center gap-3">
        <button className="btn btn-primary" type="submit">
          Send enquiry <span className="arr">→</span>
        </button>
        <small className="text-no" aria-live="polite">
          {error}
        </small>
      </div>
    </form>
  );
}
