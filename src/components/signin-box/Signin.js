import { React, useState } from "react";
import { Button, Form } from "react-bootstrap";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./style.css";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function Signin({ userType = 0, showAdminPanel }) {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userType === 2) {
      if (email === "admin@happyhour.com" && password === "123456") {
        showAdminPanel();
      } else {
        alert("Credentials do not match!");
      }

      return;
    }

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email!");
          break;
        case "auth/user-not-found":
          alert("There's no user associated with this email, please sign up!");
          break;
        default:
          console.log("There was an error logging in: ", error);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <Form id="signinForm" onSubmit={handleSubmit}>
        <Form.Control
          className="inputForm"
          type="text"
          placeholder="Enter Email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Form.Control
          className="inputForm"
          type="password"
          placeholder="Enter Password"
          onChange={handleChange}
          name="password"
          value={password}
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

          {userType === 0 && (
            <Button
              onClick={signInWithGoogle}
              id="googleBtn"
              className="purpleBtn"
              variant="primary"
              size="lg"
              type="button"
            >
              Google Sign In
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}
