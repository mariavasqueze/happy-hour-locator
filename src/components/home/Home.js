import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { WhiteCenteredContainer } from "../common";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={5}>
          Happy hour locator
        </Col>
        <Col xs={12} sm={7}>
          <WhiteCenteredContainer>
            Sign-in to see locations
          </WhiteCenteredContainer>
        </Col>
      </Row>
    </Container>
  );
}
