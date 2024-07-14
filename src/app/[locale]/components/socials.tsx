import React, { useEffect, useState } from "react";
import Magnetic from "@/[locale]/components/magnetic/magnetic";
import Image from "next/image";
import { useTheme } from "next-themes";

const Social = () => {
  const { theme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState<string | undefined>("dark");

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

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

  return (
    <div className="flex justify-between w-full">
      {socials.map(({ id, to, text, srcLight, srcDark }) => (
        <Magnetic key={id}>
          <a key={id} href={to} target="_blank" className="">
            <Image
              className="w-6 h-6"
              src={currentTheme === "dark" ? srcDark : srcLight}
              width={18}
              height={18}
              alt={text}
            />
          </a>
        </Magnetic>
      ))}
    </div>
  );
};

export default Social;
