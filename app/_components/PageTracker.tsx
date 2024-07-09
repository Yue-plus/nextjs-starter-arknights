"use client"

export default function PageTracker() {
    return <div className={`w-[10rem] portrait:w-[4rem] absolute
                            top-[44.4444444444%] portrait:top-[auto]
                            right-[7.375rem] portrait:right-[2.875rem] portrait:bottom-[12.5rem]
                            translate-x-1/2 z-[6] whitespace-nowrap`}>
        <div className={`text-ark-blue text-[5.4rem] portrait:text-[3.6rem] portrait:text-center
                         leading-[.55] overflow-hidden font-bold`}>01</div>
        {/* TODO: 调整字体 */}
        <div className={`mt-[-1.75rem] text-right text-[1.125rem] portrait:text-[1rem] portrait:text-center
                         portrait:writing-rl portrait:absolute portrait:right-0 portrait: bottom-0`}>
            {`// 01 / 05`}
        </div>
        <div className="text-right text-[.375rem] tracking-[.5em] portrait:hidden">ARKNIGHTS</div>
        <div className={`text-right portrait:text-center text-[1.125rem] portrait:text-[.6.25rem] tracking-widest
                         portrait:absolute portrait:right-[1.5rem] portrait:bottom-0 portrait:writing-rl`}>HOMEPAGE</div>
    </div>
}
