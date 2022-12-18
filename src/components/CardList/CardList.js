import React from "react";
import Card from "../Card/Card";

function CardList({ cardList }) {
  return (
    <div className="flex flex-wrap justify-between pt-12 -mx-6 mx-0 sm:mx-6">
      {
        cardList.map(card => (
          <Card image={card.image} date={card.date} title={card.title} details={card.details} onClick={card.onClick}></Card>
        ))
      }
    </div>
  )
}

export default CardList;
