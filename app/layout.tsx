import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import {inter} from "@/app/_fonts/fonts";
import {SvgDefs} from "@/app/_components/SvgIcons";
import ResponsiveFontSize from "@/app/_components/ResponsiveFontSize";

export const metadata: Metadata = {
    title: "Arknights",
    description: "Arknights Next.js Theme Template Starter",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="zh" className="h-full" style={{fontSize: "16px"}}>
        <ResponsiveFontSize />
        <body className={`${inter.className} w-full h-full text-white bg-black m-0 overflow-hidden`}>
            <div className="w-full h-full relative bg-[url('/media/layout-bg.jpg')] bg-center bg-cover bg-no-repeat">
                {children}
            </div>
            <SvgDefs />
        </body>
    </html>
}
