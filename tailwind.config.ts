import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      OfficeTimes : ["var(--font-officetimes)"],
      CaliberFont : ["var(--font-caliberfont)"],
      CalibreReg : ["var(--font-calibrereg"]
    },  
    extend: {
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }

        'mm': '375px',
        // => @media (min-width: 768px) { ... }

        'ml': '425px',
        // => @media (min-width: 1024px) { ... }

        'md': '768px',
        // => @media (min-width: 1280px) { ... }

        'lg': '1024px',
        'xl': '1440px',
        '2xl': '2560px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFF9E1", // Add your primary color code here
        secondary: "#4682b4", // Add your secondary color code here
        txtwhite: '#EEF5FC',
        txtgray: '#dde1e7',
        txtblack: '#000000'
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
