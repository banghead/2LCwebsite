import React from "react";

function YearLine({year}) {
    return (
        <div className="flex items-center">
            <div className="flex-1 h-0.5 bg-gray-300"></div>
            <div className="mx-4 text-gray-600 font-bold text-xl">{year}</div>
            <div className="flex-1 h-0.5 bg-gray-300"></div>
        </div>
    )
}

export default YearLine;
