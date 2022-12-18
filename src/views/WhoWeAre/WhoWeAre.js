import React from 'react';
import CardList from "../../components/CardList/CardList";
import imageTest from "../../assets/photo-test.jpg";

const cardList = [
    { image: imageTest, date: Date.now(), title: "Title1", details: "Details", onClick: () => console.log("coucou1"), key:1 },
    { image: imageTest, date: Date.now(), title: "Title2", details: "Details", onClick: () => console.log("coucou2"), key:2 },
    { image: imageTest, date: Date.now(), title: "Title3", details: "Details", onClick: () => console.log("coucou3"), key:3 },
    { image: imageTest, date: Date.now(), title: "Title4", details: "Details", onClick: () => console.log("coucou4"), key:4 },
    { image: imageTest, date: Date.now(), title: "Title5", details: "Details", onClick: () => console.log("coucou5"), key:5 }
];

function WhoWeAre() {
    return (
        <div>
            <CardList cardList={cardList}/>
        </div>
    );
}

export default WhoWeAre;
