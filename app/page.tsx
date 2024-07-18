"use client"
import React, {useEffect, useState} from "react";
import LineDecorator from "@/app/_components/LineDecorator";
import arknightsConfig from "@/arknights.config";
import {register as swiperRegister} from "swiper/element/bundle"
import PageTracker from "@/app/_components/PageTracker";
import Header from "@/app/_components/Header";
import ScrollTip from "@/app/_components/ScrollTip";
import {Menu} from "@/app/_components/NavMenu";
import ToolBox from "@/app/_components/ToolBox";
import PersonInfo from "@/app/_components/PersonInfo";
import Index from "@/app/_pages/00-Index";
import Information from "@/app/_pages/01-Information";
import Operator from "@/app/_pages/02-Operator";
import World from "@/app/_pages/03-World";
import Media from "@/app/_pages/04-Media";
import More from "@/app/_pages/05-More";
import "./_pages/page.css"

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
                        prevIndex < arknightsConfig.navbar.items.length - 1 ? prevIndex + 1 : prevIndex);
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
        <LineDecorator />
        <ScrollTip {...{viewIndex}} />
        <Menu state={navMenuState} {...{viewIndex}}/>
        <ToolBox state={socialToolState}/>
        <PersonInfo state={personInfoState} />
    </div>
}
