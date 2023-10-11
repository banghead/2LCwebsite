import React from 'react';
import ScheduleArray from "../ScheduleArray/ScheduleArray";

function CardImageRight({imageTest, title, details, horaires}) {
    let atelierBlock;
    if (horaires !== undefined) {
        atelierBlock = <ScheduleArray horaires={horaires}/>
    }
    return (
        <div className="h-full flex md:mr-20 md:ml-20">
            <div className="h-full bg-white rounded w-full m-5">
                <div className="grid md:grid-cols-2 grid-cols-1 shadow-lg overflow-hidden rounded">

                    <div className="hidden md:flex w-full md:w-full flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-r rounded-b-none overflow-hidden shadow-lg">
                            <div className="w-full font-bold text-5xl text-gray-900 px-6 pt-6 pb-6">{title}</div>
                            <p className="text-gray-800 font-serif text-base px-6 mb-5 text-[19px] text-justify">
                                {details}
                            </p>
                            {atelierBlock}
                        </div>
                    </div>

                    <div className='grid place-items-center'>
                        <img src={imageTest} alt={title} style={{maxHeight: 500}} className={"rounded"}/>
                    </div>

                    <div className="md:hidden w-full md:w-full flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-r rounded-b-none overflow-hidden shadow-lg">
                            <div className="w-full font-bold text-5xl text-gray-900 px-6 pt-6 pb-6">{title}</div>
                            <p className="text-gray-800 font-serif text-base px-6 mb-5 text-[19px] text-justify">
                                {details}
                            </p>
                            {atelierBlock}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default CardImageRight;
