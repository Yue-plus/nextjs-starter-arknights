import React from "react";
import {IconArrow, LogoRhodesIsland} from "@/app/_components/SvgIcons";

interface BoxButtonProps {
    label: string
    url: string
    autoHide?: boolean
}

function BoxButton({label, url, autoHide}: BoxButtonProps) {
    return <a href={url} className={"h-[1.5rem] portrait:h-[2.5rem]"
        + " mt-[1rem] portrait:mt-[1.5rem] px-[1.25rem] portrait:px-[2rem]"
        + " text-white hover:text-black bg-black hover:bg-white flex items-center justify-between"
        + " transition duration-300 cursor-pointer portrait:text-[1.625rem]"
        + (autoHide ? " portrait:hidden" : "")}>
        <span style={{fontFamily: "SourceHanSans-Medium"}}>{label}</span>
        <IconArrow className="w-[.5rem] pointer-events-none"/>
    </a>
}

interface PersonInfoProps {
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export default function PersonInfo({state: [opened, setOpened]}: PersonInfoProps): React.JSX.Element {
    function CloseButton(): React.ReactElement {
        const xLine: string = "w-[.375rem] portrait:w-[.25rem] h-4/5 bg-current"
            + " absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        return <div className={"portrait:w-[4.5rem] h-[11.25rem] portrait:h-[4.5rem] mt-[3.75rem] portrait:mt-[.5rem]"
            + " text-white hover:text-black bg-ark-blue portrait:bg-transparent hover:bg-white"
            + " relative portrait:absolute portrait:right-0 top-0 transition duration-300 cursor-pointer"}
                    onClick={() => setOpened(!opened)}>
            <div className={`${xLine} rotate-45`}/>
            <div className={`${xLine} -rotate-45`}/>
        </div>
    }

    return <aside className="w-full h-full absolute top-0 left-0 z-[24] overflow-hidden transition duration-300"
                  style={{opacity: opened ? 1 : 0, visibility: opened ? "visible" : "hidden"}}>
        <div className={`w-full h-full absolute top-0 left-0 portrait:bg-black portrait:opacity-70
                         transition duration-300`}
             onClick={() => setOpened(!opened)}/>
        <div className={`w-[14.75rem] portrait:w-[32.5rem] h-full portrait:h-auto bg-ark-blue
                         absolute top-0 portrait:top-1/2 right-0 portrait:left-1/2 transition duration-300
                         portrait:-translate-x-1/2 portrait:-translate-y-1/2`}>
            <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <LogoRhodesIsland className={`h-[59.375rem] portrait:h-[55rem] text-[#06bbff]
                                              absolute top-[-2rem] left-[-18.75rem] portrait:left-[-5rem]`}/>
            </div>
            <div className="relative pt-[5.875rem] portrait:pt-[2rem]"></div>
            <div className="w-full absolute left-0 bottom-0 portrait:static portrait:mb-[3.75rem]">
                <div className={"portrait:h-[2.5rem] relative pl-[2.5rem] pr-[1.25rem]"
                    + " portrait:pl-[8rem] portrait:pr-[6.75rem]"}>
                    <BoxButton label="客服中心" url="" autoHide />
                    <BoxButton label="立即登入" url="" />
                    <BoxButton label="前往注册" url="" />
                </div>
                <CloseButton/>
            </div>
        </div>
    </aside>
}
