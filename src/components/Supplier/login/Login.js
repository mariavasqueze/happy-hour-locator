import React from "react";
import { NavLink } from "react-router-dom";
import Signin from "../../signin-box/Signin";

import "./style.css";

export default function Login() {
  return (
    <div className="loginBack">
      <div className="specialWhiteContainer">
        <h3 id="signinTitle">Location Sign-in:</h3>
        <Signin userType={1}></Signin>
        <NavLink id="linktoAdmin" to="/faq">
          If your business is NOT registered, please send us a message to set up
          everything for you!
        </NavLink>
      </div>
    </div>
  );
}
