"use client"
import React, {useState} from "react";
import {IconSocial, IconSound, IconUser} from "@/app/_components/SvgIcons";

const ActiveColor = "#18d1ff"
const InactiveColor = "#c4c2c2"
const BoxClassName: React.ComponentProps<"div">["className"] =
    "h-4/5 m-auto relative flex flex-auto items-center justify-center cursor-pointer transition duration-300"
const SvgClassName: React.ComponentProps<"svg">["className"] = "w-auto h-[2.25rem] pointer-events-none"

interface NavToolProps {
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export function Social({state: [active, setActive]}: NavToolProps) {
    return <div className={BoxClassName} onClick={_ => setActive(!active)}>
        <IconSocial className={SvgClassName} style={{color: active ? ActiveColor : InactiveColor}}/>
    </div>
}

export function Sound() {
    const [active, setActive] = useState(false)
    return <div className={BoxClassName} onClick={_ => setActive(!active)}>
        <IconSound className={SvgClassName} style={{
            color: active ? ActiveColor : InactiveColor,
            transition: "transform .3s",
            transform: `scaleY(${active ? 1 : .5})`,
        }}/>
    </div>
}

export function Person() {
    const [active, setActive] = useState(false)
    return <div className={BoxClassName} onClick={_ => setActive(!active)}>
        <IconUser className={SvgClassName} style={{color: active ? ActiveColor : InactiveColor}}/>
    </div>
}
