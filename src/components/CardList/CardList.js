import React from "react";
import Card from "../Card/Card";

function CardList({cardList, actualityPage}) {
    if (!actualityPage) {
        actualityPage = "md:w-1/3"
    }
    return (
        <div className="flex flex-wrap justify-between pt-12 mx-0 sm:mx-6">
            {
                cardList.map(card => (
                    <Card key={card.key} image={card.image} date={card.date} title={card.title} details={card.details}
                          onClick={card.onClick} actualityPage={actualityPage}/>
                ))
            }
        </div>
    )
}

export default CardList;
