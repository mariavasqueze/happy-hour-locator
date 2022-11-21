import React from "react";
import { Col, Row, Card as CardBS, Button } from "react-bootstrap";
import { Container } from "../common";

const { Img, Body, Text } = CardBS;

export default function Card({ location }) {
  return (
    <Col xs={12} className="cardContainerLocation">
      <CardBS>
        <Container noFluid>
          <Row>
            <Col xs={12} sm={6}>
              <Img src={location.image} />
            </Col>

            <Col xs={12} sm={6}>
              <Body>
                <h4>{location.locationName}</h4>
                <h6>Happy Hour Description</h6>
                <Text>
                  <b>{location.happyHourDescription}</b>
                </Text>
                <Button variant="primary" className="purpleBtn">
                  See Events
                </Button>
              </Body>
            </Col>
          </Row>
        </Container>
      </CardBS>
    </Col>
  );
}
