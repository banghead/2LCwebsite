import React from 'react';
import imageTest from "../../assets/images/photo-test.jpg";
import CardImageRight from "../../components/CardImageRight/CardImageRight";
import imageBbx from "../../assets/images/ateliers/bbx.jpg";
import CardImageLeft from "../../components/CardImageLeft/CardImageLeft";

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
            <CardImageRight imageTest={imageBbx} title={"Action culturelle"}

                            details={
                                "Développement de la culture hip-hop"
                            }/>
            <CardImageLeft imageTest={imageBbx} title={"Action sociale"}

                           details={
                               "Créer des liens de qualités"
                           }/>
        </div>
    );
}

export default WhoWeAre;
