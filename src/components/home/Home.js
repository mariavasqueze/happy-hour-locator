import React from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { Container } from "../common";
import Signin from "../signin-box/Signin";
import Image from "react-bootstrap/Image";

import homePageImg from "../../images/beerWave.png";

import "./style.css";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col id="leftColumn">
          <div id="divContainer">
            <h1 className="mainTitle">Happy hour locator</h1>
            <h2 className="second">
              Find the best discounts on foods and drinks in Vancouver
            </h2>
            <h3 className="third">New here?</h3>
            <NavLink id="specialBtn" to="/signup">
              SIGN UP
            </NavLink>
          </div>
          <Image className="homePageImg" rounded src={homePageImg}></Image>
        </Col>
        <Col id="rightColumn">
          <Signin></Signin>
        </Col>
      </Row>
    </Container>
  );
}
