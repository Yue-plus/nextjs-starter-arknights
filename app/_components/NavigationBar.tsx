import {oswald_medium} from "@/app/fonts";
import React from "react";

export interface NavigationItem {
    titleZh: string
    titleEn: string
    href: string
}

export const NavigationList: NavigationItem[] = [
    {titleEn: "INDEX", titleZh: "首页", href: "/#index"},
    {titleEn: "INFORMATION", titleZh: "情报", href: "/#information"},
    {titleEn: "OPERATOR", titleZh: "干员", href: "/#operator"},
    {titleEn: "WORLD", titleZh: "设定", href: "/#world"},
    {titleEn: "MEDIA", titleZh: "泰拉万象", href: "/#media"},
    {titleEn: "MORE", titleZh: "更多内容", href: "/#more"},
]

interface NavigationBarProps {
    viewIndex: number
}

export default function NavigationBar({viewIndex}: NavigationBarProps) {
    location.hash = "#" + NavigationList[viewIndex].titleEn.toLowerCase()
    return <nav className="fixed top-0 right-0 left-0 z-[23] flex items-center" style={{
        height: "6.75rem",
        backgroundImage: "linear-gradient(0deg, transparent, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8));"
    }}>
        <ul className="flex justify-evenly">{
            NavigationList.map((item: NavigationItem, index, array) => {
                return <li key={index}
                           className={`inline-block text-center mx-10 duration-300 hover:text-ark-blue ${viewIndex == index ? "text-ark-blue" : ""}`}>
                    <a href={item.href}>
                        <div className={`${oswald_medium.className} text-xl`}>{item.titleEn}</div>
                        <div>{item.titleZh}</div>
                    </a>
                </li>
            })
        }</ul>
    </nav>
}
