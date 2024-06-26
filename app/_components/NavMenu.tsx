"use client"
import React, {useState} from "react";

const LineClassName: React.ComponentProps<"div">["className"] =
    "w-full h-[2px] bg-white absolute left-1/2 transition duration-300"

export default function NavMenu() {
    const [active, setActive] = useState(false)
    return <div className="w-[5.75rem] h-full landscape:hidden portrait:flex">
        <div className="w-[2.625rem] h-[2.375rem] m-auto relative"
             onClick={() => setActive(!active)}>
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
