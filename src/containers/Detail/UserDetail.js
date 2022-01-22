import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DefaultAvatar } from "../../components/Avatar/Avatar";
import { DefaultButton } from "../../components/Buttons/Buttons";
import {
  BoldHeading,
  DefaultHr,
  DefaultLink,
  DefaultText,
} from "../../components/styles";

function UserDetail() {
  return (
    <Container className="mb-5">
      <Row className="d-flex w-100 align-items-center">
        <Col lg={5} xl={5} sm={5} xs={5} md={5}>
          <DefaultHr></DefaultHr>
        </Col>
        <Col
          lg={2}
          xl={2}
          sm={2}
          xs={2}
          md={2}
          className="d-flex justify-content-center"
        >
          <DefaultAvatar
            imgSrc="https://cdn.dribbble.com/users/5536359/avatars/small/98f58e195bee567d87746a3a0c99d76f.png?1640801645"
            imgheight="96"
            imgwidth="96"
          ></DefaultAvatar>
        </Col>
        <Col lg={5} xl={5} sm={5} xs={5} md={5}>
          <DefaultHr></DefaultHr>
        </Col>
      </Row>
      <Row className="d-flex w-100 mt-3">
        <Col
          xl={2}
          lg={2}
          sm={4}
          xs={4}
          md={4}
          className=" d-flex flex-column align-items-center offset-lg-5 offset-xl-5  offset-4 "
        >
          <BoldHeading fontsize="22px">Eren ✦</BoldHeading>
          <DefaultLink className="mt-3">
            Let's create something amazing together ✦
          </DefaultLink>
          <DefaultButton className="mt-3">Hire Me</DefaultButton>
        </Col>
      </Row>
    </Container>
  );
}

export default UserDetail;
