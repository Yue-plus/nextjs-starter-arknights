import {Inter, Oswald} from "next/font/google";
import localFont from "next/font/local";

// https://fonts.google.com/specimen/Inter
export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

// https://web.hycdn.cn/arknights/official/_next/static/media/Bender-Bold.2ec7a8ea.woff2
export const bender_bold = localFont({
    src: "./Bender-Bold.woff2",
    display: "swap",
    variable: "--font-bender-bold",
})

// https://web.hycdn.cn/arknights/official/_next/static/media/Bender-Regular.02637c42.woff2
export const bender_regular = localFont({
    src: "./Bender-Regular.woff2",
    display: "swap",
    variable: "--font-bender-regular",
})

// https://web.hycdn.cn/arknights/official/_next/static/media/Novecentosanswide-Bold.bec3fb9c.woff2
export const novecentosanswide_bold = localFont({
    src: "./Novecentosanswide-Bold.woff2",
    display: "swap",
    variable: "--font-novecentosanswide-bold",
})

// https://web.hycdn.cn/arknights/official/_next/static/media/Novecentosanswide-DemiBold.5bc9caf4.woff2
export const novecentosanswide_demiBold = localFont({
    src: "./Novecentosanswide-DemiBold.woff2",
    display: "swap",
    variable: "--font-novecentosanswide-demiBold",
})

// https://web.hycdn.cn/arknights/official/_next/static/media/Novecentosanswide-Medium.76589ca6.woff2
export const novecentosanswide_medium = localFont({
    src: "./Novecentosanswide-Medium.woff2",
    display: "auto",
    variable: "--font-novecentosanswide-medium",
})

// https://web.hycdn.cn/arknights/official/_next/static/media/Novecentosanswide-UltraBold.acb3c240.woff2
export const novecentosanswide_ultraBold = localFont({
    src: "./Novecentosanswide-UltraBold.woff2",
    display: "swap",
    variable: "--font-novecentosanswide-ultraBold",
})

// https://web.hycdn.cn/arknights/official/_next/static/media/Oswald-DemiBold.9d1a345e.woff2
// export const oswald_demiBold = localFont({
//     src: "./Oswald-DemiBold.woff2",
//     display: "swap",
// })

// https://fonts.google.com/specimen/Oswald
export const oswald_medium = Oswald({
    subsets: ["latin"],
    weight: "500",
    variable: "--font-oswald-medium",
})

// https://web.hycdn.cn/arknights/official/_next/static/media/Oswald-Medium.42fb848a.woff2
// export const oswald_medium = localFont({
//     src: "./Oswald-Medium.woff2",
//     display: "swap",
// })

// https://web.hycdn.cn/hg_web_sdk/lib/assets/SDK_Sans-Regular.0c958b383c2ade69bfbb.woff
export const sdkSans_regular = localFont({
    src: "./SDK_Sans-Regular.woff",
    display: "swap",
    variable: "--font-sdk-sans-regular",
})
