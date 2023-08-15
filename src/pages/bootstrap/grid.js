import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const BootStrapGripDiv = styled.div`
  text-align: center;
  //border: 1px solid gray;

  .row {
    gap: 10px;
    margin-bottom: 20px;
  }

  .row div {
    border: 1px solid gray;
    background: #f1efef;
  }
`;

const BootStrapGrip = () => {
  return (
    <BootStrapGripDiv>
      <Container fluid={"sm"}>
        <h1>Hello Grid</h1>
        <Row>
          <Col lg={3}>.col 1/2</Col>
          <Col lg>.col 2/2</Col>
        </Row>
        <Row>
          <Col>.col 1/2</Col>
          <Col sm={6}>.col 2/2</Col>
          <Col>.col 3/2</Col>
        </Row>
      </Container>
    </BootStrapGripDiv>
  );
};

export default BootStrapGrip;
