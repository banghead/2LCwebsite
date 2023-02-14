import React from 'react';
import CardList from "../../components/CardList/CardList";
import MainCard from "../../components/MainCard/MainCard";
import video from "../../assets/homeMovie.mp4";
import AdhesionBanner from "../../components/AdhesionBanner/AdhesionBanner";
import logo from "../../assets/images/2LC-2.png"
import logo2LC from "../../assets/images/logo.png"
import travel from "../../assets/images/articles/2LCTravel_l’équipedeGabon2024autravail.jpeg"
import rollerBeat from "../../assets/images/articles/Ateliersderue_Rollers,BeatBoxet Breaking.JPG"
import {Link} from "react-router-dom";

const cardList = [
    {
        image: rollerBeat,
        date: "14 février 2023",
        title: "Ateliers de rue : Rollers, BeatBox et  Breaking",
        details: "Dimanche 19 et 26 février, l’équipe sera à Malakoff à 15h, rue d’angleterre et au Clos Toreau à 16h30" +
            " sur les jeux d’eau," +
            " pour braver le froid et réchauffer les cœurs. Matériel à disposition pour tous, venez juste avec votre envie.",
        onClick: () => console.log("coucou2"),
        key: 1
    },
    {
        image: travel,
        date: "30 janvier 2023",
        title: "2LC Travel : l’équipe de Gabon 2024 au travail",
        details: "Suite à l’annulation du départ pour le Kenya en décembre 2023, l’équipe 2LC Travel" +
            "  s’est réunie ce 23 janvier au centre des Alévis de Nantes: au programme, choisir une nouvelle destination!" +
            " Ce sera le Gabon et Libreville pour le printemps 2024.",
        onClick: () => console.log("coucou1"),
        key: 2
    },
    {
        image: logo,
        date: "10 décembre 2023",
        title: "Soutien au téléthon chapelain",
        details: "Les breakeurs, les écrivains , les rappeurs et les beatboxers étaient 27 cette année et ont encore une fois mis le feu à Capellia dans le cadre du téléthon 2023. Cette date  a été l’occasion pour nos débutants de goûter à l’expérience scénique en alliant l’utile à l’agréable !",
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
        image: logo,
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
                <MainCard image={logo2LC} title=""
                          details={<p className="text-gray-800 font-serif text-base px-6 mb-5">
                              Créée en 2008, l’association Ludik et Lucid Connexion (2LC) ne cesse d’évoluer et de se
                              structurer
                              en gardant à l’esprit son objectif premier : contribuer à créer du lien de qualité entre
                              les personnes.
                              Les forces vives de <span className='font-bold'>2L.C</span> onnexion utilisent
                              l’expression par la culture HIP-HOP, la glisse urbaine et la médiation animale.
                              Pour favoriser le bien vivre ensemble, le collectif créent des espaces relationnels entre
                              les êtres humains de toute origine et tout horizons. Ici&nbsp;
                              <Link to={"2LCwebsite/farmer"}>
                                  l’action culturelle
                              </Link>
                              &nbsp;et&nbsp;
                              <Link to={"2LCwebsite/farmer"}>
                                  l’action sociale&nbsp;
                              </Link>
                              œuvre dans le même sens.</p>
                          }/>
                <AdhesionBanner/>
                <CardList cardList={cardList}/>
            </div>
        </div>
    );
}

export default Home;
