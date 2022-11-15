import React from "react";

import { Container, Navbar } from "react-bootstrap";

import Brand from "./Brand";
import Avatar from "./Avatar";
import Menu from "./Menu";

import "./style.css";

export default function Layout({ children }) {
  return (
    <Container fluid id="mainContainer">
      <Navbar id="navBar" expand="lg">
        <Container id="menuContainer">
          <Brand />
          <Menu />
          <Avatar />
        </Container>
      </Navbar>

      <Container fluid id="contentContainer">
        {children}
      </Container>
    </Container>
  );
}
