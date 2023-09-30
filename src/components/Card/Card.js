import React from "react";

function Card({image, date, title, details, onClick, actualityPage}) {
    return (
        <div className={"w-full p-6 flex flex-col flex-grow flex-shrink " + actualityPage}>
            <div className="flex-1 bg-white rounded overflow-hidden shadow-lg flex flex-col">
                <div className="flex flex-wrap">
                    <img src={image} alt={title} className="h-64 w-full rounded-t pb-6 object-cover overflow-hidden"/>
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">{date}</p>
                    <div className="w-full font-bold text-xl text-gray-900 px-6 mb-2 mt-2">{title}</div>
                    <p className={"text-gray-800 font-serif text-base px-6 mb-5"}>{details}</p>
                </div>
                {
                    onClick && (
                        <div className="flex-none p-4 mt-auto">
                            <div className="flex justify-center">
                                {onClick}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Card;
