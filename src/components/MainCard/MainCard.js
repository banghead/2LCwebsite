import React from 'react';

function MainCard({image, title, title2, details}) {
    return (
        <div className="h-full flex justify-center">
            <div className="bg-white rounded w-[70vw]">
                <div className="grid md:grid-cols-3 grid-cols-1 shadow-lg overflow-hidden rounded">

                    <div className="w-full">
                        <div className="flex-1 bg-white rounded-r rounded-b-none overflow-hidden shadow-lg h-full">
                            <h1 className="w-full font-bold text-xl text-gray-900 px-6 pt-6 pb-2">{title}</h1>
                            {details}
                        </div>
                    </div>

                    <div className="h-full flex justify-center items-center">
                        <img src={image} alt={title} className="p-5"/>
                    </div>

                    <div className="w-full">
                        <div className="flex-1 bg-white rounded-r rounded-b-none overflow-hidden shadow-lg h-full">
                            <h1 className="w-full font-bold text-xl text-gray-900 px-6 pt-6 pb-2">{title2}</h1>
                            {details}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MainCard;
