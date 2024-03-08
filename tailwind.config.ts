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
  plugins: [],
};
export default config;
