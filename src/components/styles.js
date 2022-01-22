import styled from "styled-components";

export const BoldHeading = styled.h1`
  font-size: ${(props) => (props.fontsize ? props.fontsize : "16px")};
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 0;
  white-space: nowrap;
`;

export const DefaultLink = styled.a`
  color: ${(props) => (props.textcolor ? props.textcolor : "#3d3d4e")};
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: ${(props) => (props.fontsize ? props.fontsize : "14px")};
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  line-height: 20px;
  white-space: nowrap;

  :hover {
    color: ${(props) => (props.textcolor ? props.textcolor : "#3d3d4e")};
  }
`;

export const DefaultText = styled.p`
  color: ${(props) => (props.textcolor ? props.textcolor : "#3d3d4e")};
  word-break: break-word;
  font-weight: 400;
  line-height: 32px;
  font-size: 1.5em;
  margin-top: 5px;
`;

export const DefaultHr = styled.hr`
  width: 100%;
  border: 1px solid #e7e7e9;
`;
