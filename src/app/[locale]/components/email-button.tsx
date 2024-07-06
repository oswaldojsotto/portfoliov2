import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useClipboard } from "@/hooks/useClipboard";

const EmailButton = ({ email = false }: { email: boolean }) => {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();
  const { copyToClipboard } = useClipboard();

  const iconsLight = [`/mail-open-light.svg`, `/mail-light.svg`];
  const iconsDark = [`/mail-open-dark.svg`, `/mail-dark.svg`];

  const iconSet = theme.theme === "dark" ? iconsLight : iconsDark;

  const handleClick = () => {
    copyToClipboard("oswaldojsotto@gmail.com");
  };

  return (
    <div
      className="flex cursor-pointer group w-[20rem]"
      onClick={() => {
        handleClick();
        setCopied(true);
      }}
      onMouseLeave={() => setCopied(false)}>
      <div className="group relative border-2 rounded-l-md w-[3rem] h-[3.1rem] border-dark dark:border-light flex justify-center ">
        <Image
          className={copied ? "mb-[6.5px]" : ""}
          src={copied ? iconSet[0] : iconSet[1]}
          alt="email"
          width={28}
          height={28}
        />
      </div>
      <div
        className="group  w-full h-[3.1rem] overflow-hidden bg-dark  text-light dark:bg-light dark:text-dark rounded-r-md
      justify-end text-sm  flex flex-col transition-all duration-200  font-agdasima  cursor-pointer">
        <div className="group-hover:-translate-y-[52px] transition-all duration-200  flex justify-center flex-col  h-[3rem] ">
          <p className="text-[26px] px-2 flex justify-center pt-[4rem]  py-[1rem] font-agdasima">
            {copied ? "COPIADO AL PORTAPAPELES!" : "OSWALDOJSOTTO@GMAIL.COM"}
          </p>
          <p className="text-[26px] px-2 flex justify-center transition-all duration-200  py-[1rem] font-agdasima ">
            {copied ? "COPIADO AL PORTAPAPELES!" : "OSWALDOJSOTTO@GMAIL.COM"}
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
