import React from 'react';
import imageBbx from "../../assets/images/culturalActionsImages/bbx.jpg";
import imageBreak from "../../assets/images/culturalActionsImages/break.jpg";
import imageEcriture from "../../assets/images/culturalActionsImages/ecriture.jpg";
import CulturalActionsCardLeft from "../../components/CulturalActionsCardLeft/CulturalActionsCardLeft";
import CulturalActionsCardRight from "../../components/CulturalActionsCardRight/CulturalActionsCardRight";


function CulturalActions() {
    return (
        <div>
            <CulturalActionsCardLeft imageTest={imageEcriture} title={"Ecriture"}
                                     horaires={
                                         [
                                             {
                                                 day: 'lundi',
                                                 schedule: '19h-20h30',
                                                 level: 'Tous niveaux',
                                                 teacher: 'Flow Demo'
                                             }
                                         ]
                                     }
                                     details={
                                         "Les mots sont plus intelligents que nous : il suffit de les laisser se coucher sur le papier pour lire " +
                                         "comme ils parlent de nous ! L’écriture partagée, c’est ce moyen qu’OMED, écrivain et parolier, choisit pour" +
                                         " tisser des liens le temps d’un atelier. Souvent, on écrit de manière fonctionnelle, ici, nous te proposons" +
                                         " de le faire pour le plaisir. Durant les séances, grâce a la richesse du groupe, n nous explorerons l’idée" +
                                         " de ” l’inspiration dans les mots de l’autre “."
                                     }/>
            <CulturalActionsCardRight imageTest={imageBbx} title={"Beatbox"}
                                      horaires={
                                          [
                                              {
                                                  day: 'lundi',
                                                  schedule: '18h-19h',
                                                  level: 'Débutant / Intermédaire',
                                                  teacher: 'Payk'
                                              },
                                              {
                                                  day: 'lundi',
                                                  schedule: '19h-20h',
                                                  level: 'Intermédiaire / Confirmé',
                                                  teacher: 'Payk'
                                              }
                                          ]
                                      }

                                      details={
                                          "Que ce soit dans le but de découvrir ou d’approfondir tes connaissances et ta pratique du beatbox," +
                                          " c’est dans la joie et la bonne humeur que FURAX t’accueillera. Des kicks au samples classiques aux sons" +
                                          " improbables, ce stage t’emmènera a la découverte de ton flow de bouche. Un accent particulier sera mis" +
                                          " sur la culture des battles et des shows partagés. "

                                      }/>
            <CulturalActionsCardLeft imageTest={imageBreak} title={"Danse"}
                                     horaires={
                                         [
                                             {
                                                 day: 'lundi',
                                                 schedule: '18h-19h',
                                                 level: 'Débutant / Intermédaire',
                                                 teacher: 'NAS'
                                             },
                                             {
                                                 day: 'lundi',
                                                 schedule: '19h-20h',
                                                 level: 'Intermédiaire / Confirmé',
                                                 teacher: 'NAS'
                                             }
                                         ]
                                     }
                                     details={
                                         "Que ce soit dans le but de découvrir ou d’approfondir tes connaissances et ta pratique de la danse" +
                                         " HIP-HOP, c’est dans la joie et la bonne humeur que BBOY TEETOCH t’accueillera. Des footworks classiques" +
                                         " aux freezer originaux, ce stage t’emmènera a la découverte de ton flow de danse. Un accent particulier" +
                                         " sera mis sur la culture des battles et des shows partagés."
                                     }/>
        </div>
    );
}

export default CulturalActions;
