"use client"
import {oswald_medium} from "@/app/fonts/fonts";
import React, {useEffect} from "react";
import Image from "next/image";
import {Person, Social, Sound} from "@/app/_components/NavTools";
import NavMenu from "@/app/_components/NavMenu";

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

export default function Header({
                                   viewIndexState: [viewIndex, setViewIndex],
                                   navMenuState,
                                   socialToolState,
                                   personInfoState,
                               }: {
    viewIndexState: [number, React.Dispatch<React.SetStateAction<number>>]
    navMenuState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    socialToolState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    personInfoState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}) {
    useEffect(() => {
        const handleHashChange = (hce: HashChangeEvent) => {
            const newHash = hce.newURL.split("#")[1]
            const oldHash = hce.oldURL.split("#")[1]
            const newIndex = NavigationList.findIndex(item => item.titleEn === newHash.toUpperCase())
            const oldIndex = NavigationList.findIndex(item => item.titleEn === oldHash.toUpperCase())
            document.getElementById(newHash)!.style.cssText += `width: 100%; left: 0};`
            document.getElementById(oldHash)!.style.cssText += `width: 0%; left: ${newIndex > oldIndex ? "0" : "auto"};`
            setViewIndex(newIndex)
        }
        window.addEventListener("hashchange", handleHashChange)
        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [setViewIndex]);

    useEffect(() => {
        location.hash = "#" + NavigationList[viewIndex].titleEn.toLowerCase()
    }, [viewIndex])

    return <header className="w-full h-[6.75rem] portrait:h-[9.375rem] absolute top-0 left-0 z-[23] flex items-center"
                   style={{backgroundImage: "linear-gradient(0deg, transparent, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8))"}}>
        <a className="mx-10" href="/" style={{width: "12rem", marginLeft: "3rem", marginRight: "auto"}}>
            <Image width={180} height={60} src="/next.svg" alt="next"/>
        </a>
        <nav className="portrait:hidden">
            <ul className="flex justify-evenly">{
                NavigationList.map((item: NavigationItem, index) => {
                    return <li key={index}
                               className={`inline-block text-center mx-10 duration-300 hover:text-ark-blue ${viewIndex == index ? "text-ark-blue" : ""}`}>
                        <a href={item.href} className="text-left">
                            <div className={oswald_medium.className} style={{fontSize: "1.375rem"}}>{item.titleEn}</div>
                            <div style={{fontSize: "0.875rem"}}>{item.titleZh}</div>
                        </a>
                    </li>
                })
            }</ul>
        </nav>
        <div className="w-[14.75rem] h-full flex pl-[.75rem]">
            <Social state={socialToolState}/>
            <Sound/>
            <Person state={personInfoState}/>
        </div>
        <NavMenu state={navMenuState}/>
    </header>
}
