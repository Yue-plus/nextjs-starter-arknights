import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import {novecentosanswide_bold} from "@/app/_fonts/fonts";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "ark-blue": "#18d1ff",
      "end-yellow": "#ffee22",
      "transparent": colors.transparent,
      "current": colors.current,
      "inherit": colors.inherit,
      "black": colors.black,
      "white": colors.white,
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        benderBold: ["var(--font-bender-bold)"],
        benderRegular: ["var(--font-bender-regular)"],
        n15eBold: ["var(--font-novecentosanswide-bold)"],
        n15eDemiBold: ["var(--font-novecentosanswide-demiBold)"],
        n15eMedium: ["var(--font-novecentosanswide-medium)"],
        n15eUltraBold: ["var(--font-novecentosanswide-ultraBold)"],
        oswaldMedium: ["var(--font-oswald-medium)"],
        sdkSansRegular: ["var(--font-sdk-sans-regular)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        downHide: {
          "0%": {opacity: "0", transform: "translateY(0)"},
          "40%": {opacity: "1", transform: "translateY(0)"},
          "80%": {opacity: "1"},
          "100%": {opacity: "0", transform: "translateY(30%)"},
        }
      },
      animation: {
        downHide: "downHide 1.5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
