'use client';

import Image, { StaticImageData } from 'next/image';
import { forumFont, notoSansFont } from '@/app/utils/font';

type Props = {
  bgImage?: StaticImageData | string;
  city?: string;
  addressLines?: string[];
  openingDays?: string; // e.g. "Mon - Sat"
  openingTime?: string; // e.g. "9AM - 10PM"
  className?: string;
};

export default function MobileLocationCard({
  bgImage,
  city = 'NEW YORK',
  addressLines = ['123 Lexington Ave, Apt', '4B, New York, NY 10016'],
  openingDays = 'Mon - Sat',
  openingTime = '9AM - 10PM',
  className = '',
}: Props) {
  return (
    <section
      className={`relative w-full h-[92vh] overflow-hidden ${className} md:rounded-2xl`}
      aria-label="Location"
    >
      {/* Background image */}
      <Image
        src={bgImage ? bgImage : ' '}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark vignette for readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />

      {/* Title */}
      <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full flex justify-center items-center flex-col">
        <h2
          className={`${forumFont.className} text-[#E9DFCF] uppercase tracking-[0.35em] text-[2rem] mb-6`}
        >
          Location
        </h2>

        {/* Glass card */}
        <div className="w-[90%] max-w-[28rem] rounded-[18px] overflow-hidden backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
          {/* Top bar */}
          <div className="bg-white/[0.08] px-5 py-4">
            <span
              className={`${forumFont.className} text-lg tracking-[0.25em] text-white/90`}
            >
              {city}
            </span>
          </div>
          <div className="border-b border-[white]/20" />
          {/* Body */}
          <div className="bg-white/[0.05] px-5 py-4">
            {/* Address */}
            <div className="py-3">
              <p
                className={`${notoSansFont.className} text-sm font-light leading-6 tracking-[0.08em] text-white`}
              >
                {addressLines.map((l, i) => (
                  <span key={i} className="block">
                    {l}
                  </span>
                ))}
              </p>
            </div>

            {/* Opening Days */}
            <div className="flex items-center py-3 font-light">
              <span
                className={`${notoSansFont.className} text-[12px] tracking-[0.18em] text-white/50`}
              >
                Opening Days
              </span>
              <span className="mx-3 flex-1 h-px bg-white/10" />
              <span
                className={`${notoSansFont.className} text-[12px] tracking-[0.18em] text-white`}
              >
                {openingDays}
              </span>
            </div>

            {/* Opening Time */}
            <div className="flex items-center py-3 font-light">
              <span
                className={`${notoSansFont.className} text-[12px] tracking-[0.18em] text-white/50`}
              >
                Opening Time
              </span>
              <span className="mx-3 flex-1 h-px bg-white/10" />
              <span
                className={`${notoSansFont.className} text-[12px] tracking-[0.18em] text-white`}
              >
                {openingTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Usage:
import hero from '@/public/location-bg.webp';

<LocationMobileCard bgImage={hero} />
*/
