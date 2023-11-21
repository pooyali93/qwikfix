import React from "react";
import Button from "./UI/Button";

import { heroTag, heroTitle, heroSubtitle } from "@/constants/data";
import FadeIn from "./UI/FadeIn";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-container h-screen flex flex-col gap-20 mt-14  md:gap-28 lg:py-10 xl:flex-row">
      <div className="absolute top-[-5px] left-[-20px]">
        <FadeIn delay={0.2} direction="right" padding fullWidth>
          <Image
            src="/hero_top.png"
            alt="blue shape"
            width={194}
            height={214}
          />
        </FadeIn>{" "}
      </div>
      <div className="absolute top-[-5px] right-[-20px]">
        <FadeIn delay={0.2} direction="left" padding fullWidth>
          <Image
            src="/hero_man.png"
            alt="man holding a diagnostic machine "
            width={650}
            height={620}
          />
        </FadeIn>
      </div>
      {/* <div className='hero-map'></div> */}

      {/* Left side*/}
      <div className="relative z-20 flex flex-1 flex-col justify-center lg: px-20 xl:w-1/2">
        <FadeIn delay={0.2} direction="right" padding fullWidth>
          <h5 className="mt-[90px] text-center bold-12 leading-tight xs:text-[16px] text-[//#region] max-w-[1050px] uppercase">
            {heroTag}
          </h5>
        </FadeIn>
        <FadeIn delay={0.4} direction="right" padding fullWidth>
          <h1 className="text-center bold-52 md:bold-34 uppercase">{heroTitle}</h1>
        </FadeIn>
        <FadeIn delay={0.6} direction="right" padding fullWidth>
          <h1 className="text-center bold-52 text-blue-70 md:bold-34 uppercase">
            {heroSubtitle}
          </h1>
        </FadeIn>
        <div className="flex flex-col w-full gap-3 mt-4 sm:flex-row">
          <Button type="button" title="Get A Quote" variant="btn_green" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
