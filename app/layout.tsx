import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import {inter} from "@/app/fonts/fonts";
import {SvgDefs} from "@/app/_components/SvgIcons";


export const metadata: Metadata = {
    title: "Arknights",
    description: "Arknights Next.js Theme Template Starter",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="zh" className="h-full" style={{fontSize: "16px"}}>
        <body className={`${inter.className} w-full h-full text-white bg-black m-0 overflow-hidden`}>
            <div className="w-full h-full relative bg-[url('/media/bg.jpg')] bg-center bg-cover bg-no-repeat">
                {children}
            </div>
            <SvgDefs />
        </body>
    </html>
}
