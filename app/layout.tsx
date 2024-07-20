import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import {
    inter,
    bender_bold,
    bender_regular,
    novecentosanswide_bold,
    novecentosanswide_demiBold,
    novecentosanswide_medium,
    novecentosanswide_ultraBold,
    oswald_medium,
    sdkSans_regular,
} from "@/app/_fonts/fonts";
import {SvgDefs} from "@/app/_components/SvgIcons";
import ResponsiveFontSize from "@/app/_components/ResponsiveFontSize";
import arknightsConfig from "@/arknights.config";

export const metadata: Metadata = {
    metadataBase: arknightsConfig.metadataBase,
    title: arknightsConfig.title,
    description: arknightsConfig.description,
};

const fontVariables = " " + inter.variable
    + " " + bender_bold.variable
    + " " + bender_regular.variable
    + " " + novecentosanswide_bold.variable
    + " " + novecentosanswide_demiBold.variable
    + " " + novecentosanswide_medium.variable
    + " " + novecentosanswide_ultraBold.variable
    + " " + oswald_medium.variable
    + " " + sdkSans_regular.variable

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang={arknightsConfig.language} className={"h-full" + fontVariables} style={{fontSize: "16px"}}>
        <ResponsiveFontSize />
        <body className={`w-full h-full text-white bg-black m-0 overflow-hidden`}>
            <div className="w-full h-full relative bg-[url('/media/layout-bg.jpg')] bg-center bg-cover bg-no-repeat">
                {children}
            </div>
            <SvgDefs />
        </body>
    </html>
}
