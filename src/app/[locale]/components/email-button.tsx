"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useClipboard } from "@/hooks/useClipboard";
import { useTranslation } from "react-i18next";

const EmailButton = ({ email = false }: { email?: boolean }) => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation("contact");
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("dark");
  const { copyToClipboard } = useClipboard();

  const lightIcons = [`/mail-open-light.svg`, `/mail-light.svg`];
  const darkIcons = [`/mail-open-dark.svg`, `/mail-dark.svg`];

  const iconSet = currentTheme === "dark" ? lightIcons : darkIcons;

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const handleClick = () => {
    copyToClipboard("oswaldojsotto@gmail.com");
  };

  return (
    <div
      className="flex cursor-pointer group w-[18rem] xs:w-[22rem]"
      onClick={() => {
        handleClick();
        setCopied(true);
      }}
      onMouseLeave={() => setCopied(false)}>
      <div
        className="group relative border-2 rounded-l-md  h-[3.1rem] border-dark dark:border-light flex 
      justify-center z-1 w-auto ">
        <Image
          className={`px-1  ${copied ? "mb-[6px]" : ""}`}
          src={copied ? iconSet[0] : iconSet[1]}
          alt="email"
          width={36}
          height={36}
        />
      </div>
      <div
        className="group w-full h-[3.1rem] overflow-hidden bg-dark text-light dark:bg-light dark:text-dark rounded-r-md
      justify-end text-sm  flex flex-col transition-all duration-200  font-dimensions font-medium cursor-pointer">
        <div className="group-hover:-translate-y-[52px] transition-all duration-200  flex justify-center flex-col  h-[3rem] ">
          <p className="text-[17px] xs:text-[20px] px-2 flex justify-center pt-[4.5rem]  py-[1rem] font-dimensions font-medium">
            {copied ? t("clipboard") : "OSWALDOJSOTTO @ GMAIL.COM"}
          </p>
          <p className="text-[17px] xs:text-[20px] px-2 flex justify-center transition-all duration-200  py-[1rem] font-dimensions font-medium">
            {copied ? t("clipboard") : "OSWALDOJSOTTO @ GMAIL.COM"}
            <span
              className="absolute bottom-0 right-0 h-[2px]  bg-indigo-300 transition-all delay-200 
          duration-100"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailButton;
