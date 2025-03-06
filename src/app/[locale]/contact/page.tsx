"use client";
import React from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/reveal-animation";
import EmailButton from "@/[locale]/components/email-button";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Social from "@/[locale]/components/socials";

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <PreloadWrapper words={[t("preload")]}>
      <section className="relative w-full h-[100vh] px-8 xl:px-[15%] ">
        <div className="w-full h-full flex justify-evenly   flex-col ">
          <RevealAnimation delayWait={1.6}>
            <p
              className="font-dimensions flex mt-32
                text-dark dark:text-light justify-center whitespace-nowrap
               text-[50px] xs:text-[80px] md:text-[100px] lg:text-[150px] xl:text-[170px]">
              {t("ctitle")}
            </p>
          </RevealAnimation>
          <RevealAnimation delayWait={1.7}>
            <div className="flex justify-center -mt-2">
              <EmailButton />
            </div>
          </RevealAnimation>

          <RevealAnimation delayWait={1.8}>
            <div
              className="flex justify-between w-full font-dimensions text-[17px] md:text-[20px] 
        dark:text-light text-dark px-8 mt-32 sm:-mt-2 md:mt-0  ">
              <div className="flex gap-1">
                <p className="my-1">{t("availability")}</p>
                <div className="-mt-[5px]">
                  <Image
                    unoptimized
                    src="/live1.gif"
                    width={42}
                    height={42}
                    alt="live"
                  />
                </div>
              </div>
              <p className="my-0.5">{t("socials")}</p>
            </div>
            <div className="flex justify-between w-full font-agdasima text-[17px] md:text-[20px]  px-8 mb-8 dark:text-light text-dark  ">
              <div className="flex flex-col gap-1">
                <p className="my-0.5"></p>
                <p>{t("remote")}</p>
              </div>
              <div className="flex w-24 flex-col h-8">
                <Social />
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </PreloadWrapper>
  );
};

export default Contact;
