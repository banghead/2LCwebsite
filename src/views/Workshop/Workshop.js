import React from 'react';
import imageBbx from "../../assets/images/ateliers/bbx.webp";
import imageBreak from "../../assets/images/ateliers/break.webp";
import imageEcriture from "../../assets/images/ateliers/ecriture.webp";
import CardImageLeft from "../../components/CardImageLeft/CardImageLeft";
import CardImageRight from "../../components/CardImageRight/CardImageRight";


function Workshop() {
    return (
        <div>
            <CardImageLeft imageTest={imageEcriture} title={"Ecriture partagée"}
                // horaires={
                //     [
                //         {
                //             day: 'lundi',
                //             schedule: '19h00-20h30',
                //             level: 'Tous niveaux',
                //             teacher: 'Omed'
                //         }
                //     ]
                // }
                           details={
                               <div>
                                   <p>Les mots sont plus intelligents que nous : il suffit de les laisser se coucher
                                       sur le papier pour lire comme ils parlent de nous ! L’écriture partagée, c’est ce
                                       moyen qu’<span className='font-bold'>OMED</span>, écrivain et parolier, choisit
                                       pour
                                       tisser des liens le temps d’un atelier; “ Souvent, on écrit de manière
                                       fonctionnelle,
                                       ici, je propose de le faire pour le plaisir et grâce à la richesse du groupe,
                                       nous
                                       explorons ensemble l’idée de l’inspiration dans les mots de l’autre.“</p>
                                   <p className='font-bold mt-5'>Cours d’essai et inscription toute l’année</p>
                               </div>
                           }/>
            <CardImageRight imageTest={imageEcriture} title={"Rap"}
                // horaires={
                //     [
                //         {
                //             day: 'lundi',
                //             schedule: '18h00-19h00',
                //             level: 'Débutant',
                //             teacher: 'Omed'
                //         }
                //     ]
                // }

                            details={
                                <div>
                                    <p>Les mots sont plus intelligents que nous : il suffit de les laisser se coucher
                                        sur le papier pour lire comme ils parlent de nous ! L’écriture partagée, c’est
                                        ce
                                        moyen qu’<span className='font-bold'>OMED</span>, écrivain et parolier, choisit
                                        pour
                                        tisser des liens le temps d’un atelier; “ Souvent, on écrit de manière
                                        fonctionnelle,
                                        ici, je propose de le faire pour le plaisir et grâce à la richesse du groupe,
                                        nous
                                        explorons ensemble l’idée de l’inspiration dans les mots de l’autre.“</p>
                                    <p className='font-bold mt-5'>Cours d’essai et inscription toute l’année</p>
                                </div>
                            }/>
            <CardImageLeft imageTest={imageBbx} title={"Beatbox"}
                // horaires={
                //     [
                //         {
                //             day: 'lundi',
                //             schedule: '18h00-19h00',
                //             level: 'Débutant',
                //             teacher: 'Payk'
                //         },
                //         {
                //             day: 'lundi',
                //             schedule: '19h00-20h15',
                //             level: 'Confirmé',
                //             teacher: 'Payk'
                //         }
                //     ]
                // }

                           details={
                               <div>
                                   <p>Dans le but de découvrir ou d’approfondir les connaissances et la pratique du
                                       beatbox, nous proposons des stages et des cours réguliers à l’année avec des
                                       pointures du beatbox français. Des kicks au samples classiques aux sons
                                       improbables, ces temps permettent à chacun de découvrir son flow de bouche. Un
                                       accent particulier sera mis sur la culture des battles et des shows partagés.
                                   </p>
                                   <p className='font-bold mt-5'>Cours d’essai et inscription toute l’année</p>
                               </div>
                           }/>
            <CardImageRight imageTest={imageBreak} title={"Breakdance"}
                            horaires={
                                [
                                    {
                                        day: 'lundi',
                                        schedule: '18h00-19h00',
                                        level: 'Débutant',
                                        teacher: 'Nas'
                                    },
                                    {
                                        day: 'lundi',
                                        schedule: '19h00-20h15',
                                        level: 'Confirmé',
                                        teacher: 'Nas'
                                    }
                                ]
                            }
                            details={
                                <div>
                                    <p>Que ce soit dans le but de découvrir ou d’approfondir tes connaissances et ta
                                        pratique de la danse HIP-HOP, c’est dans la joie et la bonne humeur que <span
                                            className='font-bold'>BBOY NAS </span>
                                        t’accueillera. Des footworks classiques aux freezer originaux, ce stage
                                        t’emmènera à la découverte de ton flow de danse. Un accent particulier sera mis
                                        sur la culture des battles et des shows partagés.
                                    </p>
                                    <p className='font-bold mt-5'>Cours d’essai et inscription toute l’année</p>
                                </div>
                            }/>
        </div>
    );
}

export default Workshop;
