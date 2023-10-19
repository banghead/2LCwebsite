import React from 'react';
import YearLine from "../../components/YearLine";
import profil from "../../assets/images/bureau/profil.jpg";
import Card from "../../components/Card/Card";
import marine from "../../assets/images/bureau/marine.jpg"
import antho from "../../assets/images/bureau/anthJ.jpg"
import brieg from "../../assets/images/bureau/briegV.jpg"
import floA from "../../assets/images/bureau/floA.jpg"
import chacha from "../../assets/images/bureau/chacha.JPG"

function WhoWeAre() {
    const cardList2023 = [
        {
            image: marine,
            title: "Marine Estrade",
            date: "Secrétaire",
            key: 7
        }, {
            image: antho,
            title: "Anthony Jousset",
            date: "Trésorier",
            key: 6
        },
        {
            image: brieg,
            title: "Brieg Vion",
            date: "Président",
            key: 1
        },
        {
            image: profil,
            title: "Benjamin Jousset",
            key: 2
        },
        {
            image: profil,
            title: "Delphine Michel",
            key: 3
        },
        {
            image: profil,
            title: "Lydie Menyer Chevalier",
            key: 4
        },
        {
            image: profil,
            title: "Julien Bigeard Perly",
            key: 5
        },
        {
            image: profil,
            title: "Omar Moussa",
            key: 8
        },
        {
            image: floA,
            title: "Florian Aubin",
            date: "Référent technique / Développeur",
            key: 9
        },
        {
            image: chacha,
            title: "Charlotte Benaini",
            key: 10
        },
    ];
    return (
        <div>
            <div className="h-full flex md:mr-20 md:ml-20">
                <div className="h-full bg-white rounded w-full m-5">
                    <div className="flex-1 bg-white rounded-r rounded-b-none overflow-hidden shadow-lg">
                        <div className="flex-1 bg-white rounded-r rounded-b-none overflow-hidden shadow-lg">
                            <div className="w-full font-bold text-5xl text-gray-900 px-6 pt-6 pb-6 text-center">Nous
                                sommes 2LC
                            </div>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Nous
                                sommes, des gardiens silencieux,</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">des
                                âmes
                                errantes qui s'assemblent et se rassemblent,</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Nous
                                sommes, des enfants en mal des autres,</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">des
                                espérants à retrouver le sens que l'on met dans nos pas</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Nous
                                sommes, à la recherche d'une fierté à retrouver,</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">celle
                                qui
                                vient de l'ombre, loin de la lumière et des vitrines</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Nous
                                sommes, venus vous dire, vous raconter ce que l'on fabrique ensemble</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Nous
                                sommes
                                HIP HOP. Nous sommes le hip hop. Celui ci nous insuffle l’énergie comme </p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">La
                                rencontre qui nous enrichit !</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Nous
                                sommes
                                là les uns pour les autres à se regarder grandir, cheminer et bâtir le monde.</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Celui
                                que
                                l'on espère voir pour nos enfants.</p>
                            <div className="mb-10"></div>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Le hip
                                hop
                                c'est bien plus que cinq disciplines, c'est une manière de voir le monde, les autres</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center"> une
                                manière de transmettre, d'apprendre, de s'écouter, de se planter pour mieux
                                progresser</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Loin
                                des
                                événements, des subventions ou des couloirs des décisionnaires. </p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Avec
                                nous,
                                c'est au coin de la rue, peu importe ton quotient familial, peu importe ton
                                histoire. </p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Se
                                raconter
                                pour vider son sac et le remplir des mots des autres, des tiens.</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Nous
                                sommes
                                des gardiens silencieux d'un monde que nous bâtissons tous les jours.</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Où la
                                confiance et le respect s'interrogent pour avancer plus loin, plus haut</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Nous
                                sommes
                                2LC, ils sont 2LC eux qui sont là devant vous. Pas pour amuser la galerie, ou faire les
                                clowns mais faire vivre ce qui les portent toute l'année. </p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center"> Nous
                                sommes Une fenêtre qui s'ouvre sur milles couleurs comme dirait Enora</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Nous
                                sommes
                                2LC, l'histoire d’une porte ouverte vers l’intérieur. Tu entends les rires, les
                                vibrations qui résonnent en nos cœurs . Ici elles prennent vie, elles s’encrent.</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Nous
                                sommes une toile qui s’étend et qui retient ceux sur le fil, qui vivent pour faire
                                vivre. </p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">les
                                envies, les doutes, les projets, il n’y a pas de mauvaises réponses. Juste des
                                bonnes questions. Nous sommes chacun responsables, tous acteurs, jeunes, vieux.</p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center"></p>
                            <p className="text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center"></p>
                            <p className="font-bold text-gray-800 font-serif text-base px-6 mb-3 text-[19px] text-center">Nous
                                sommes des voix pour des voies. nous sommes</p>
                            <p className="font-bold text-gray-800 font-serif text-base px-6 mb-8 text-[19px] text-center">une
                                famille
                                pour proposer, prendre des risques, apprendre, donner, découvrir !</p>
                            <p className="font-bold text-gray-800 font-serif text-base px-6 mb-5 text-[19px] text-end">Ecrits
                                de jeunes et d’intervenants - 2019</p>
                        </div>
                    </div>
                </div>
            </div>
            <YearLine year={"LE BUREAU"}></YearLine>
            <div className="grid grid-cols-2 gap-2 m-5 md:gap-5 md:grid-cols-5">
                {
                    cardList2023.map(card => (
                        <Card key={card.key} image={card.image} title={card.title} date={card.date} onClick={""}
                              details={""}/>
                    ))}
            </div>
        </div>
    );
}

export default WhoWeAre;
