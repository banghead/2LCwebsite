import React from 'react';

// horaire = [{day : lundi, schedule : 18h-19h, level : debutant, teacher : Payk}]
function ScheduleArray({horaires}) {
    return (
        <div>
            <p className="text-gray-800 font-serif text-base px-6 text-[19px] text-justify">
                <span className={'font-bold'}>Adresse : </span>8 Rue de la Catalogne, 44240 La
                Chapelle-sur-Erdre
            </p>
            <div className="relative overflow-x-auto p-5">
                <table className="w-full text-sm text-left">
                    <thead
                        className="text-xs uppercase bg-gray-200/50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Jour
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Horaire
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Niveau
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Professeur
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {horaires.map(horaire =>
                        <tr className="bg-white border-b">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {horaire.day}
                            </th>
                            <td className="px-6 py-4">
                                {horaire.schedule}
                            </td>
                            <td className="px-6 py-4">
                                {horaire.level}
                            </td>
                            <td className="px-6 py-4">
                                {horaire.teacher}
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ScheduleArray;
