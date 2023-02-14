import React from 'react';
import CardList from "../../components/CardList/CardList";
import imageTest from "../../assets/photo-test.jpg";
import CulturalActionsCardRight from "../../components/CulturalActionsCardRight/CulturalActionsCardRight";
import imageBbx from "../../assets/images/culturalActionsImages/bbx.jpg";
import CulturalActionsCardLeft from "../../components/CulturalActionsCardLeft/CulturalActionsCardLeft";

const cardList = [
    {
        image: imageTest,
        date: Date.now(),
        title: "Title1",
        details: "Details",
        onClick: () => console.log("coucou1"),
        key: 1
    },
    {
        image: imageTest,
        date: Date.now(),
        title: "Title2",
        details: "Details",
        onClick: () => console.log("coucou2"),
        key: 2
    },
    {
        image: imageTest,
        date: Date.now(),
        title: "Title3",
        details: "Details",
        onClick: () => console.log("coucou3"),
        key: 3
    },
    {
        image: imageTest,
        date: Date.now(),
        title: "Title4",
        details: "Details",
        onClick: () => console.log("coucou4"),
        key: 4
    },
    {
        image: imageTest,
        date: Date.now(),
        title: "Title5",
        details: "Details",
        onClick: () => console.log("coucou5"),
        key: 5
    }
];

function WhoWeAre() {
    return (
        <div>
            <CulturalActionsCardRight imageTest={imageBbx} title={"Action culturelle"}

                                      details={
                                          "Développement de la culture hip-hop"
                                      }/>
            <CulturalActionsCardLeft imageTest={imageBbx} title={"Action sociale"}

                                     details={
                                         "Créer des liens de qualités"
                                     }/>
        </div>
    );
}

export default WhoWeAre;
