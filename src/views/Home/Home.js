import React from 'react';
import CardList from "../../components/CardList/CardList";
import MainCard from "../../components/MainCard/MainCard";
import video from "../../assets/homeMovie.mp4";
import AdhesionBanner from "../../components/AdhesionBanner/AdhesionBanner";
import logo from "../../assets/images/homeImages/2LC-2.png"
import block from "../../assets/images/homeImages/block2022.jpg"
import ferme from "../../assets/images/homeImages/ferme.jpg"
import ecriture from "../../assets/images/homeImages/stageEcriture.png"
import logo2LC from "../../assets/logo.png"

const cardList = [
    {
        image: ferme,
        date: "8 septembre 2022",
        title: "2LC Farmer, la ferme s’invite au quartier",
        details: "Le mercredi 17 août notre équipe s’est installée sur le Terrain des possibles au petit matin avec de drôles d’invités. \n" +
            "\n" +
            "Les habitants du Clos Toreau ont pu se réveiller au chant du coq et bêlement des brebis." +
            " 2LC s’est transformé en 2LC farmer. La ferme s’est installée au quartier le temps d’une journée. Des animateurs et des bénévoles encadraient l’aventure, des brebis, des coqs, des poules, des oies, des poussins, des canetons et les mères la faisaient vivre tout naturellement.",
        onClick: () => console.log("coucou1"),
        key: 1
    },
    {
        image: logo,
        date: "14 juin 2022",
        title: "Favoriser l’accès à l’emploi",
        details: "Details",
        onClick: () => console.log("coucou2"),
        key: 2
    },
    {
        image: ecriture,
        date: "14 juin 2022",
        title: "Atelier écriture",
        details: "Details",
        onClick: () => console.log("coucou3"),
        key: 3
    },
    {
        image: logo,
        date: "12 février 2022",
        title: "anim’ de rue",
        details: "Details",
        onClick: () => console.log("coucou4"),
        key: 4
    },
    {
        image: logo,
        date: "12 février 2022",
        title: "anim’ de rue",
        details: "Details",
        onClick: () => console.log("coucou5"),
        key: 5
    },
    {
        image: block,
        date: "24 septembre 2022",
        title: "Block PâtesRiz",
        details: "Details",
        onClick: () => console.log("coucou6"),
        key: 6
    }
];

function Home() {
    return (
        <div>
            <video autoPlay loop muted className={"w-full"}>
                <source src={video} type={'video/mp4'}/>
            </video>
            <div className="-mt-32 max-lg:-mt-24 max-md:-mt-16 max-sm:-mt-8">
                <MainCard image={logo2LC} title="2LC"
                          details="Depuis sa création en 2008, l’association Ludik et Lucid Connexion (2LC) ne cesse d’évoluer et de se structurer en gardant bien en vue son objectif premier : contribuer à créer du lien de qualité entre les personnes via l’expression par la culture HIP-HOP.
Dans le but de favoriser le bien vivre ensemble, nous développons des espaces relationnels entre les êtres humains de tous milieux ( urbain / péri – urbain / rural ) : l’initiation aux déplacements est un des outils que nous utilisons."/>
                <AdhesionBanner/>
                <CardList cardList={cardList}/>
            </div>
        </div>
    );
}

export default Home;
