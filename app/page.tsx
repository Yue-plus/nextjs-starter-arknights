"use client"
import React, {useEffect, useMemo, useRef, useState} from "react";
import LineDecorator from "@/app/_components/LineDecorator";
import arknightsConfig from "@/arknights.config";
import {register as swiperRegister} from "swiper/element/bundle"
import PageTracker from "@/app/_components/PageTracker";
import Header from "@/app/_components/Header";
import ScrollTip from "@/app/_components/ScrollTip";
import {Menu} from "@/app/_components/NavMenu";
import ToolBox from "@/app/_components/ToolBox";
import PersonInfo from "@/app/_components/PersonInfo";

function PageViewTemplate({selfIndex, viewIndex, children}: {
    selfIndex: number, viewIndex: number, children: React.ReactNode
}) {
    const width = useMemo(() => {
        return selfIndex === viewIndex ? "100%" : "0%"
    }, [selfIndex, viewIndex])

    const [left, setLeft] = useState("0")
    useEffect(() => {
        if (selfIndex === viewIndex) return
        if (selfIndex < viewIndex) return setLeft("0")
        if (selfIndex > viewIndex) return setLeft("auto")
    }, [selfIndex, viewIndex])

    return <div style={{width, left}} className={"w-0 h-full absolute top-0 right-0 bottom-0 left-0"
        + " overflow-hidden transition-[width] duration-1000"}>{children}</div>
}

export default function RootPage() {
    // See: https://swiperjs.com/element
    swiperRegister()

    const [viewIndex, setViewIndex] = useState(0)

    // 首次挂载组件通过当前锚点设置 viewIndex
    useEffect(() => {
        const HASH = location.hash.split("#")[1];
        const INDEX = arknightsConfig.navbar.items.findIndex(item =>
            HASH === item.href.split("#")[1])
        setViewIndex(INDEX === -1 ? 0 : INDEX)
    }, [])

    // 上次鼠标滚轮使用时间戳
    const lastScrollTime = useRef(0);

    // 监听鼠标滚轮修改 viewIndex；限制修改间隔为一秒；
    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (performance.now() - lastScrollTime.current > 1000) {
                let newIndex: number
                if (event.deltaY < 0)
                    newIndex = viewIndex > 0 ? viewIndex - 1 : viewIndex
                else
                    newIndex = viewIndex < arknightsConfig.navbar.items.length - 1 ? viewIndex + 1 : viewIndex

                location.hash = arknightsConfig.navbar.items[newIndex].href.split("#")[1]
                setViewIndex(newIndex)
                lastScrollTime.current = performance.now();
            }
        }

        document.getElementById("main")!.addEventListener("wheel", handleScroll);
        return () => document.getElementById("main")!.removeEventListener("wheel", handleScroll);
    }, [viewIndex])

    // 监听锚点链接改变修改 viewIndex
    useEffect(() => {
        const handleHashChange = (hce: HashChangeEvent) => {
            const index: number = arknightsConfig.navbar.items.findIndex(item =>
                item.href.split("#")[1] === window.location.hash.split("#")[1])
            setViewIndex(index === -1 ? 0 : index)
        }

        window.addEventListener("hashchange", handleHashChange)
        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [setViewIndex])

    const navMenuState = useState(false)
    const socialToolState = useState(false)
    const personInfoState = useState(false)

    return <div className="relative w-full h-full m-auto max-w-[180rem]">
        <PageTracker {...{viewIndex}} />
        <Header {...{viewIndex, navMenuState, socialToolState, personInfoState}} />
        <main id="main" className="w-full h-full relative select-none">{
            arknightsConfig.rootPage.views.map((Element, index) => {
                return <PageViewTemplate key={index} viewIndex={viewIndex} selfIndex={index}>
                    <Element/>
                </PageViewTemplate>
            })
        }</main>
        <LineDecorator/>
        <ScrollTip {...{viewIndex}} />
        <Menu state={navMenuState} {...{viewIndex}}/>
        <ToolBox state={socialToolState}/>
        <PersonInfo state={personInfoState}/>
    </div>
}
