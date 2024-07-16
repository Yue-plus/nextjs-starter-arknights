import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

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
