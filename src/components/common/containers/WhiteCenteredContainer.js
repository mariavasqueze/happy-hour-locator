import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export default function WhiteCenteredContainer({
  children,
  span = 8,
  offset = 2,
}) {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={{ span, offset }} className="whiteCenteredContainer">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
