import React from 'react';
import CardList from "../../components/CardList/CardList";
import MainCard from "../../components/MainCard/MainCard";
import video from "../../assets/homeMovie.mp4";
import AdhesionBanner from "../../components/AdhesionBanner/AdhesionBanner";
import logo from "../../assets/images/2LC-2.png"
import logo2LC from "../../assets/images/logo.png"
import travel from "../../assets/images/articles/2LCTravel_l’équipedeGabon2024autravail.webp"
import rollerBeat from "../../assets/images/articles/Ateliersderue_Rollers,BeatBoxet Breaking.webp"
import compile from "../../assets/images/articles/Lacompilecaavance.webp"
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import fermerQuart from "../../assets/images/articles/copie-de-la-ferme-sinvite-au-quartier.webp";

const cardList = [
    {
        image: fermerQuart,
        date: "17 septembre 2023",
        title: "La ferme 2lc  s’invite à la fête de quartier de malakoff",
        details: "Ce dimanche 17 septembre , jour de fête à Malakoff: une multitude d'associations sont présentes pour animer et fêter l'issue de 20 ans de rénovation urbaine. C’est un dimanche sans voiture : la ferme 2lc s’y est invitée.\n",
        onClick: <Link to={"/actualite"}>
            <Button>Lire plus</Button>
        </Link>,
        key: 6
    },
    {
        image: compile,
        date: "6 mars 2023",
        title: "La Compile 2LC, ça avance!",
        details: "En préparation de la compile Rap 2LC, les séances de studio s'enchaînent chez Bellarue 17. C’est ainsi que Babass, S2A et Banghead ont posé leurs voix sur le morceau “ Dans mes nuages “: un track sur lequel on retrouvera aussi Omed aux commandes du refrain. Sur le thème du jardin secret, dans un registre boom bap, les 4 artistes se livrent une fois de plus sans compter.",
        onClick: <Link to={"/actualite"}>
            <Button>Lire plus</Button>
        </Link>,
        key: 1
    },
    {
        image: logo,
        date: "6 mars 2023",
        title: "Black and White: Les naissances vont bon train !",
        details: "La période de l’hiver rime avec naissance chez les moutons. Ce sont déjà 6 agneaux qui sont nés dans la ludik et lucid farmer. 2 petits béliers et 4 petites agnelles que nous retrouverons sans aucun doute dans nos ateliers de médiation animale et pourquoi pas tout prêt de chez toi !",
        onClick: <Link to={"/actualite"}>
            <Button>Lire plus</Button>
        </Link>,
        key: 2
    },
    {
        image: rollerBeat,
        date: "14 février 2023",
        title: "Ateliers de rue : Rollers, BeatBox et  Breaking",
        details: "Dimanche 19 et 26 février, l’équipe sera à Malakoff à 15h, rue d’angleterre et au Clos Toreau à 16h30" +
            " sur les jeux d’eau," +
            " pour braver le froid et réchauffer les cœurs. Matériel à disposition pour tous, venez juste avec votre envie.",
        onClick: <Link to={"/actualite"}>
            <Button>Lire plus</Button>
        </Link>,
        key: 3
    },
    {
        image: travel,
        date: "30 janvier 2023",
        title: "2LC Travel : l’équipe de Gabon 2024 au travail",
        details: "Suite à l’annulation du départ pour le Kenya en décembre 2023, l’équipe 2LC Travel" +
            "  s’est réunie ce 23 janvier au centre des Alévis de Nantes: au programme, choisir une nouvelle destination!" +
            " Ce sera le Gabon et Libreville pour le printemps 2024.",
        onClick: <Link to={"/actualite"}>
            <Button>Lire plus</Button>
        </Link>,
        key: 4
    },
    {
        image: logo,
        date: "10 décembre 2023",
        title: "Soutien au téléthon chapelain",
        details: "Les breakeurs, les écrivains , les rappeurs et les beatboxers étaient 27 cette année et ont encore une fois mis le feu à Capellia dans le cadre du téléthon 2023. Cette date  a été l’occasion pour nos débutants de goûter à l’expérience scénique en alliant l’utile à l’agréable !",
        onClick: <Link to={"/actualite"}>
            <Button>Lire plus</Button>
        </Link>,
        key: 5
    },
];

function Home() {
    return (
        <div>
            <video autoPlay loop muted className={"w-full"}>
                <source src={video} type={'video/mp4'}/>
            </video>
            <div className="-mt-32 max-lg:-mt-24 max-md:-mt-16 max-sm:-mt-8">
                <MainCard image={logo2LC} title="2LC Hip Hop" title2={"2LC Farmer"}
                          details={<p className="text-gray-800 font-serif text-base px-6 mb-5">
                              Créée en 2008, l’association Ludik et Lucid Connexion (2LC) ne cesse d’évoluer et de se
                              structurer
                              en gardant à l’esprit son objectif premier : contribuer à créer du lien de qualité entre
                              les personnes.
                              Les forces vives de <span className='font-bold'>2L.C</span> onnexion utilisent
                              l’expression par la culture HIP-HOP, la glisse urbaine et la médiation animale.
                              Pour favoriser le bien vivre ensemble, le collectif créent des espaces relationnels entre
                              les êtres humains de toute origine et tout horizons. Ici&nbsp;
                              {/*<Link to={"farmer"}>*/}
                              l’action culturelle
                              {/*</Link>*/}
                              &nbsp;et&nbsp;
                              {/*<Link to={"farmer"}>*/}
                              l’action sociale&nbsp;
                              {/*</Link>*/}
                              œuvre dans le même sens.</p>
                          }
                          details2={<p className="text-gray-800 font-serif text-base px-6 mb-5">
                              La médiation animale a prouvé sa capacité à apporter du bien être, à ouvrir en chacun de
                              nous la possibilité de prendre soin du vivant. Oublier le bitume pour faire place à une
                              respiration qu’offre l’animal permet d'alléger la charge mentale. <span
                              className='font-bold'>2LC Farmer / médiation
                              animale </span>emmène dans les grands ensembles les animaux de la ferme: le public peut
                              les
                              observer, les approcher , les caresser et les nourrir .
                          </p>
                          }
                />
                <div className={'px-12'}>
                    <AdhesionBanner/>
                </div>
                <div className={'px-8'}>
                    <CardList cardList={cardList}/>
                </div>

            </div>
        </div>
    );
}

export default Home;
