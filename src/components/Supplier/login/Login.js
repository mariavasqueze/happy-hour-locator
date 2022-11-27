import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Signin from "../../signin-box/Signin";
import Signup from "../../signup/Signup";
import { UserContext } from "../../../context";
import Dashboard from "../dashboard/Dashboard";

import "./style.css";

export default function Login({ userType = 1 }) {
  const { currentUserAdditionals } = useContext(UserContext);
  const [showingAdminPanel, setShowingAdminPanel] = useState(false);

  const showAdminPanel = () => setShowingAdminPanel(!showingAdminPanel);

  if (currentUserAdditionals && currentUserAdditionals.data.userType === 1) {
    return <Dashboard />;
  }

  if (showingAdminPanel) {
    return <Signup userType={1} />;
  }

  return (
    <div className="loginBack">
      <div className="specialWhiteContainer">
        <h3 id="signinTitle">Location Sign-in:</h3>
        <Signin userType={userType} showAdminPanel={showAdminPanel}></Signin>
        <NavLink id="linktoAdmin" to="/faq">
          If your business is NOT registered, please send us a message to set up
          everything for you!
        </NavLink>
      </div>
    </div>
  );
}
