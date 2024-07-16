import {IconArrow, LogoRhodesIsland} from "@/app/_components/SvgIcons";
import {novecentosanswide_medium} from "@/app/_fonts/fonts";

export default function ScrollTip() {
    // TODO: 响应页面切换
    return <div className={"w-[3rem] absolute left-1/2 bottom-[3.75rem] -translate-x-1/2 z-[4] pointer-events-none"}>
        <div className={"flex flex-col items-center transition-opacity duration-300"}>
            <LogoRhodesIsland className={"pointer-events-none"} />
        </div>
        <div className={"text-ark-blue flex flex-col items-center transition-colors duration-300 animate-downHide"}>
            <div className={novecentosanswide_medium.className + " text-[.75rem] mt-[.25rem]"}>SCROLL</div>
            <IconArrow className={"w-[1.25rem] mt-[-.5rem] mb-[-.5rem] rotate-90 pointer-events-none"} />
        </div>
    </div>
}
