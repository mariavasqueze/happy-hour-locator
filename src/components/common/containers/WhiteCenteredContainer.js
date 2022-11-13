import React from "react";

import { Row, Col } from "react-bootstrap";

import { Container } from "../";

export default function WhiteCenteredContainer({
  children,
  span = 8,
  offset = 2,
}) {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={{ span, offset }} className="whiteCenteredContainer">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
