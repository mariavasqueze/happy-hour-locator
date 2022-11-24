import React from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { Container } from "../common";
import Signin from "../signin-box/Signin";
import Image from "react-bootstrap/Image";

import { WhiteCenteredContainer } from "../common";
import homePageImg from "../../images/beerWave.png";

import "./style.css";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} id="leftColumn" className="p-0">
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
        <Col xs={12} sm={6} id="rightColumn" className="text-center">
        <WhiteCenteredContainer>
        <h3 id="signinTitle">Sign-in here:</h3>
        <Signin></Signin>
        <NavLink id="linktoAdmin" to="/admin/login">
            Do you represent a Location? Go to Site!
          </NavLink>
        </WhiteCenteredContainer>
        </Col>
      </Row>
    </Container>
  );
}
