import React from 'react';
import CardList from "../../components/CardList/CardList";
import imageTest from "../../assets/photo-test.jpg";

const cardList = [
    { image: imageTest, date: Date.now(), title: "Title1", details: "Details", onClick: () => console.log("coucou1") , key:1 },

];

function Actualities() {
    return (
        <div>
            <CardList cardList={cardList}/>
        </div>
    );
}

export default Actualities;
