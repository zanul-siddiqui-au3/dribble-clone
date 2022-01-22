import styled from "styled-components";
export const DefaultAvatar = styled.img.attrs((props) => ({
  src: props.imgSrc,
  alt: props.imgAlt,
}))`
  width: ${(props) => (props.imgwidth ? props.imgwidth : "48px")};
  height: ${(props) => (props.imgheight ? props.imgheight : "48px")};
  border-radius: 50%;
`;
