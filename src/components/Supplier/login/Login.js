import React from "react";
import { Container } from "react-bootstrap";

import { WhiteCenteredContainer } from "../../common";

import Signin from "../../signin-box/Signin";

export default function Login() {
  return (
    <Container id="wrapper">
      <Signin></Signin>
    </Container>
  );
}
