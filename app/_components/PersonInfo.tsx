import React from "react";
import {LogoRhodesIsland} from "@/app/_components/SvgIcons";

interface PersonInfoProps {
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export default function PersonInfo({state: [opened, setOpened]}: PersonInfoProps): React.JSX.Element {
    function CloseButton(): React.ReactElement {
        const xLine: string =
            "w-[.375rem] h-4/5 bg-current absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
        return <div className={`h-[11.25rem] mt-[3.75rem] text-white hover:text-black bg-ark-blue hover:bg-white
                                relative transition duration-300 cursor-pointer`}
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
                <div></div>
                <CloseButton/>
            </div>
        </div>
    </aside>
}
