import React from "react";

import GlobalStyle from "./global"
import { Container, Row, Col } from "./global/src/grid"

export default () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h3>Grid Styled Componentes</h3>
        <Row>
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>  
        </Row>
        <h3>Row: justify-content: flex-start</h3>
        <Row flexStart>
          <Col mobile={12} tablet={1} desktop={2}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>   
        </Row>
        <h3>Row: justify-content: flex-end</h3>
        <Row flexEnd>
          <Col mobile={12} tablet={1} desktop={2}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>   
        </Row>
        <h3>Row: justify-content: center</h3>
        <Row center>
          <Col mobile={12} tablet={1} desktop={2}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>   
        </Row>
        <h3>Row: justify-content: space-between</h3>
        <Row spaceBetween>
          <Col mobile={12} tablet={1} desktop={2}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>   
        </Row>
        <h3>Row: justify-content: space-around</h3>
        <Row spaceAround>
          <Col mobile={12} tablet={1} desktop={2}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>   
        </Row>
        <h3>Row: justify-content: space-evenly</h3>
        <Row spaceEvenly>
          <Col mobile={12} tablet={1} desktop={2}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>  
          <Col mobile={12} tablet={1} desktop={3}>
            M: 12 T: 12 D: 3
          </Col>   
        </Row>
        <br/>
      </Container>
    </>
  );
};
