'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { forumFont, notoSansFont } from '@/app/utils/font';
import gourmentImage from '@/public/home/close-up-shiny-glassware-standing-dinner-plate.webp';

type Props = {
  image?: StaticImageData | string;
  title?: string; // use "\n" to force a line break
  subcopy?: string;
  schedule?: string;
  ctaHref?: string;
  ctaLabel?: string;
  className?: string;
};

export default function MobileGourmetBliss({
  image = gourmentImage,
  title = 'EXPERIENCE\nGOURMET BLISS',
  subcopy = 'Savor Elegance, Flavor, And\nAmbiance Like Never Before.',
  schedule = 'Now Open: Tuesday – Sunday\n | 5 PM – 11 PM',
  ctaHref = '/reservation',
  ctaLabel = 'RESERVE A TABLE',
  className = '',
}: Props) {
  const titleLines = title.split('\n');

  return (
    <div
      className={`relative md:hidden mx-auto mt-11 overflow-hidden bg-black shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${className}`}
      style={{ aspectRatio: '9/16' }}
    >
      <div className="absolute inset-x-0 -bottom-3 h-[48%] pointer-events-none">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover object-center"
        />{' '}
      </div>
      <div className="absolute inset-x-0 top-0 px-6 pt-13 pb-10 flex flex-col items-center text-center gap-4">
        <h2
          className={`${forumFont.className} text-white uppercase tracking-[0.32em] leading-tight`}
          style={{ fontSize: 'clamp(8.1vw, 7vw, 3rem)' }}
        >
          Experience <span className="block text-nowrap">Gourmet Bliss</span>
        </h2>

        <p
          className={`${notoSansFont.className} text-white whitespace-pre-line leading-6 font-light tracking-[0.2em]`}
        >
          {subcopy}
          <span className="block">{schedule}</span>
        </p>

        <Link
          href={ctaHref}
          className={`${notoSansFont.className} mt-2 inline-flex items-center justify-center rounded-full border border-white/80 text-white px-5 py-3.5 text-xs tracking-[0.22em] hover:bg-white hover:text-black transition-colors`}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
