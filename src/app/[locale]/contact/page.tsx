"use client";
import React, { useEffect } from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/revealAnimation";
import EmailButton from "../components/email-button";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Contact = () => {
  const { t } = useTranslation("contact");

  const socials = [
    {
      id: 1,
      text: "LINKEDIN",
      to: "https://www.linkedin.com/in/oswaldojsotto/",
      srcLight: "/linkedin-color.svg",
      srcDark: "/linkedin-white.svg",
    },
    {
      id: 2,
      text: "GITHUB",
      to: "https://github.com/oswaldojsotto",
      srcLight: "/github-color.svg",
      srcDark: "/github-white.svg",
    },

    {
      id: 3,
      text: "WHATSAPP",
      to: "https://wa.me/+584129984137",
      srcLight: "/whatsapp-color.svg",
      srcDark: "/whatsapp-white.svg",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <PreloadWrapper words={["Contact"]}>
      <section className="relative py-32 h-[100vh] px-8 xl:px-[15%]">
        <RevealAnimation delayWait={1.6}>
          <div className="w-full flex justify-start flex-col">
            <p
              className="font-dimensions flex -pt-[1rem] max-h-[26rem] tracking-[0.5rem]
                text-dark dark:text-light justify-center whitespace-nowrap
                text-[92px] xs:text-[150px] sm:text-[200px] md:text-[230px] lg:text-[230px]  xl:text-[268px]
                mb-[2rem] xs:mb-[1rem] sm:-mb-[1.5rem] md:-mb-[2.5rem] lg:mb-[-4.5rem] lg:-mt-16 xl:mb-[-10px]    ">
              {t("contact")}
            </p>
          </div>
        </RevealAnimation>
        <div className="flex justify-center lg: mt-4 xl:-mt-6 scale-75 sm:scale-100">
          <EmailButton />
        </div>
        <div className="flex justify-between w-full font-agdasima text-[25px] dark:text-light text-dark mt-16 px-8  bottom-8 ">
          <div className="flex gap-1">
            <p className="my-0.5">AVAILABLE TO WORK</p>
            <div>
              <Image src="/live1.gif" width={42} height={42} alt="live" />
            </div>
          </div>
          <p className="my-0.5">SOCIALS</p>
        </div>
        <div className="flex justify-between w-full font-agdasima text-[20px]  px-8 dark:text-light text-dark  bottom-8  ">
          <div className="flex gap-1">
            <p className="my-0.5">CARACAS, VENEZUELA</p>
          </div>
          {socials.map(({ id, to, text, srcLight, srcDark }) => (
            <a
              key={id}
              href={to}
              target="_blank"
              className="flex gap-1 max-w-[42px]">
              <Image src={srcDark} width={22} height={22} alt={text} />
            </a>
          ))}
        </div>
      </section>
    </PreloadWrapper>
  );
};

export default Contact;
