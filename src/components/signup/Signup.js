import { React, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import "./style.css";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Signup({ userType = 0 }) {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );

        await createUserDocumentFromAuth(user, { displayName }, userType);
        window.location.reload();
        resetFormFields();
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Can't create user, email already in use!;");
        } else {
          console.log("There was an error creating the user: ", error);
        }
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="signUpBack">
      <div className="specialWhiteContainer">
        <h2 className="m-3">Please Enter Your Information</h2>
        <Form id="signinForm" onSubmit={handleSubmit}>
          <Row className="m-3">
            <Col xs={12} md={6} className="">
              <Form.Control
                className="inputForm"
                type="text"
                placeholder="Display Name"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
              />
            </Col>

            <Col xs={12} md={6}>
              <Form.Control
                className="inputForm"
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
                name="email"
                value={email}
              />
            </Col>
          </Row>

          <Row className="m-3">
            <Col xs={12} md={6}>
              <Form.Control
                className="inputForm"
                type="password"
                placeholder="Password"
                required
                onChange={handleChange}
                name="password"
                value={password}
              />
            </Col>

            <Col xs={12} md={6}>
              <Form.Control
                className="inputForm"
                type="password"
                placeholder="Confirm Password"
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
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
      </div>
    </div>
  );
}
