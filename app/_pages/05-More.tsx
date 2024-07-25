import React from "react";

export default function More({viewIndex} : {viewIndex: number}) {
    const selfIndex = 5
    return <div id="more" className="rootPage" style={{
        width: selfIndex === viewIndex ? "100%" : "0%",
        left: "auto",
        backgroundColor: "darkred",
    }}>
        <h1 className="text-9xl absolute top-1/4 left-1/4">TODO: More</h1>
    </div>
}
