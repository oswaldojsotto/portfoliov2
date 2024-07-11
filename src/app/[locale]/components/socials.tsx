import React from "react";
import Magnetic from "./magnetic/Magnetic";

const Social = () => {
  const socials = [
    {
      id: 1,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/oswaldojsotto/",
    },
    { id: 2, text: "Github", link: "https://github.com/oswaldojsotto" },
    { id: 3, text: "Whatsapp", link: "https://wa.me/+584129984137" },
  ];

  return (
    <div
      className={`font-agdasima py-4 w-full font-medium text-[17px] md:text-[20px] flex justify-between 
        gap-2 border-t border-dark dark:border-light 
      `}>
      {socials.map(({ id, text, link }) => (
        <Magnetic key={id}>
          <div className="flex gap-2">
            <a
              className="flex cursor-pointer gap-2"
              href={link}
              target="_blank">
              {text}
            </a>
          </div>
        </Magnetic>
      ))}
    </div>
  );
};

export default Social;
