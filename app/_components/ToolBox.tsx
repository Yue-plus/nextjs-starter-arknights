import React from "react";
import {
    IconBiliBili,
    IconSkland, IconSocial,
    IconTapTap,
    IconWechat,
    IconWeibo,
    LogoRhodesIsland,
    SvgIconProps
} from "@/app/_components/SvgIcons";

interface SocialLinkItem {
    icon: (props: SvgIconProps) => React.ReactElement
    nameEn: string
    nameZh?: string
    url: string
}

export const SocialLinks: SocialLinkItem[] = [
    {icon: IconSkland, nameEn: "Skland", nameZh: "森空岛", url: ""},
    {icon: IconBiliBili, nameEn: "bilibili", nameZh: "哔哩哔哩", url: ""},
    {icon: IconWechat, nameEn: "WeChat", nameZh: "微信", url: ""},
    {icon: IconWeibo, nameEn: "Weibo", nameZh: "微博", url: ""},
    {icon: IconTapTap, nameEn: "TapTap", url: ""},
]

interface ToolBoxProps {
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export default function ToolBox({state: [opened, setOpened]}: ToolBoxProps) {
    return <div className="w-full h-full absolute top-0 left-0 z-[24] overflow-hidden transition duration-300"
                style={{opacity: opened ? 1 : 0, visibility: opened ? "visible" : "hidden"}}
                onClick={() => setOpened(!opened)}>
        <div className="w-full h-full absolute top-0 left-0 portrait:bg-black portrait:opacity-70"></div>
        <div className={`w-[14.75rem] portrait:w-[32.5rem] portrait:h-[50rem] bg-ark-blue portrait:pt-[12.5rem]
                         absolute top-[6.75rem] portrait:top-1/2 right-0 portrait:left-1/2
                         transition duration-300
                         portrait:-translate-x-1/2 portrait:-translate-y-1/2`}>
            <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <LogoRhodesIsland className={`h-[59.375rem] portrait:h-[55rem] text-[#06bbff]
                                              absolute top-[-2rem] left-[-18.75rem] portrait:left-[-5rem]`}/>
            </div>
            <div className={`w-[4.5rem] h-[4.5rem] mt-[.5rem] text-white
                             absolute right-0 top-0 transition duration-300 cursor-pointer
                             hidden portrait:block`}>
                <div className="w-[.25rem] h-4/5 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="w-[.25rem] h-4/5 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
            </div>
            <IconSocial
                className="w-[3rem] h-auto absolute left-[3.5rem] top-[7.5rem] pointer-events-none hidden portrait:block"/>
            <div className={`border-[1rem] border-solid border-transparent border-b-ark-blue
                             absolute bottom-full left-[2rem]
                             portrait:hidden`}></div>
            <div className="portrait:w-[25.75rem] relative pt-[2.625rem] portrait:pt-0 pb-[3rem] portrait:m-auto">
                <div className={`mx-12 portrait:mr-0 portrait:ml-0
                                 whitespace-nowrap text-[.75rem] portrait:text-[1.125rem]
                                 flex items-center`}
                     style={{fontFamily: "Bender-Bold"}}>
                    TOOLBOX<span className="ml-[1em] flex-auto h-px bg-white"></span>
                </div>
                <div className="mt-[1rem] portrait:mt-[3.5rem] portrait:p-0 px-[3rem]">
                    <div className="flex items-center justify-between">
                        <a className={`w-[3.375rem] portrait:w-[6.375rem] h-[3.375rem] portrait:h-[6.375rem]
                                       text-white bg-black transition duration-300
                                       portrait:border portrait:border-solid portrait:border-white
                                       flex flex-none rounded-lg portrait:rounded-2xl cursor-pointer`}>
                            <IconSkland
                                className={`w-[2rem] portrait:w-[4rem] h-auto m-auto pointer-events-none block`}/>
                        </a>
                        <a className={`w-[3.375rem] portrait:w-[6.375rem] h-[3.375rem] portrait:h-[6.375rem]
                                       text-white bg-black transition duration-300
                                       portrait:border portrait:border-solid portrait:border-white
                                       flex flex-none rounded-lg portrait:rounded-2xl cursor-pointer`}>
                            <IconBiliBili
                                className={`w-[2.75rem] portrait:w-[5rem] h-auto m-auto pointer-events-none block`}/>
                        </a>
                    </div>
                    {/* TODO: 调整其他图标 className */}
                    <div className="mt-[1.75rem] flex items-center justify-between">
                        <a className={`w-[3.375rem] h-[3.375rem] text-white bg-black transition duration-300 flex flex-none rounded-lg cursor-pointer`}>
                            <IconWechat className={`w-[2rem] h-auto m-auto pointer-events-none block`}/>
                        </a>
                        <a className={`w-[3.375rem] h-[3.375rem] text-white bg-black transition duration-300 flex flex-none rounded-lg cursor-pointer`}>
                            <IconWeibo className={`w-[2rem] h-auto m-auto pointer-events-none block`}/>
                        </a>
                    </div>
                    <div className="mt-[1.75rem] flex items-center justify-between">
                        <a className={`w-[3.375rem] h-[3.375rem] text-white bg-black transition duration-300 flex flex-none rounded-lg cursor-pointer`}>
                            <IconTapTap className={`w-[3rem] h-auto m-auto pointer-events-none block`}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
