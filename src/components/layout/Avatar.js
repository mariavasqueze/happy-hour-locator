import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { NavDropdown, Image } from "react-bootstrap";

import mainContext from "../../context";

const { Item, Divider } = NavDropdown;

export default function Avatar() {
  const { username, imageUrl, isLogged, logout, login } =
    useContext(mainContext);

  const items = () => {
    if (isLogged) {
      return (
        <>
          <Item>
            <NavLink to="/profile">My Profile</NavLink>
          </Item>
          <Item>
            <NavLink to="/qrcodes">My QR Codes</NavLink>
          </Item>
          <Divider />
          <Item onClick={() => logout()}>Log Out</Item>
        </>
      );
    } else {
      return <Item onClick={() => login()}>Log In</Item>;
    }
  };

  return (
    <NavDropdown
      title={
        <>
          <Image
            alt="avatar"
            src={imageUrl ? imageUrl : "images/avatar.png"}
            roundedCircle
          />

          {username}
        </>
      }
      id="nav-dropdown"
    >
      {items()}
    </NavDropdown>
  );
}
