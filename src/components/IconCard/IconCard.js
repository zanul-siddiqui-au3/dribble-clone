import styled from "styled-components";

export const IconCard = styled.button`
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 0px 1px #e7e7e9 inset;
  box-shadow: 0px 0px 0px 1px #e7e7e9 inset;
  color: #0d0c22;
  transition-timing-function: ease;
  border: none;
  border-radius: 8px;
  outline: none;
  text-align: center;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  width: ${(props) => (props.iconwidth ? props.iconwidth : "50px")};
  height: ${(props) => (props.iconheight ? props.iconheight : "50px")};
  cursor: pointer;
`;
