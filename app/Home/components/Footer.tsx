'use client';

import Link from 'next/link';
import footerLogo from '@/public/footerLogo.webp';
import { forumFont, notoSansFont, Optima_regular } from '../../utils/font';
import Image from 'next/image';

const Footer = () => {
  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'MENU', href: '/menu' },
    { label: 'LOCATION', href: '/location' },
    { label: 'CONTACT', href: '/contact' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'EVENTS', href: '/events' },
  ];
  const currentYear = new Date().getFullYear();
  const iconLinks = [
    {
      href: 'tel:+123456789',
      label: 'Phone',
      iconClass: 'bi bi-telephone',
    },
    {
      href: 'mailto:info@wasabi.com',
      label: 'Email',
      iconClass: 'bi bi-envelope',
    },
    {
      href: 'https://instagram.com',
      label: 'Instagram',
      iconClass: 'bi bi-instagram',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];
  return (
    <footer
      className={`flex bg-[#000000] md:pb-[2rem] -mb-[2px] -mt-[1px] md:pt-[4rem] flex-col ${forumFont.className}`}
    >
      {/* === MOBILE (Figma) === */}
      <div className="md:hidden w-full pt-10 pb-8">
        {/* logo */}
        <div className="flex items-center justify-center mb-6">
          <Image
            src={footerLogo}
            alt="Wasabi"
            className="w-24 h-auto opacity-90"
            priority
          />
        </div>
        <hr className="bg-[#C0A079] mt-4  mb-8" />

        {/* vertical nav list */}
        <nav className="w-full mb-8 px-5">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-4"
                >
                  <span className="text-[#C0A079] tracking-wide">
                    {link.label}
                  </span>
                  <i className="bi bi-chevron-right text-[#C0A079]/70" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <hr className="bg-[#C0A079] mt-6  mb-10" />

        {/* CTA + socials */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/location"
            className={`hover:bg-[#222019] text-[#C0A079] px-8 py-2 rounded-full border-[#C0A079] border text-sm font-medium tracking-wide bg-[#16120E] transition ${notoSansFont.className}`}
          >
            SEE LOCATION
          </Link>

          <div className="flex items-center gap-6 mt-1">
            {iconLinks.map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                target={(icon as any).target}
                rel={(icon as any).rel}
                className="rounded-full w-10 h-10 border border-[#C0A079] flex items-center justify-center text-[#C0A079] hover:bg-[#1b1711] transition"
                aria-label={icon.label}
              >
                <i className={icon.iconClass}></i>
              </a>
            ))}
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-10 px-4 flex items-center justify-between text-[#C0A079] text-xs">
          <span>© {currentYear} swiftly. All rights reserved.</span>
          <a
            href="https://www.malkain.com/"
            className="underline underline-offset-4"
          >
            Designed by Malkain Designs
          </a>
        </div>
      </div>

      {/* === DESKTOP/TABLET (your existing layout, untouched) === */}
      <div className="hidden md:flex w-[150rem] flex-col justify-center mx-auto items-center max-w-full">
        <nav className={`w-full`}>
          <ul className="flex justify-between w-full">
            {navLinks.map((link) => (
              <li key={link.label} className="w-full text-center">
                <a
                  href={link.href}
                  className="text-[#C0A079] hover:underline tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* design the middle on here  */}
        <div className="mt-[4rem] mb-[0rem] relative">
          <Image
            src={footerLogo}
            alt="footer logo"
            className="w-[13rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-fit"
          />
          <div
            className="relative max-w-[500px] w-full bg-[#4D4E4D]/25 backdrop-blur-[50px] rounded-[30px] md:py-10 text-[#C0A079] mx-auto"
            style={{ boxShadow: '0 6px 40px 0 #0009' }}
          >
            <div className="relative z-10 flex flex-col gap-2">
              <div
                className={`text-lg md:text-xl md:px-8 font-medium tracking-widest mb-3 uppercase ${forumFont.className}`}
              >
                Canada
              </div>
              <div className="border-b border-[#35302a] mb-4"></div>
              <div className="md:px-8 font-normal mb-2 tracking-[0.25rem]">
                <p className={`${Optima_regular.className}`}>
                  123 Lexington Ave, Apt 4B,
                  <br />
                  Canada, CN 10016
                </p>
              </div>
              <div
                className={`flex flex-col md:px-8 text-sm tracking-[0.2rem] gap-2 text-[#b2afab] mb-2 ${notoSansFont.className}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#C0A079]/50">Opening Days</span>
                  <span className="flex-1 border-b border-[#35302a] mx-2"></span>
                  <span className="text-[#C0A079]/80 text-lg font-normal">
                    Mon - Sat
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#C0A079]/50">Opening Time</span>
                  <span className="flex-1 border-b border-[#35302a] mx-2"></span>
                  <span className="text-[#C0A079]/80 font-normal">
                    9AM - 10PM
                  </span>
                </div>
              </div>
              <div className="border-b border-[#35302a] my-3"></div>
              <div className="md:px-8 ">
                <div className="uppercase tracking-[0.17em] mb-2 text-[1.1rem] font-medium">
                  Direction
                </div>
                <div className="whitespace-pre-line text-[#C0A079] tracking-widest">
                  <p
                    className={`${notoSansFont.className} font-light text-sm tracking-[0.2rem]`}
                  >
                    From Midtown toronto, head south on 5th Ave. <br />
                    Turn left on 30th St, then right on Lexington Ave. <br />
                    123 Lexington Ave will be on your left between 28th and 29th
                    Streets. <br />
                    Street parking is limited — use nearby garages on 30th or
                    Park Ave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full max-w-[94%] flex justify-between items-end mt-10">
          <span className="text-[#C0A079] text-sm">
            © {currentYear} swiftly. All rights reserved.
          </span>

          <div className="flex flex-col items-center gap-4">
            <Link
              href="/location"
              className="hover:bg-[#222019] text-[#C0A079] px-8 py-2 rounded-full border-[#C0A079] border text-sm font-medium tracking-wide bg-[#16120E] transition"
            >
              SEE LOCATION
            </Link>
            <div className="flex gap-7 mt-1">
              {iconLinks.map((icon) => (
                <a
                  key={icon.label}
                  href={icon.href}
                  target={icon.target}
                  rel={icon.rel}
                  className="rounded-full aspect-square text-sm w-[3rem] border border-[#C0A079] p-2 flex items-center justify-center text-[#C0A079] hover:bg-[#1b1711] transition"
                  aria-label={icon.label}
                >
                  <i className={icon.iconClass}></i>
                </a>
              ))}
            </div>
          </div>

          <a
            href="https://www.malkain.com/"
            className="text-[#C0A079] underline underline-offset-4 text-sm text-right whitespace-nowrap"
          >
            Designed by Malakin Designs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
