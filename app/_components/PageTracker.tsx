import {novecentosanswide_demiBold, bender_regular, novecentosanswide_medium} from "@/app/_fonts/fonts";

interface PageTrackerProps {
    viewIndex: number
}

export default function PageTracker({viewIndex}: PageTrackerProps) {
    // TODO: 添加动效
    return <div className={"w-[10rem] portrait:w-[4rem] absolute top-[44.4444444444%] portrait:top-[auto]"
        + " right-[7.375rem] portrait:right-[2.875rem] portrait:bottom-[12.5rem]"
        + " translate-x-1/2 z-[6] whitespace-nowrap leading-[normal]"}>
        <div className={novecentosanswide_demiBold.className
            + " text-ark-blue text-[5.4rem] portrait:text-[3.6rem] portrait:text-center"
            + " leading-[.55] overflow-hidden"}
        >{"0" + viewIndex}</div>
        <div className={bender_regular.className
            + " mt-[-1.55em] text-right text-[1.125rem] portrait:text-[1rem] portrait:text-center"
            + " portrait:writing-rl portrait:absolute portrait:right-0 bottom-0"}
        >{`// 0${viewIndex} / 05`}</div>
        <div className={novecentosanswide_medium.className
            + " text-right text-[.375rem] tracking-[.5em] portrait:hidden"}
        >ARKNIGHTS</div>
        <div className={novecentosanswide_demiBold.className
            + " text-right portrait:text-center text-[1.125rem] portrait:text-[.625rem] tracking-widest"
            + " portrait:absolute portrait:right-[1.5rem] portrait:bottom-0 portrait:writing-rl"}
        >{["HOMEPAGE", "INFORMATION", "OPERATOR", "WORLD", "ABOUT TERRA", "MORE"][viewIndex]}</div>
    </div>
}
