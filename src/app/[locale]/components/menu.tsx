"use client";

import { useState } from "react";
import StaggeredMenu from "./staggered-menu";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      label: "home",
      ariaLabel: "Go to home page",
      link: "/",
    },
    {
      label: "About",
      ariaLabel: "Learn about me",
      link: "/about",
    },
    {
      label: "PROJECTS",
      ariaLabel: "View my projects",
      link: "/projects",
    },
    {
      label: "CONTACT",
      ariaLabel: "Get in touch with me",
      link: "/contact",
    },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "Whatsapp", link: "https://twitter.com" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-10 ${
        !open && "pointer-events-none"
      }`}>
      <StaggeredMenu
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        colors={["#B19EEF", "#5227FF"]}
        accentColor="#ff6b6b"
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};
