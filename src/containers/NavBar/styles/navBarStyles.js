import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

export const NavBarHeader = styled(Navbar.Brand)``;

const NavBarOffCanvasItemClasses = `
    padding-top: 12px;
    padding-bottom: 12px;
    color: #6e6d7a;
    font-size: 18px;
    font-weight: 500;
`;

export const NavBarItems = styled(Nav.Link)`
  padding: 0.5rem 0.5rem;
  color: #6e6d7a;
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: 20px;
  font-size: 1em;
  padding-left: ${(props) => `${props.paddingleft}px` || 8};
  padding-right: ${(props) => `${props.paddingright}px` || 8};
  :hover {
    color: black;
  }
  ${(props) => (props.isoffcanvas == "true" ? NavBarOffCanvasItemClasses : "")}
`;

export const NavBarSearch = styled.input.attrs({
  type: "text",
  placeholder: "Search",
})`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 10px 16px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  appearance: none;
  border: none;
`;
