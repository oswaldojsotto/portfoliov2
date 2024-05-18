import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    
    colors: {
      red: 'red',
      light: "#FFFFFF",
      dark: "#262526",
      orange: '#EA2027',
      pink: '#FFC2D1',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "oswald": "var(--font-oswald)", 
        "raleway": "var(--font-raleway)", 
        "bebas": "var(--font-bebas)", 
        dimensions: ["var(--font-dimensions)"] 
      }
    },
  },
  plugins: [require('daisyui'),],
};
export default config;
