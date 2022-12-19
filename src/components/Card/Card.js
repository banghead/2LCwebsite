import React from "react";
import moment from "moment"
import Button from "../Button/Button"

function Card({ image, date, title, details, onClick }) {
    return (
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-wrap">
                    <img src={image} alt={title} className="h-64 w-full rounded-t pb-6 object-cover overflow-hidden" />
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">{date}</p>
                    <div className="w-full font-bold text-xl text-gray-900 px-6">{title}</div>
                    <p className="text-gray-800 font-serif text-base px-6 mb-5">{details}</p>
                </div>
                <div className="flex-none p-4">
                    <div className="flex justify-center">
                        <Button onClick={onClick}>Lire plus</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
