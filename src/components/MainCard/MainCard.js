import React from 'react';

function MainCard({image, title, details}) {
    return (
        <div className="h-full flex justify-center">
            <div className="h-full bg-white rounded w-[60vw]">
                <div className="flex flex-wrap shadow-lg overflow-hidden rounded">
                    <div className="w-full md:w-3/5 rounded-l max-w-3xl">
                        <img src={image} alt={title} className="h-full w-full shadow"/>
                    </div>

                    <div className="w-full md:w-2/5 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-r rounded-b-none overflow-hidden shadow-lg">
                            <div className="w-full font-bold text-xl text-gray-900 px-6 pt-6 pb-2">{title}</div>
                            {details}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MainCard;
