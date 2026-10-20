import { getImageProps, type StaticImageData } from 'next/image';
import WarmupClient from './client';

/**
 * Downloads full-width hero photos in the background once the current page
 * has loaded, so client-side navigation shows them instantly instead of a
 * blank band while they download. Must use the same `sizes` and quality as
 * the hero `<Image>`s so the browser picks the identical URL and cache hits.
 */
export default function ImageWarmup({ images }: { images: StaticImageData[] }) {
  const sources = images.map((src) => {
    const { props } = getImageProps({
      src,
      alt: '',
      fill: true,
      sizes: '100vw',
    });
    return {
      srcSet: props.srcSet ?? '',
      sizes: props.sizes ?? '100vw',
      src: props.src,
    };
  });
  return <WarmupClient sources={sources} />;
}
