import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

import { WhiteCenteredContainer } from "../common";
import "./style.css";


export default function Signup() {
  return <WhiteCenteredContainer >
    
    <h2 className="m-3">PLEASE ENTER YOUR INFORMATION</h2>

    <Form>
      <Row className="m-3">

        <Col xs={12} md={6}>
          <Form.Control
            className="inputForm"
            type="text"
            placeholder="First Name"
          />
        </Col>

        <Col xs={12} md={6}>
          <Form.Control
            className="inputForm"
            type="text"
            placeholder="Last Name"
          />
        </Col>

      </Row>

      <Row className="m-3">
        <Col xs={12} md={6}>
          <Form.Control
            className="inputForm"
            type="email"
            placeholder="email@example.com"
          />
        </Col>

        <Col xs={12} md={6}>
          <Form.Control
            className="inputForm"
            type="password"
            placeholder="Password"
          />
        </Col>
      </Row>

      <div id="signinBtns">
          <Button
              id="signupBtn"
              className="purpleBtn"
              variant="primary"
              size="sm"
              type="submit"
          >
            SIGN UP
          </Button>
      </div>

    </Form>




  </WhiteCenteredContainer>

}
