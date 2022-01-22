import { Card } from "react-bootstrap";
import styled from "styled-components";

export const PortfolioCard = styled.div`
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const PortFolioCardBody = styled.div`
  margin: 30px auto;
  width: 300px;
  height: 250px;
  border-radius: 40px;
  cursor: pointer;

  .card_image {
    width: inherit;
    height: inherit;
    border-radius: 5%;
    img {
      width: inherit;
      height: inherit;
      border-radius: 5%;
      object-fit: cover;
    }
  }

  :hover .card_title {
    color: red;
    /* display: block; */
  }

  .card_title {
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 30px;
    margin-top: -80px;
    height: 40px;
    /* visibility: hidden; */
  }
`;
