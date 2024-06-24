"use client"
import React, {useEffect, useState} from "react";
import NavigationBar, {NavigationList} from "@/app/_components/NavigationBar";

const pageClassName: string = "w-0 h-screen fixed top-0 right-0 bottom-0 left-0 overflow-hidden"

function Index() {
    return <div className={pageClassName} style={{width: "50vw", backgroundColor: "darkgreen"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">Index</h1>
    </div>
}

function Information() {
    return <div className={pageClassName} style={{width: "50vw", left: "auto", backgroundColor: "darkcyan"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">Information</h1>
    </div>
}

function Media() {
    return <div className={pageClassName} style={{backgroundColor: "darkblue"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">Media</h1>
    </div>
}

function More() {
    return <div className={pageClassName} style={{backgroundColor: "darkred"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">More</h1>
    </div>
}

function Operator() {
    return <div className={pageClassName} style={{backgroundColor: "darkgrey"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">Operator</h1>
    </div>
}

function World() {
    return <div className={pageClassName} style={{backgroundColor: "darkorange"}}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">World</h1>
    </div>
}

export default function Root() {
    const [viewIndex, setViewIndex] = useState(0)

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

    return <>
        <NavigationBar viewIndex={viewIndex}/>
        <main className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0" style={{
            backgroundImage: "url('/media/bg.jpg')",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <Index/>
            <Information/>
            <Media/>
            <More/>
            <Operator/>
            <World/>
        </main>
    </>
}
