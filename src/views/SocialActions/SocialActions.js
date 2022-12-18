import React from 'react';
import CardList from "../../components/CardList/CardList";
import imageTest from "../../images/photo-test.jpg";

const cardList = [
    { image: imageTest, date: Date.now(), title: "Title1", details: "Details", onClick: () => console.log("coucou1") },
    { image: imageTest, date: Date.now(), title: "Title2", details: "Details", onClick: () => console.log("coucou1") },
    { image: imageTest, date: Date.now(), title: "Title3", details: "Details", onClick: () => console.log("coucou1") },
    { image: imageTest, date: Date.now(), title: "Title4", details: "Details", onClick: () => console.log("coucou1") },

];

function SocialActions() {
    return (
        <div>
            <CardList cardList={cardList}/>
        </div>
    );
}

export default SocialActions;
