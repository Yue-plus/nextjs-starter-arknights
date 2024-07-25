import React, {useEffect, useState} from "react";

export default function World({viewIndex} : {viewIndex: number}) {
    const selfIndex = 3
    const [left, setLeft] = useState("0")

    useEffect(() => {
        if (selfIndex === viewIndex) return
        if (selfIndex < viewIndex) return setLeft("0")
        if (selfIndex > viewIndex) return setLeft("auto")
    }, [viewIndex])

    return <div id="world" className="rootPage" style={{
        width: selfIndex === viewIndex ? "100%" : "0%",
        left: left,
        backgroundColor: "darkorange",
    }}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">TODO: World</h1>
    </div>
}
