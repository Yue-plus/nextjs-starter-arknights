"use client"
import {useState} from "react";
import {CopyrightMini, IconDblArrow, TitleArknights} from "@/app/_components/SvgIcons";
import {bender_bold, bender_regular} from "@/app/_fonts/fonts";

export default function Loading() {
    const [percentage, setPercentage] = useState(64);

    // TODO: 进度条

    return <div className={"w-full h-full absolute top-0 left-0 z-[24] text-[#a4a4a4] bg-[#272727] pt-[8rem]"
        + " flex flex-col items-center justify-center transition-[opacity,visibility] duration-1000 ease-in-out"}>
        <TitleArknights className={"w-[15.875rem] h-auto pointer-events-none"} />
        <div className={"w-full h-px bg-white opacity-30 absolute top-[6.625rem] left-0"
            + " transition-[top] duration-1000 ease-in-out portrait:hidden"} />
        <div className={"mt-[20.125rem] flex items-end"}>
            <CopyrightMini className={"w-[10.5rem] portrait:w-[7.25rem] h-auto flex-none ml-auto mr-[18.125rem]"
                + " portrait:absolute portrait:left-[2rem] portrait:bottom-[3rem] pointer-events-none"} />
            <div className={"w-[68.5rem] portrait:w-[41.875rem] mr-auto flex-none"
                + " portrait:absolute portrait:left-1/2 portrait:bottom-[16.191904048%] portrait:-translate-x-1/2"}>
                <div className={"w-full h-[6px] portrait:h-[3px] flex items-center relative"
                    + " border-x-[6px] portrait:border-x-[3px] border-solid border-[#a4a4a4]"}>
                    <div className={"w-full h-[2px] portrait:h-px bg-[#a4a4a4]"} />
                    <div className={`h-full absolute top-0 left-0 bg-ark-blue`} style={{width: percentage + "%"}} />
                </div>
                <div className={"mt-[.75rem] portrait:mt-[.5rem] portrait:text-[1.25rem]"
                    + " flex items-center justify-between"}>
                    <div className={bender_bold.className + " flex items-center"}>
                        <IconDblArrow className={"w-[.75rem] h-full mr-4 portrait:mr-2 pointer-events-none"} />
                        <span>LOADING&nbsp;-&nbsp;</span>
                        <span>{percentage}</span>
                        <span>%&nbsp;&nbsp;......</span>
                    </div>
                    <div>
                        <span className={bender_bold.className + " mr-8 portrait:mr-6"}>ARKNIGHTS</span>
                        <span className={bender_regular.className}>
                            &#47;&#47;&nbsp;&nbsp;&nbsp;&nbsp;https://arknights.yue.zone/
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className={"w-px h-full bg-white opacity-30 absolute top-0 right-[6.625rem]"
            + " transition-[right] duration-1000 ease-in-out portrait:hidden"} />
    </div>
}
