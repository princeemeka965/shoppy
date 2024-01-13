import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["__Montserrat_cce811", "__Montserrat_Fallback_cce811"],
      },
      colors: {
        shoppyBlue: "#0D6EFD",
        maniacBlue: "#E3F0FF",
        carrotOrange: "#F38332",
        quoteCyalin: "#55BDC3",
        redFade: "#FFE3E3",
        cyalinRed: "#EB001B",
        greySky: "#D1E7FF",
        grayLyanin: "#EFF2F4",
      },
    },
  },
  plugins: [],
});
export default config;
