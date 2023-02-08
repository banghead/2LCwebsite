import React from 'react';
import ScheduleArray from "../ScheduleArray/ScheduleArray";

function CulturalActionsCardRight({imageTest, title, details, horaires}) {
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
                            <p className="text-gray-800 font-serif text-base px-6 text-[19px] text-justify">
                                <span className={'font-bold'}>Adresse : </span>8 Rue de la Catalogne, 44240 La
                                Chapelle-sur-Erdre
                            </p>
                            <ScheduleArray horaires={horaires}/>

                        </div>
                    </div>

                    <div className="w-full md:w-full rounded-l">
                        <img src={imageTest} alt={title} className="h-full w-full shadow"/>
                    </div>

                    <div className="md:hidden w-full md:w-full flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-r rounded-b-none overflow-hidden shadow-lg">
                            <div className="w-full font-bold text-5xl text-gray-900 px-6 pt-6 pb-6">{title}</div>
                            <p className="text-gray-800 font-serif text-base px-6 mb-5 text-[19px] text-justify">
                                {details}
                            </p>
                            <p className="text-gray-800 font-serif text-base px-6 text-[19px] text-justify">
                                <span className={'font-bold'}>Adresse : </span>8 Rue de la Catalogne, 44240 La
                                Chapelle-sur-Erdre
                            </p>
                            <ScheduleArray horaires={horaires}/>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default CulturalActionsCardRight;
