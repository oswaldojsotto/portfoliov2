"use client";
import React, { useEffect, useState } from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/revealAnimation";
import EmailButton from "@/[locale]/components/email-button";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useTheme } from "next-themes";

const Contact = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("contact");
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("dark");

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
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <PreloadWrapper words={[t("preload")]}>
      <section className="relative py-32 h-[100vh] px-8 xl:px-[15%]">
        <RevealAnimation delayWait={1.6}>
          <div className="w-full flex justify-start flex-col md:-mt-24 ">
            <p
              className="font-dimensions flex -pt-[1rem] max-h-[26rem] tracking-[0.5rem]
                text-dark dark:text-light justify-center whitespace-nowrap
                text-[92px] xs:text-[150px] sm:text-[200px] md:text-[230px] lg:text-[220px]">
              {t("ctitle")}
            </p>
          </div>
          <div className="flex justify-center  -mt-6 scale-75 lg:scale-100">
            <EmailButton />
          </div>
        </RevealAnimation>
        <div className="relative bottom-0 w-full my-[12rem] xs:my-32 sm:my-16 md:my-42  font-semibold">
          <div
            className="flex justify-between w-full font-agdasima text-[17px] md:text-[20px] 
        dark:text-light text-dark  px-8 mt-32 sm:-mt-2 md:mt-0  ">
            <div className="flex gap-1">
              <p className="my-0.5">{t("availability")}</p>
              <div className="-mt-[5px]">
                <Image src="/live1.gif" width={42} height={42} alt="live" />
              </div>
            </div>
            <p className="my-0.5">{t("socials")}</p>
          </div>
          <div className="flex justify-between w-full font-agdasima text-[17px] md:text-[20px]  px-8 mb-8 dark:text-light text-dark  ">
            <div className="flex flex-col gap-1">
              <p className="my-0.5">CARACAS, VENEZUELA</p>
              <p>{t("remote")}</p>
            </div>
            <div className="flex gap-4">
              {socials.map(({ id, to, text, srcLight, srcDark }) => (
                <a
                  key={id}
                  href={to}
                  target="_blank"
                  className="flex gap- max-w-[42px] ">
                  <Image
                    className="w-6 h-6"
                    src={currentTheme === "dark" ? srcDark : srcLight}
                    width={18}
                    height={18}
                    alt={text}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PreloadWrapper>
  );
};

export default Contact;
