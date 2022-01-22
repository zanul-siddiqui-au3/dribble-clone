import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const DescriptionRightContainer = styled.div``;

export const DescriptionCarouselConatiner = styled(Carousel)``;

export const DescriptionCarouselItem = styled(Carousel.Item)`
  margin-top: 25px;
  .carousel-control-next {
    display: none;
  }
`;

export const DescriptionCarouselSelectorCard = styled.img.attrs((props) => ({
  src: props.source,
}))`
  width: 6em;
  height: 4em;
  margin: 35px 15px;
  border-radius: 10%;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? "2px solid #ea4c89" : "")};
  box-shadow: ${(props) =>
    props.isSelected ? "0 0 0 4px rgb(0 0 0 / 10%)" : ""};
`;

export const CarouselSelectorConatiner = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

export const nextIcon = (
  <IconButton>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      role="img"
    >
      <rect
        x="5"
        y="5"
        width="13"
        height="15"
        fill="black"
        fillOpacity="0.2"
      ></rect>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM15.5003 11.9996L11.7341 15.7071C11.3386 16.0971 10.6936 16.0971 10.2976 15.7076C10.1056 15.5186 10.0001 15.2676 10.0001 15.0006C10.0001 14.7336 10.1056 14.4826 10.2976 14.2936L12.6272 12.0001L10.2976 9.70662C9.90159 9.31662 9.90159 8.68162 10.2976 8.29212C10.6936 7.90263 11.3381 7.90263 11.7341 8.29212L15.5003 11.9996Z"
        fill="white"
      ></path>
      <circle
        cx="12"
        cy="12"
        r="11.5"
        stroke="black"
        strokeOpacity="0.1"
      ></circle>
    </svg>
  </IconButton>
);

export const prevIcon = (
  <IconButton>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      role="img"
    >
      <rect
        width="13"
        height="15"
        transform="matrix(-1 0 0 1 19 5)"
        fill="black"
        fillOpacity="0.2"
      ></rect>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM8.49975 11.9996L12.2659 15.7071C12.6614 16.0971 13.3064 16.0971 13.7024 15.7076C13.8944 15.5186 13.9999 15.2676 13.9999 15.0006C13.9999 14.7336 13.8944 14.4826 13.7024 14.2936L11.3728 12.0001L13.7024 9.70662C14.0984 9.31662 14.0984 8.68162 13.7024 8.29212C13.3064 7.90263 12.6619 7.90263 12.2659 8.29212L8.49975 11.9996Z"
        fill="white"
      ></path>
      <circle
        r="11.5"
        transform="matrix(-1 0 0 1 12 12)"
        stroke="black"
        strokeOpacity="0.1"
      ></circle>
    </svg>
  </IconButton>
);
