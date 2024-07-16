"use client"
import React, {useEffect, useState} from "react";
import {register as swiperRegister} from "swiper/element/bundle"
import PageTracker from "@/app/_components/PageTracker";
import Header, {NavigationList} from "@/app/_components/Header";
import ScrollTip from "@/app/_components/ScrollTip";
import {Menu} from "@/app/_components/NavMenu";
import ToolBox from "@/app/_components/ToolBox";
import PersonInfo from "@/app/_components/PersonInfo";
import Index from "@/app/_pages/00-Index";
import Information from "@/app/_pages/01-Information";

const pageClassName: string = "w-0 h-full absolute top-0 right-0 bottom-0 left-auto overflow-hidden duration-1000"

function Operator() {
    return <div id="operator" className={pageClassName} style={{backgroundColor: "darkgrey"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">Operator</h1>
    </div>
}

function World() {
    return <div id="world" className={pageClassName} style={{backgroundColor: "darkorange"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">World</h1>
    </div>
}

function Media() {
    return <div id="media" className={pageClassName} style={{backgroundColor: "darkblue"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">Media</h1>
    </div>
}

function More() {
    return <div id="more" className={pageClassName} style={{backgroundColor: "darkred"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">More</h1>
    </div>
}

export default function Root() {
    // See: https://swiperjs.com/element
    swiperRegister()

    const [viewIndex, setViewIndex] = useState(0)

    // 监听鼠标滚轮修改页面锚点链接
    useEffect(() => {
        let lastScrollTime = 0;
        const handleScroll = (event: WheelEvent) => {
            if (performance.now() - lastScrollTime > 1000) {
                if (event.deltaY < 0) {
                    setViewIndex(prevIndex =>
                        prevIndex > 0 ? prevIndex - 1 : prevIndex);
                } else {
                    setViewIndex(prevIndex =>
                        prevIndex < NavigationList.length - 1 ? prevIndex + 1 : prevIndex);
                }
                lastScrollTime = performance.now();
            }
        }
        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
    }, []);

    const navMenuState = useState(false)
    const socialToolState = useState(false)
    const personInfoState = useState(false)

    return <div className="relative w-full h-full m-auto max-w-[180rem]">
        <PageTracker {...{viewIndex}} />
        <Header viewIndexState={[viewIndex, setViewIndex]} {...{navMenuState, socialToolState, personInfoState}} />
        <main className="w-full h-full relative select-none">
            <Index/>
            <Information/>
            <Operator/>
            <World/>
            <Media/>
            <More/>
        </main>
        <ScrollTip />
        <Menu state={navMenuState} {...{viewIndex}}/>
        <ToolBox state={socialToolState}/>
        <PersonInfo state={personInfoState} />
    </div>
}
