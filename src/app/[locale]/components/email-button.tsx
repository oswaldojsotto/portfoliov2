import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from "react";

const EmailButton = ({ email = false }: { email: boolean }) => {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();

  console.log(theme);

  const iconsLight = [`/mail-open-light.svg`, `/mail-light.svg`];
  const iconsDark = [`/mail-open-dark.svg`, `/mail-dark.svg`];

  const iconSet = theme.theme === "dark" ? iconsLight : iconsDark;

  return (
    <div
      className="flex cursor-pointer group max-w-full w-full"
      onClick={() => setCopied(true)}
      onMouseLeave={() => setCopied(false)}>
      <div className="group relative border-2 rounded-l-md w-[3rem] h-[3.1rem] border-dark dark:border-light flex justify-center z-30">
        <Image
          className={copied ? "mb-[6px]" : ""}
          src={copied ? iconSet[0] : iconSet[1]}
          alt="email"
          width={28}
          height={28}
        />
      </div>
      <div
        className="group mr-16  h-[3.1rem] overflow-hidden bg-dark  text-light dark:bg-light dark:text-dark rounded-r-md
      justify-center text-sm  flex flex-col transition-all duration-200  font-agdasima  cursor-pointer">
        <div className="group-hover:-translate-y-[52px] transition-all duration-200  flex justify-center flex-col  h-[3rem] ">
          <p className="text-[26px] px-2 flex justify-center pt-[4rem]  py-[1rem] font-agdasima">
            {copied ? "COPIED TO CLIPBOARD!" : "OSWALDOJSOTTO@GMAIL.COM"}
          </p>
          <p className="text-[26px] px-2 flex justify-center transition-all duration-200  py-[1rem] font-agdasima ">
            {copied ? "COPIED TO CLIPBOARD!" : "OSWALDOJSOTTO@GMAIL.COM"}
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
