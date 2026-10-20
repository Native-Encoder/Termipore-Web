import Image, { type StaticImageData } from "next/image";
import { ButtonRow } from "../button";

export default function CtaBand({
  title,
  image,
  children,
}: {
  title: string;
  image?: string | StaticImageData;
  children: React.ReactNode;
}) {
  return (
    <section className="on-blue relative overflow-hidden">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="wrap relative flex flex-wrap items-center justify-between gap-6 py-[clamp(40px,6vw,64px)]">
        <h2 className="max-w-[22ch]">{title}</h2>
        <ButtonRow>{children}</ButtonRow>
      </div>
    </section>
  );
}
