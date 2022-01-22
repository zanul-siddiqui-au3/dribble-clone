import React, { useState } from "react";
import { carouselImagesSrc } from "../../../utils/descriptionUtils";
import {
  CarouselSelectorConatiner,
  DescriptionCarouselSelectorCard,
} from "../styles/descriptionStyle";

function DescriptionCarouselSelector({ activeIndexHandler }) {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleSelectCard = (i) => {
    setSelectedCard(i);
    activeIndexHandler(i);
  };

  return (
    <CarouselSelectorConatiner>
      {carouselImagesSrc.map((ele, i) => (
        <DescriptionCarouselSelectorCard
          key={i}
          isSelected={selectedCard === i}
          source={ele}
          onClick={() => handleSelectCard(i)}
        ></DescriptionCarouselSelectorCard>
      ))}
    </CarouselSelectorConatiner>
  );
}

export default DescriptionCarouselSelector;
