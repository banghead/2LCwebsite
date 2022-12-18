import React from 'react';
import CardList from "../../components/CardList/CardList";
import imageTest from "../../images/photo-test.jpg";

const cardList = [
    { image: imageTest, date: Date.now(), title: "Title1", details: "Details", onClick: () => console.log("coucou1") },
    { image: imageTest, date: Date.now(), title: "Title2", details: "Details", onClick: () => console.log("coucou2") },
    { image: imageTest, date: Date.now(), title: "Title3", details: "Details", onClick: () => console.log("coucou3") },
    { image: imageTest, date: Date.now(), title: "Title4", details: "Details", onClick: () => console.log("coucou4") },
    { image: imageTest, date: Date.now(), title: "Title5", details: "Details", onClick: () => console.log("coucou5") }
];

function WhoWeAre() {
    return (
        <div>
            <CardList cardList={cardList}/>
        </div>
    );
}

export default WhoWeAre;
