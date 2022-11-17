import React from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { WhiteCenteredContainer } from "../../common";

import "./style.css";

export default function Login() {
  return (
    <div className="loginBack">
      <div className="specialWhiteContainer">
        <h3 id="signinTitle">Please enter the location's information:</h3>
        <Form id="adminLoginForm">
          <Form.Control
            className="inputForm"
            type="text"
            placeholder="Username"
          />
          <Form.Control
            className="inputForm"
            type="password"
            placeholder="Password"
          />

          <div id="signinBtns">
            <Button
              className="purpleBtn"
              variant="primary"
              size="lg"
              type="submit"
            >
              Sign In
            </Button>
            <NavLink id="linktoAdmin" to="/faq">
              If your business is NOT registered, please send us a message to
              set up everything for you!
            </NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
}
