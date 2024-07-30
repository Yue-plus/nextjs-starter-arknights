"use client"
import Header from "@/app/_components/Header";
import React, {useState} from "react";
import {Menu} from "@/app/_components/NavMenu";
import ToolBox from "@/app/_components/ToolBox";
import PersonInfo from "@/app/_components/PersonInfo";

export default function DocsPage() {
    const viewIndex = 1
    const navMenuState = useState(false)
    const socialToolState = useState(false)
    const personInfoState = useState(false)

    return <div className="relative w-full h-full m-auto max-w-[180rem]">
        <Header {...{viewIndex, navMenuState, socialToolState, personInfoState}} />
        <main id="main" className="w-full h-full relative select-none">
            {/* TODO: 渲染 Markdown 文档 */}
        </main>
        <Menu state={navMenuState} {...{viewIndex}}/>
        <ToolBox state={socialToolState}/>
        <PersonInfo state={personInfoState}/>
    </div>
}
