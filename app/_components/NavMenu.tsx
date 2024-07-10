"use client"
import React from "react";
import {NavigationList} from "@/app/_components/Header";
import {oswald_medium} from "@/app/fonts"

interface NavMenuProps {
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

const LineClassName: React.ComponentProps<"div">["className"] =
    "w-full h-[2px] bg-white absolute left-1/2 transition duration-300"

export default function NavMenu({state: [active, setActive]}: NavMenuProps) {
    return <div className="w-[5.75rem] h-full landscape:hidden portrait:flex"
                onClick={() => setActive(!active)}>
        <div className="w-[2.625rem] h-[2.375rem] m-auto relative">
            <div className={LineClassName} style={{
                top: active ? "1.1875rem" : "1px",
                transform: `translate(-50%, -50%) ${active ? "rotate(45deg) scaleX(1.2)" : ""}`,
            }}></div>
            <div className={`${LineClassName} top-1/2 -translate-x-1/2 -translate-y-1/2`} style={{
                opacity: active ? 0 : 1,
                transform: `translateX(${active ? "-100%" : "-50%"}) translateY(-50%)`,
            }}></div>
            <div className={`${LineClassName} bottom-px -translate-x-1/2 translate-y-1/2`} style={{
                bottom: active ? "1.1875rem" : "1px",
                transform: `translate(-50%, 50%) ${active ? "rotate(-45deg) scaleX(1.2)" : ""}`,
            }}></div>
        </div>
    </div>
}

function Navigation({viewIndex, state: [active, setActive]}: {
    viewIndex: number
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}) {
    let delay = -70
    return <div className="pt-[1.25rem] pr-[2.25rem] pb-0 pl-[3.375rem]">{
        NavigationList.map((item, index) => {
            delay += 70
            return <a key={index} href={item.href} onClick={() => {setActive(false)}}
                      className={"h-[7.5rem] flex items-center justify-between transition ease-in-out duration-200"}
                      style={{
                          color: viewIndex === index ? "#19d1ff" : "inherit",
                          borderBottom: "1px solid hsla(0, 0%, 100%, .3)",
                          transitionDelay: delay + "ms",
                          opacity: active ? 1 : 0,
                          transform: `translateX(${active ? "0" : "20%"})`,
                      }}>
                <div className={`transition duration-300 text-4xl ${oswald_medium.className}`}>
                    {item.titleEn}
                </div>
                <div className="h-full text-[1.75rem] relative flex items-center transition duration-300">
                    {item.titleZh}
                    <div className="w-full h-[.375rem] absolute right-0 bottom-[-.1875rem] bg-[currentColor]"></div>
                </div>
            </a>
        })
    }</div>
}

export function Menu({viewIndex, state: [active, setActive]}: {
    viewIndex: number
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}) {
    return <div className={"w-full h-full absolute top-0 left-0 z-[22] overflow-hidden bg-black bg-opacity-90"
        + " transition-[opacity,visibility] ease-in-out duration-[600ms]"}
                style={{opacity: active ? 1 : 0, visibility: active ? "visible" : "hidden"}}>
        <div className="w-full h-px absolute left-0 top-[9.375rem] bg-[#4f4f4f]"></div>
        <div className="w-full h-full pt-[9.375rem] pr-[5.75rem] flex flex-col">
            <Navigation {...{viewIndex}} state={[active, setActive]} />
        </div>
        <div className="w-px h-full absolute top-0 right-[5.75rem] bg-[#4f4f4f]"></div>
    </div>
}
