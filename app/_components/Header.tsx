"use client"
import React, {useEffect} from "react";
import Image from "next/image";
import {Person, Social, Sound} from "@/app/_components/NavTools";
import NavMenu from "@/app/_components/NavMenu";
import arknightsConfig from "@/arknights.config";
import {NavbarItem} from "@/app/_types/config";
import nextConfig from "@/next.config.mjs";

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
            const newIndex = arknightsConfig.navbar.items.findIndex(item =>
                item.title === newHash.toUpperCase())
            const oldIndex = arknightsConfig.navbar.items.findIndex(item =>
                item.title === oldHash.toUpperCase())
            document.getElementById(newHash)!.style.cssText += `width: 100%; left: 0};`
            document.getElementById(oldHash)!.style.cssText += `width: 0%; left: ${newIndex > oldIndex ? "0" : "auto"};`
            setViewIndex(newIndex)
        }
        window.addEventListener("hashchange", handleHashChange)
        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [setViewIndex]);

    useEffect(() => {
        location.hash = "#" + arknightsConfig.navbar.items[viewIndex].title.toLowerCase()
    }, [viewIndex])

    return <header className="w-full h-[6.75rem] portrait:h-[9.375rem] absolute top-0 left-0 z-[23] flex items-center"
                   style={{backgroundImage: "linear-gradient(0deg, transparent, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8))"}}>
        <a className="mx-10" href="/" style={{width: "12rem", marginLeft: "3rem", marginRight: "auto"}}>
            <Image width={180} height={60}
                   src={(nextConfig.assetPrefix ?? "") + arknightsConfig.navbar.logo.src}
                   alt={arknightsConfig.navbar.logo.alt}/>
        </a>
        <nav className="portrait:hidden">
            <ul className="flex justify-evenly">{
                arknightsConfig.navbar.items.map((item: NavbarItem, index) => {
                    return <li key={index}
                               className={"inline-block text-center mx-10 duration-300 hover:text-ark-blue"
                                   + (viewIndex !== index || " text-ark-blue")}>
                        <a href={item.href} className="text-left">
                            <div className="font-oswaldMedium" style={{fontSize: "1.375rem"}}>{item.title}</div>
                            <div style={{fontSize: "0.875rem"}}>{item.subtitle}</div>
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
