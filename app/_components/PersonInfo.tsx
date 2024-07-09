import React from "react";

interface PersonInfoProps {
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export default function PersonInfo({state: [opened, setOpened]}: PersonInfoProps): React.JSX.Element {
    return <div className="w-full h-full absolute top-0 left-0 z-[24] overflow-hidden transition duration-300"
                style={{opacity: opened ? 1 : 0, visibility: opened ? "visible" : "hidden"}}>
        <div className={`w-full h-full absolute top-0 left-0 portrait:bg-black portrait:opacity-70
                         transition duration-300`}
            onClick={() => setOpened(!opened)}/>
        <div className={`w-[14.75rem] portrait:w-[32.5rem] h-full portrait:h-auto bg-ark-blue
                         absolute top-0 portrait:top-1/2 right-0 portrait:left-1/2 transition duration-300
                         portrait:-translate-x-1/2 portrait:-translate-y-1/2`}>
            {/* TODO: PersonInfo*/}
            PersonInfo
        </div>
    </div>
}
