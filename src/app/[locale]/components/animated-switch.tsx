"use client";
import React, { useState, useEffect } from "react";
import "@/app/[locale]/styles/switch-theme.css";
import { useTheme } from "next-themes";

function AnimatedSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (theme === "system") {
      setTheme("dark");
    }
  });

  const handleToggleChange = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="wrapper">
      <div className="toggle">
        <input
          className="toggle-input"
          type="checkbox"
          checked={theme === "light" ? true : false}
          onChange={handleToggleChange}
        />
        <div className="toggle-bg"></div>
        <div className="toggle-switch">
          <div className="toggle-switch-figure"></div>
          <div className="toggle-switch-figureAlt"></div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedSwitch;
