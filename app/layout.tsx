import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import {inter} from "@/app/fonts";


export const metadata: Metadata = {
    title: "Arknights",
    description: "Arknights Next.js Theme Template Starter",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="zh" style={{fontSize: "12px"}}>
        <body className={inter.className}>{children}</body>
    </html>
}
