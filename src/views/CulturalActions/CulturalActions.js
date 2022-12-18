import React from 'react';
import CardList from "../../components/CardList/CardList";
import imageTest from "../../assets/photo-test.jpg";

const cardList = [
    { image: imageTest, date: Date.now(), title: "Title1", details: "Details", onClick: () => console.log("coucou1"), key:1 },
    { image: imageTest, date: Date.now(), title: "Title2", details: "Details", onClick: () => console.log("coucou1"), key:2 },
    { image: imageTest, date: Date.now(), title: "Title3", details: "Details", onClick: () => console.log("coucou1"), key:3 },

];

function CulturalActions() {
    return (
        <div>
            <CardList cardList={cardList}/>
        </div>
    );
}

export default CulturalActions;