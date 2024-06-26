"use client"
import React, {useEffect, useState} from "react";
import Header, {NavigationList} from "@/app/_components/Header";

const pageClassName: string = "w-0 h-full absolute top-0 right-0 bottom-0 left-auto overflow-hidden duration-1000"

function Index() {
    return <div id="index" className={pageClassName} style={{width: "100%", left: 0, backgroundColor: "darkgreen"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">Index</h1>
    </div>
}

function Information() {
    return <div id="information" className={pageClassName} style={{backgroundColor: "darkcyan"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">Information</h1>
    </div>
}

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
    useEffect(() => {
        const handleWindowResize = () => {
            let fontSize = 16

            if (innerHeight > innerWidth) {
                const designWidth = 750;
                const designHeight = 1334;
                if (innerWidth / innerHeight > designWidth / designHeight) {
                    fontSize *= innerHeight / designHeight
                } else {
                    fontSize *= innerWidth / designWidth
                }
            } else {
                const designWidth = 1920;
                const designHeight = 1080;
                if (innerWidth / innerHeight > designWidth / designHeight) {
                    fontSize *= innerHeight / designHeight;
                } else {
                    fontSize *= innerWidth / designWidth;
                }
            }

            document.documentElement.style.fontSize = fontSize + "px"
        }

        handleWindowResize()
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, []);

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

    return <div className="relative w-full h-full m-auto max-w-[180rem]">
        <Header {...{viewIndex, setViewIndex}} />
        <main className="w-full h-full relative select-none">
            <Index/>
            <Information/>
            <Operator/>
            <World/>
            <Media/>
            <More/>
        </main>
    </div>
}
