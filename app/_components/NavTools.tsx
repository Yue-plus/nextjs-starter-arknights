"use client"
import React, {useState} from "react";

const ActiveColor = "#18d1ff"
const InactiveColor = "#c4c2c2"
const IconClassName: React.ComponentProps<"div">["className"] = "h-4/5 m-auto relative flex flex-auto items-center justify-center cursor-pointer transition duration-300"
const SvgClassName: React.ComponentProps<"svg">["className"] = "w-auto h-[2.25rem] pointer-events-none"

function Social() {
    const [active, setActive] = useState(false)
    return <div className={IconClassName} onClick={(e) => setActive(!active)}>
        <svg className={SvgClassName} viewBox="0 0 27 35">
            <path fillRule="evenodd" fill={active ? ActiveColor : InactiveColor}
                  d="M19.281 10.017L6.058 22.967.48 17.506l5.578-5.461 2.789 2.73 7.648-7.485-1.397-1.367L20.677.461l5.58 5.462-5.58 5.461-1.396-1.367zm-4.863 10.217l4.863 4.761 1.396-1.367 5.58 5.461-5.58 5.462-5.579-5.462 1.397-1.366-4.863-4.761 2.786-2.728z"/>
        </svg>
    </div>
}

function Sound() {
    const [active, setActive] = useState(false)
    return <div className={IconClassName} onClick={(e) => setActive(!active)}>
        <svg className={SvgClassName} viewBox="0 0 30 34" style={{
            transition: "transform .3s",
            transform: `scaleY(${active ? 1 : .5})`,
        }}>
            <path fillRule="evenodd" fill={active ? ActiveColor : InactiveColor}
                  d="M25.998 23.422V11.29h3.999v12.132h-3.999zM19.497 6.234h4.001v22.243h-4.001V6.234zM12.998.867h4v32.978h-4V.867zm-6.5 5.367h4.001v22.243H6.498V6.234zm-6.5 5.056h4v12.132h-4V11.29z"/>
        </svg>
    </div>
}

function Person() {
    const [active, setActive] = useState(false)
    return <div className={IconClassName} onClick={(e) => setActive(!active)}>
        <svg className={SvgClassName} viewBox="0 0 28 34">
            <path fillRule="evenodd" fill={active ? ActiveColor : InactiveColor}
                  d="M27.728 21.942V33.44H.745V21.93l9.039-5.163h8.912l9.032 5.159.006.004-.006.012zm-4.024 2.282l-6.087-3.477h-6.756l-6.093 3.481v5.231h18.936v-5.235zm-9.464-8.992c-4.137 0-7.485-3.331-7.459-7.424l.001-.047C6.808 3.705 10.139.429 14.24.429c4.119 0 7.458 3.304 7.458 7.379v.046c0 4.075-3.339 7.378-7.458 7.378zm-.002-10.875c-1.939-.013-3.521 1.533-3.532 3.452-.014 1.918 1.548 3.484 3.488 3.496 1.939.012 3.522-1.533 3.534-3.453.013-1.918-1.549-3.484-3.49-3.495z"/>
        </svg>
    </div>
}

export default function NavTools() {
    return <div className="w-[14.75rem] h-full flex pl-[.75rem]">
        <Social/>
        <Sound/>
        <Person/>
    </div>
}
