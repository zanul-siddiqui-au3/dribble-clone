import React from "react";
import { carouselImagesSrc } from "../../../utils/descriptionUtils";
import {
  DescriptionCarouselConatiner,
  DescriptionCarouselItem,
  nextIcon,
  prevIcon,
} from "../styles/descriptionStyle";

function DescriptionCarrousel({ activeIndex }) {
  return (
    <React.Fragment>
      <DescriptionCarouselConatiner
        interval={null}
        prevIcon={prevIcon}
        nextIcon={nextIcon}
        indicators={false}
        activeIndex={activeIndex}
      >
        {carouselImagesSrc.map((ele, i) => (
          <DescriptionCarouselItem interval={null} key={i}>
            <img className="d-block w-100" src={ele} alt="slides" />
          </DescriptionCarouselItem>
        ))}
      </DescriptionCarouselConatiner>
    </React.Fragment>
  );
}

export default DescriptionCarrousel;
