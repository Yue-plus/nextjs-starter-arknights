import type {Config} from "tailwindcss";
import colors from "tailwindcss/colors";
import nextConfig from "./next.config.mjs";

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
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "index": `url(${nextConfig.assetPrefix ?? ""}/media/index-bg.jpg)`,
                "layout": `url(${nextConfig.assetPrefix ?? ""}/media/layout-bg.jpg)`,
                "common-mask": `url(${nextConfig.assetPrefix ?? ""}/media/common_mask.png)`,
                "mask-block": `url(${nextConfig.assetPrefix ?? ""}/media/mask_block.png)`,
                "mask-block-m": `url(${nextConfig.assetPrefix ?? ""}/media/mask_block_m.png)`,
                "list-texture": `url(${nextConfig.assetPrefix ?? ""}/media/list_bg_texture.png)`,
            },
            keyframes: {
                downHide: {
                    "0%": {opacity: "0", transform: "translateY(0)"},
                    "40%": {opacity: "1", transform: "translateY(0)"},
                    "80%": {opacity: "1"},
                    "100%": {opacity: "0", transform: "translateY(30%)"},
                },
                showHide: {
                    "0%,100%": {opacity: "0"},
                    "50%": {opacity: "1"},
                }
            },
            animation: {
                downHide: "downHide 1.5s infinite",
                showHide: "showHide 2s infinite",
            },
        },
    },
    plugins: [],
};

export default config;
