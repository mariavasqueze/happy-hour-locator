import React, { useContext } from "react";

import { NavDropdown, Image } from "react-bootstrap";

import mainContext from "../../context";

const { Item, Divider } = NavDropdown;

export default function Avatar() {
  const { username, urlImage, isLogged, logout, login } =
    useContext(mainContext);

  const items = () => {
    if (isLogged) {
      return (
        <>
          <Item href="/profile">My Profile</Item>
          <Item href="/qrcodes">My QR Codes</Item>
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
            src={urlImage ? urlImage : "images/avatar.png"}
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
