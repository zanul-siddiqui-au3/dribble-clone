import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DescriptionBody from "./DescriptionBody/DescriptionBody";
import DescriptionCarouselSelector from "./DescriptionCarouselSelector/DescriptionCarouselSelector";
import DescriptionCarrousel from "./DescriptionCarrousel/DescriptionCarrousel";
import DescriptionHeader from "./DescriptionHeader/DescriptionHeader";
import DescriptionSideBar from "./DescriptionSideBar/DescriptionSideBar";

function DescriptionContainer() {
  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);

  const handleSetActiveIndex = (i) => {
    setCarouselActiveIndex(i);
  };

  return (
    <Container fluid className="p-5">
      <Row className="w-100 ">
        <Col
          sm={12}
          md={12}
          xs={12}
          lg={6}
          xl={6}
          className="offset-lg-3 offset-xl-3"
        >
          <DescriptionHeader />
          <DescriptionCarrousel
            activeIndex={carouselActiveIndex}
          ></DescriptionCarrousel>
        </Col>
        <Col
          sm={12}
          md={12}
          xs={12}
          lg={1}
          xl={1}
          className="d-flex justify-content-xl-end justify-content-lg-end mt-5 offset-lg-2 offset-xl-2"
        >
          <DescriptionSideBar></DescriptionSideBar>
        </Col>
        <Col
          sm={12}
          md={12}
          xs={12}
          lg={6}
          xl={6}
          className="offset-lg-3 offset-xl-3"
        >
          <DescriptionCarouselSelector
            activeIndexHandler={handleSetActiveIndex}
          />
          <DescriptionBody></DescriptionBody>
        </Col>
      </Row>
    </Container>
  );
}

export default DescriptionContainer;
