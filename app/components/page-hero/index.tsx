import Image, { getImageProps, type StaticImageData } from 'next/image';
import { preload } from 'react-dom';

// Phones (and small tablets) get `mobileImage` when one is provided.
const MOBILE_MEDIA = '(max-width: 767px)';
const DESKTOP_MEDIA = '(min-width: 768px)';

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  mobileImage,
  mobileBackdrop,
  mobileClear = 0.55,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Decorative background photo, e.g. an import from "@/public/assets". */
  image?: string | StaticImageData;
  /**
   * Optional portrait photo swapped in below 768px. It is pinned to the
   * bottom at full width, with its lower half kept clear of the text.
   */
  mobileImage?: StaticImageData;
  /** Fill above the mobile photo; match the colour of its top edge. */
  mobileBackdrop?: string;
  /** Share of the mobile photo (from the bottom) kept clear of the text. */
  mobileClear?: number;
}) {
  const artDirected = Boolean(image && mobileImage);

  return (
    <section
      className={`on-blue relative isolate overflow-hidden py-[clamp(48px,6vw,80px)] ${
        image ? 'flex min-h-[clamp(320px,36vw,480px)] items-center' : ''
      } ${artDirected ? 'max-md:min-h-0 max-md:items-start max-md:bg-(--hero-backdrop) max-md:pb-(--hero-clear)' : ''}`}
      style={
        mobileImage
          ? ({
              '--hero-clear': `${(mobileImage.height / mobileImage.width) * mobileClear * 100}vw`,
              '--hero-backdrop': mobileBackdrop ?? 'var(--color-brand)',
            } as React.CSSProperties)
          : undefined
      }
    >
      {image && mobileImage ? (
        <ArtDirectedImage image={image} mobileImage={mobileImage} />
      ) : (
        image && (
          <Image
            src={image}
            alt=""
            fill
            preload
            placeholder={typeof image === 'string' ? 'empty' : 'blur'}
            sizes="100vw"
            className="-z-20 object-cover object-[center_30%]"
          />
        )
      )}
      {image && (
        /* Dark navy tint, heavier where the text sits: the left on wide
           screens, the top when the portrait mobile photo is showing. */
        <div
          aria-hidden
          className={`absolute inset-0 -z-10 bg-linear-to-r from-[#14151e]/85 via-[#14151e]/60 to-[#14151e]/35 ${
            artDirected
              ? 'max-md:bg-linear-to-b max-md:from-[#14151e]/40 max-md:via-transparent max-md:via-50% max-md:to-transparent'
              : ''
          }`}
        />
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

/**
 * `<picture>` so each device downloads only the photo it shows. Preloads are
 * media-scoped for the same reason.
 */
function ArtDirectedImage({
  image,
  mobileImage,
}: {
  image: string | StaticImageData;
  mobileImage: StaticImageData;
}) {
  const common = { alt: '', fill: true, sizes: '100vw' } as const;
  const { props: desktop } = getImageProps({ ...common, src: image });
  const { props: mobile } = getImageProps({ ...common, src: mobileImage });

  for (const [props, media] of [
    [desktop, DESKTOP_MEDIA],
    [mobile, MOBILE_MEDIA],
  ] as const) {
    preload(props.src, {
      as: 'image',
      imageSrcSet: props.srcSet,
      imageSizes: props.sizes,
      fetchPriority: 'high',
      media,
    });
  }

  return (
    <picture>
      <source
        media={MOBILE_MEDIA}
        srcSet={mobile.srcSet}
        sizes={mobile.sizes}
      />
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img
        {...desktop}
        loading="eager"
        fetchPriority="high"
        className="-z-20 object-cover object-[center_30%] max-md:object-contain max-md:object-bottom"
      />
    </picture>
  );
}
