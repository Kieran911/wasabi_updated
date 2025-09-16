"use client";

import Image from "next/image";
import { forumFont, notoSansFont } from "../../utils/font";
import mainImg from "@/public/home/ourstory/ourstory.webp";
import abouutButton from "@/public/home/ourstory/abouutButton.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const OurStory = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Adjust as needed for your section
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 1],
    [1.2, 1, 1, 1.2]
  );

  return (
    <div className=" w-full bg-black text-white flex ">
      <div className="w-full overflow-hidden" ref={ref}>
        <motion.div style={{ scale }} className="w-full h-full">
          <Image
            src={mainImg}
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="w-full   gap-[1rem] flex flex-col md:py-[12rem] justify-center items-center">
        <p className={`opacity-50 ${forumFont.className} tracking-widest`}>
          WASABI LEGACY
        </p>
        <h2
          className={`${forumFont.className} text-[#E9DFCF] text-center text-7xl tracking-widest font-bold `}
        >
          OUR <br /> STORY
        </h2>
        <p
          className={` w-[30rem] ${notoSansFont.className} tracking-widest text-center text-[#FEFAF4]
  `}
        >
          Born from a passion for bold flavors and modern flair, Wasabi blends
          the vibrant essence of Japanese cuisine with an upscale dining
          experience.
        </p>

        <button
          style={{ transition: "0.6s ease" }}
          className={`${notoSansFont.className}  tracking-widest cursor-pointer bg-[#C0A078] hover:text-white text-black hover:bg-black border border-[#C0A078] hover:border-white py-[0.3rem] mt-8 pl-[0.3rem] pr-[0.7rem] text-sm flex items-center gap-[0.5rem] rounded-full w-fit`}
        >
          <div className="aspect-square  w-[2.8rem] rounded-full">
            <Image
              src={abouutButton}
              alt="about button"
              className="w-full h-full object-cover "
            />
          </div>{" "}
          ABOUT WASABI{" "}
        </button>
      </div>
    </div>
  );
};

export default OurStory;
