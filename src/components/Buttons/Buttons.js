import styled from "styled-components";

export const DefaultButton = styled.button`
  padding: 6px 16px;
  -webkit-transition: color 200ms ease;
  transition: color 200ms ease;
  border: none;
  border-radius: 8px;
  outline: none;
  background: #ea4c89;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  :hover {
    background: #f082ac;
  }
`;

export const SecondaryLightButton = styled.button`
  background: #f3f3f4;
  color: #0d0c22;
  border-radius: 8px;
  box-sizing: border-box;
  height: 40px;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border: none;
  :hover {
    background-color: #e7e7e9;
  }
`;
