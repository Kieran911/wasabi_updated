'use client';

import Image from 'next/image';
import { useMemo, useState, useEffect } from 'react';
import { forumFont, notoSansFont } from '@/app/utils/font';

import RecipeSix from '@/public/home/recipes/RecipeSix.webp';
import RecipeThree from '@/public/home/recipes/RecipeThree.webp';
import RecipeTwo from '@/public/home/recipes/RecipeTwo.webp';
import { X } from 'lucide-react';

type MenuItem = {
  id: number;
  title: string;
  price: number;
  desc: string;
  src: any;
  tag: 'LUNCH' | 'DINNER' | 'WINE';
};

const ALL_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: 'CHICKEN RISOTO',
    price: 35.73,
    desc: 'Comforting classic with a modern, elegant twist — perfect for when you crave warmth and flavor in every bite.',
    src: RecipeTwo,
    tag: 'DINNER',
  },
  {
    id: 2,
    title: 'GRILLED FILET',
    price: 41.25,
    desc: 'Charred to perfection and finished with brown butter herbs.',
    src: RecipeSix,
    tag: 'DINNER',
  },
  {
    id: 3,
    title: 'SEARED MEDLEY',
    price: 33.5,
    desc: 'Golden sear, bright textures, and a savory finish.',
    src: RecipeThree,
    tag: 'LUNCH',
  },
  {
    id: 4,
    title: 'HOUSE PASTA',
    price: 28.2,
    desc: 'Hand-tossed with a rich tomato emulsion and basil oil.',
    src: RecipeTwo,
    tag: 'LUNCH',
  },
  {
    id: 5,
    title: 'PUMPKIN GNOCCHI',
    price: 31.6,
    desc: 'Velvety pumpkin, toasted seeds, and sage butter.',
    src: RecipeSix,
    tag: 'DINNER',
  },
  {
    id: 6,
    title: 'CHEESECAKE',
    price: 15.9,
    desc: 'Silky, tangy, and elegantly finished for the nightcap.',
    src: RecipeThree,
    tag: 'WINE',
  },
  {
    id: 7,
    title: 'CHICKEN RISOTO',
    price: 35.73,
    desc: 'Comforting classic with a modern, elegant twist — perfect for when you crave warmth and flavor in every bite.',
    src: RecipeTwo,
    tag: 'DINNER',
  },
  {
    id: 8,
    title: 'GRILLED FILET',
    price: 41.25,
    desc: 'Charred to perfection and finished with brown butter herbs.',
    src: RecipeSix,
    tag: 'DINNER',
  },
  {
    id: 9,
    title: 'SEARED MEDLEY',
    price: 33.5,
    desc: 'Golden sear, bright textures, and a savory finish.',
    src: RecipeThree,
    tag: 'LUNCH',
  },
];

const categories: Array<MenuItem['tag']> = ['LUNCH', 'DINNER', 'WINE'];

function Segmented({
  value,
  onChange,
  className = '',
}: {
  value: MenuItem['tag'];
  onChange: (v: MenuItem['tag']) => void;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-evenly gap-1 rounded-2xl backdrop-blur-sm bg-black/35  px-1 py-2 shadow-[0_6px_20px_rgba(0,0,0,0.18)] ${className}`}
    >
      {categories.map((c) => {
        const active = c === value;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`${
              notoSansFont.className
            } relative rounded-xl px-3.5 py-1.5 text-sm md:text-xs tracking-[0.18em] transition ${
              active ? 'bg-[#E9DFCF] text-[#C0A078]' : 'text-[#E9DFCF]'
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}

/* ---------------- Modal (overlay) ---------------- */
function MenuItemModal({
  item,
  onClose,
}: {
  item: MenuItem;
  onClose: () => void;
}) {
  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-30 bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Panel: bottom sheet on mobile, centered on desktop */}
      <div
        className="
          fixed z-50
          w-[92%] max-w-[420px] top-1/2 left-1/2 -translate-x-1/2
          md:w-[560px] py-4 md:max-w-none md:top-1/2 md:bottom-auto md:-translate-y-1/2
          rounded-4xl bg-[#FEFAF4] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4.5 left-4.5 h-7 w-7 p-1.5 flex items-center justify-center rounded-full bg-[#E9DFCF] text-[#8B724F]"
        >
          <X stroke="black" />
        </button>

        {/* Image */}
        <div className="pt-16 md:pt-10 px-5 md:px-8 py-7">
          <div className="mx-auto -mt-10 md:-mt-4 mb-2 w-[170px] md:w-[220px] aspect-square rounded-full overflow-hidden">
            <Image
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text block */}
        <div className="border-t-[0.5px] border-black/10" />
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <div className="flex items-center justify-between gap-3 pt-3">
            <h3
              className={`${notoSansFont.className} font-semibold tracking-[0.22em] uppercase text-[#1e1b16] text-sm md:text-base`}
            >
              {item.title}
            </h3>
            <span
              className={`${notoSansFont.className} font-semibold text-[#443d33] text-sm md:text-base`}
            >
              ${item.price.toFixed(2)}
            </span>
          </div>

          <p
            className={`${notoSansFont.className} mt-2 text-xs md:text-sm leading-5 tracking-wide text-black/70`}
          >
            {item.desc}
          </p>
        </div>
      </div>
    </>
  );
}

/* ---------------- Card (clickable) ---------------- */
function Card({
  item,
  onClick,
}: {
  item: MenuItem;
  onClick?: (item: MenuItem) => void;
}) {
  return (
    <article
      onClick={() => onClick?.(item)}
      className="group cursor-pointer border border-black/5 bg-[#FEFAF4] backdrop-blur-[2px] flex flex-col -m-[0.2px]"
      role="button"
      aria-label={item.title}
    >
      <div className="mx-auto mb-4 grid place-items-center p-4">
        <div className="relative aspect-square w-[120px] md:w-[200px] overflow-hidden rounded-full">
          <Image
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col border-t-[0.5px] border-black/5 w-full  p-2 md:p-4 flex-1 max-h-[7.5rem]">
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`${notoSansFont.className} font-semibold text-nowrap text-xs md:text-sm tracking-[0.12em] md:tracking-[0.17em] uppercase text-[#1e1b16]`}
          >
            {item.title}
          </h3>
          <span
            className={`${notoSansFont.className} font-semibold text-xs md:text-sm hidden md:block text-[#443d33]`}
          >
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p
          className={`${notoSansFont.className} mt-2 hidden md:block text-xs leading-5 tracking-wide text-black/60`}
        >
          {item.desc}
        </p>

        <p
          className={`${notoSansFont.className} mt-1 md:hidden text-xs text-black/70`}
        >
          ${item.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}

/* ---------------- Main Section ---------------- */
export function OurMenu() {
  const [active, setActive] = useState<MenuItem['tag']>('DINNER');
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const items = useMemo(
    () => ALL_ITEMS.filter((i) => i.tag === active || active === 'DINNER'),
    [active]
  );

  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="w-full bg-[#FEFAF4] text-[#2B2218] mt-4">
      {/* top bar */}
      <div className="mx-auto w-full max-w-[1200px] pt-4 pl-3 md:pl-0 md:pt-6">
        <div className="flex items-center justify-between">
          <button
            onClick={goBack}
            className={`${notoSansFont.className} rounded-full bg-[#E9DFCF] px-3 py-1 text-xs tracking-[0.16em] text-[#3a3227]`}
          >
            BACK
          </button>
          <h2
            className={`${forumFont.className} text-center text-2xl md:text-5xl`}
          >
            OUR MENU
          </h2>
          <span className="w-[48px]" />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="relative mx-auto hidden w-full max-w-7xl px-4 md:block md:px-6">
        <div className="pointer-events-auto absolute left-1/2 top-[37%] z-20 -translate-x-1/2">
          <Segmented value={active} onChange={setActive} />
        </div>

        <div className="mt-8 grid grid-cols-3">
          {items.map((item) => (
            <Card key={item.id} item={item} onClick={setSelected} />
          ))}
        </div>
        <div className="h-16" />
      </div>

      {/* Mobile layout */}
      <div className="mx-auto w-full px-3 pt-2 md:hidden relative">
        <div className="absolute w-full inset-x-0 top-[45%] z-20 flex justify-center">
          <Segmented
            value={active}
            onChange={setActive}
            className="max-w-[83%] w-full"
          />
        </div>

        <div className="mt-3 grid grid-cols-2 pb-8">
          {items.map((item) => (
            <Card key={`m-${item.id}`} item={item} onClick={setSelected} />
          ))}
        </div>
      </div>

      {/* Overlay */}
      {selected && (
        <MenuItemModal item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
