import React from "react";

import { Container, Navbar } from "react-bootstrap";

import Brand from "./Brand";
import Avatar from "./Avatar";
import Menu from "./Menu";

export default function Layout({ children, menu }) {
  return (
    <Container fluid id="mainContainer">
      <Navbar id="navBar" expand="lg">
        <Container id="menuContainer">
          <Brand />
          <Menu menu={menu} />
          <Avatar />
        </Container>
      </Navbar>

      <Container fluid id="contentContainer">
        {children}
      </Container>
    </Container>
  );
}
