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
      dark: "#202124",
      orange: '#FF4C24',
      pink: '#F40000',
      blue: '#5542FF',
      green: '#39FF14'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        agdasima: ["var(--font-agdasima)"], 
        dimensions: ["var(--font-dimensions)"], 
        robotomono: ["var(--font-roboto-mono)"], 
        brockmann: ["var(--font-brockmann)"] 
      }
    },
  },
  plugins: [require('daisyui'),],
};
export default config;
