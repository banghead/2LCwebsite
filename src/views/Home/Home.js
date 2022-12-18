import React from 'react';
import CardList from "../../components/CardList/CardList";
import imageTest from "../../assets/photo-test.jpg";
import video from "../../assets/homeMovie.mp4";
import AdhesionBanner from "../../components/AdhesionBanner/AdhesionBanner";

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
    },
    {
        image: imageTest,
        date: Date.now(),
        title: "Title6",
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
            <AdhesionBanner/>
            <CardList cardList={cardList}/>
        </div>
    );
}

export default Home;
