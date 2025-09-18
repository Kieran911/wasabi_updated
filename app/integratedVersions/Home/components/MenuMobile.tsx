'use client';

import Image from 'next/image';
import { forumFont, notoSansFont } from '@/app/utils/font';

import basil from '@/public/home/menu/basil.webp';
import chesseCake from '@/public/home/menu/chesseCake.webp';
import mochi from '@/public/home/menu/mochi.webp';
import pumpkin from '@/public/home/menu/pumpkin.webp';
import safron from '@/public/home/menu/safron.webp';
import steak from '@/public/home/menu/steak.webp';

export function MenuMobile() {
  const tiles = [
    { src: chesseCake, name: 'CHEESECAKE' },
    { src: mochi, name: 'MOCHI TRIO' },
    { src: steak, name: 'STEAK' },
    { src: basil, name: 'Basil' },
    { src: pumpkin, name: 'Pumpkin' },
    { src: safron, name: 'Safron' },
  ];

  return (
    <section className="md:hidden w-full bg-black text-[#E9DFCF] -mt-1 aspect-[9/16]">
      <div className="px-5 pt-10">
        <h1
          className={`${forumFont.className} text-center uppercase tracking-[0.22em] leading-tight`}
          style={{ fontSize: 'clamp(8.6vw, 8.5vw, 3rem)' }}
        >
          <span className="text-nowrap block">BROWSE OUR</span>
          <span className="text-nowrap block">CURATED MENU</span>
        </h1>
        <div className="mt-4 h-px w-full bg-[#E9DFCF]/30" />
      </div>

      {/* ---- Marquee (seamless, single row) ---- */}
      <div className="px-5 mt-5">
        <div className="relative w-full overflow-hidden">
          {/* Double track: two identical rows side-by-side.
              We translate the whole track by -50% so the second half
              perfectly replaces the first, then the animation resets with no jump. */}
          <div className="flex w-[200%] gap-x-[50%] animate-[menuMarquee_22s_linear_infinite] will-change-transform">
            {/* Row A */}
            <div className="flex items-center gap-4 w-1/2">
              {tiles.map((t, i) => (
                <div
                  key={`A-${i}`}
                  className="flex flex-col items-center shrink-0"
                >
                  <div className="relative min-w-[38vw] max-w-[140px] w-[38vw] aspect-[4/3] overflow-hidden rounded">
                    <Image
                      src={t.src}
                      alt={t.name}
                      className="h-full w-full object-cover"
                      priority={i < 3}
                    />
                  </div>
                  <p
                    className={`${forumFont.className} mt-2 text-[11px] tracking-[0.2em] uppercase text-[#E9DFCF]/90 text-center`}
                  >
                    {t.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Row B (identical copy) */}
            <div className="flex items-center gap-4 w-1/2">
              {tiles.map((t, i) => (
                <div
                  key={`B-${i}`}
                  className="flex flex-col items-center shrink-0"
                >
                  <div className="relative min-w-[38vw] max-w-[140px] w-[38vw] aspect-[4/3] overflow-hidden rounded">
                    <Image
                      src={t.src}
                      alt={t.name}
                      className="h-full w-full object-cover"
                      priority={false}
                    />
                  </div>
                  <p
                    className={`${forumFont.className} mt-2 text-[11px] tracking-[0.2em] uppercase text-[#E9DFCF]/90 text-center`}
                  >
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Keyframes for seamless marquee */}
          <style jsx>{`
            @keyframes menuMarquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>

      {/* Copy + CTA */}
      <div className="px-6 mt-8 pb-12">
        <p
          className={`${notoSansFont.className} text-center text-[13px] leading-6 tracking-[0.12em] text-[#E9DFCF]`}
        >
          Discover A Handpicked Selection Of Dishes Crafted With Premium
          Ingredients, Bold Flavors, And Refined Technique
        </p>

        <div className="mt-5 flex justify-center">
          <button
            className={`${notoSansFont.className} rounded-full bg-[#C0A078] px-7 py-3 text-[#1A140D] font-semibold tracking-[0.22em] hover:brightness-95 transition`}
          >
            SEE MENU
          </button>
        </div>
      </div>
    </section>
  );
}
