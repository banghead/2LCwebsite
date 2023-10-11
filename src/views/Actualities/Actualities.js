import React from 'react';
import CardList from "../../components/CardList/CardList";
import logo from "../../assets/images/2LC-2.png";
import compile from "../../assets/images/articles/Lacompilecaavance.webp";
import rollerBeat from "../../assets/images/articles/Ateliersderue_Rollers,BeatBoxet Breaking.webp";
import travel from "../../assets/images/articles/2LCTravel_l’équipedeGabon2024autravail.webp";
import roller from "../../assets/images/articles/sortie-roller-malakoff-2023.webp"
import fermerQuart from "../../assets/images/articles/copie-de-la-ferme-sinvite-au-quartier.webp"
import YearLine from "../../components/YearLine";

const cardList2023 = [
    {
        image: fermerQuart,
        date: "17 septembre 2023",
        title: "La ferme 2lc  s’invite à la fête de quartier de malakoff",
        details: "Pour ce dimanche de fête sans voiture, seuls circulent  les vélos et un petit train qui fait le tour du quartier malakoff. Le train est bondé et les passagers, enfants et adultes, passent devant la ferme,  avec une expression empreinte d'une surprise joyeuse. Les enclos sont  installés en bas des tours, près de la pataugeoire, ce qui suscite la curiosité des passants; la joie aussi est perceptible dans les regards.\n" +
            "La ferme 2LC a à cœur de faire entrer en contact le public et les animaux. C’est ainsi que les habitants rentrent par petites grappes pour avoir une relation privilégiée avec les moutons, dindons, lapins et autres canards. Les animateurs et animatrices cherchent à créer des interactions positives. On mesure l’importance pour l’équipe 2LC que chacun puisse  faire confiance à l'animal et  puisse se faire confiance à soi pour dépasser certaines peurs. C’est à ce prix que la complicité éphémère avec l’animal s’installe. Mazora la brebis vedette accepte volontiers les caresses contre un peu de blé ou un quignon de pain sec! \n" +
            "Les mamans s’attendrissent devant les canetons et les poussins.Les enfants guident le troupeau d'oies à travers un parcours de bottes de paille, sous le regard fier de leurs parents: il semble que tout le monde ait dépassé son appréhension. Les rires et sourires virevoltent dans l’enclos.\n",
        key: 7
    }, {
        image: roller,
        date: "24 avril 2023",
        title: "Sortie roller pour les jeunes du quartier clos toreau",
        details: "Filles et garçons prennent place dans le minibus.  Les rollers et protections sont chargés dans le coffre. En route vers le skatepark de Sainte Luce pour deux heures de glisse.\n" +
            "Le cadre est verdoyant , les modules et le bol sont super roulants! \n" +
            "Pendant deux heures , les jeunes kiffent , se font des frayeurs, sentent l'adrénaline. Ils progressent, ils s’entraident et rigolent.\n" +
            "La session se termine comme à son habitude sur les balançoires tourniquets et autres jeux à proximité du skatepark, le groupe est uni et le souvenir est gravé!\n",
        key: 6
    },
    {
        image: compile,
        date: "6 mars 2023",
        title: "La Compile 2LC, ça avance!",
        details: "En préparation de la compile Rap 2LC, les séances de studio s'enchaînent chez Bellarue 17. C’est ainsi que Babass, S2A et Banghead ont posé leurs voix sur le morceau “ Dans mes nuages “: un track sur lequel on retrouvera aussi Omed aux commandes du refrain. Sur le thème du jardin secret, dans un registre boom bap, les 4 artistes se livrent une fois de plus sans compter.",
        key: 1
    },
    {
        image: logo,
        date: "6 mars 2023",
        title: "Black and White: Les naissances vont bon train !",
        details: "La période de l’hiver rime avec naissance chez les moutons. Ce sont déjà 6 agneaux qui sont nés dans la ludik et lucid farmer. 2 petits béliers et 4 petites agnelles que nous retrouverons sans aucun doute dans nos ateliers de médiation animale et pourquoi pas tout prêt de chez toi !",
        key: 2
    },
    {
        image: rollerBeat,
        date: "14 février 2023",
        title: "Ateliers de rue : Rollers, BeatBox et  Breaking",
        details: "Dimanche 19 et 26 février, l’équipe sera à Malakoff à 15h, rue d’angleterre et au Clos Toreau à 16h30" +
            " sur les jeux d’eau," +
            " pour braver le froid et réchauffer les cœurs. Matériel à disposition pour tous, venez juste avec votre envie.",
        key: 3
    },
    {
        image: travel,
        date: "30 janvier 2023",
        title: "2LC Travel : l’équipe de Gabon 2024 au travail",
        details: "Suite à l’annulation du départ pour le Kenya en décembre 2023, l’équipe 2LC Travel" +
            "  s’est réunie ce 23 janvier au centre des Alévis de Nantes: au programme, choisir une nouvelle destination!" +
            " Ce sera le Gabon et Libreville pour le printemps 2024.",
        key: 4
    },
];

const cardList2022 = [
    {
        image: logo,
        date: "10 décembre 2022",
        title: "Soutien au téléthon chapelain",
        details: "Les breakeurs, les écrivains , les rappeurs et les beatboxers étaient 27 cette année et ont encore une fois mis le feu à Capellia dans le cadre du téléthon 2023. Cette date  a été l’occasion pour nos débutants de goûter à l’expérience scénique en alliant l’utile à l’agréable !",
        key: 5
    },
]


function Actualities() {
    return (
        <div className={'px-12 mt-5'}>
            <YearLine year={"2023"}></YearLine>
            <CardList cardList={cardList2023} actualityPage={"md:w-1/2"}/>
            <YearLine year={"2022"}></YearLine>
            <CardList cardList={cardList2022} actualityPage={"md:w-1/2"}/>
        </div>
    );
}

export default Actualities;
