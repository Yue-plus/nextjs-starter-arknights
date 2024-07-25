import React, {useEffect, useState} from "react";

export default function Media({viewIndex} : {viewIndex: number}) {
    const selfIndex = 4
    const [left, setLeft] = useState("0")

    useEffect(() => {
        if (selfIndex === viewIndex) return
        if (selfIndex < viewIndex) return setLeft("0")
        if (selfIndex > viewIndex) return setLeft("auto")
    }, [viewIndex])

    return <div id="media" className="rootPage" style={{
        width: selfIndex === viewIndex ? "100%" : "0%",
        left: left,
        backgroundColor: "darkblue",
    }}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">TODO: Media</h1>
    </div>
}
