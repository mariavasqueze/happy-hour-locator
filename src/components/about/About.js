import React from "react";
import { Row, Col } from "react-bootstrap";

import { Container } from "../common";

import "./style.css";

export default function About() {
  return (
    <Container className="bground">
      <Row>
        <Col xs={12}>
          <h2 className="h22">A little about Happy Software Inc.</h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={6}>
          <h3 className="h33">What is the goal of the company?</h3>
          <p className="par">
          Most students want to make the most out of their university days by having a 
          very active social life, but they are always restricted by money. In addition, 
          the city of Vancouver is recognized for having a very high cost of living, but 
          it also has a market where all bars and restaurants have happy hours which 
          include food and drinks at discounted prices. 
          </p>
        </Col>

        <Col xs={12} sm={6}>
          <h3 className="h33">Why happy hours?</h3>
          <p className="par">
          Our main goal is to offer students the option of either planning ahead 
          or checking in real time the happy hours offered in the area, thus, they would 
          for sure save a lot of money. As a result, the Happy Hour Inc. team put their 
          experiences and needs together to offer a viable solution.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={6}>
          <h3 className="h33">How did the company started?</h3>
          <p className="par">
          The company was created as a solution to offer students a way to save 
          money easily and enjoy their college years to the full. The company is made 
          up of a team of four creative programmers, with the goal of creating a win-win 
          situation where bars and restaurants get more customers and students enjoy what 
          the city has to offer while staying on their budget.
          </p>
        </Col>

        <Col xs={12} sm={6}>
          <h3 className="h33">What about the future?</h3>
          <p className="par">
          We aim to extend to the main cities within Canada in a timeframe 
          of 3 years, creating a chain effect between the actors involved (us, our customers, 
          bar/restaurants) that benefits all the actors involved
          </p>
        </Col>
      </Row>
    </Container>
  );
}
