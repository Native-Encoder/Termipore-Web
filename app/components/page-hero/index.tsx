import Image, { type StaticImageData } from "next/image";

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Decorative background photo, e.g. an import from "@/public/assets". */
  image?: string | StaticImageData;
}) {
  return (
    <section
      className={`on-blue relative isolate overflow-hidden py-[clamp(48px,6vw,80px)] ${
        image ? "flex min-h-[clamp(320px,36vw,480px)] items-center" : ""
      }`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            preload
            placeholder={typeof image === "string" ? "empty" : "blur"}
            sizes="100vw"
            className="-z-20 object-cover object-[center_30%]"
          />
          {/* Dark navy tint, heavier on the left where the text sits. */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-linear-to-r from-[#14151e]/85 via-[#14151e]/60 to-[#14151e]/35"
          />
        </>
      )}
      <div className="wrap w-full">
        <div className="flex max-w-195 flex-col gap-4.5">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
      </div>
    </section>
  );
}
