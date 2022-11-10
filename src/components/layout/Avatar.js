import React from "react";

import { NavDropdown, Image } from "react-bootstrap";

const { Item, Divider } = NavDropdown;

export default function Avatar() {
  return (
    <NavDropdown
      title={
        <Image
          alt="avatar"
          src="images/avatar.png"
          width="60"
          height="60"
          roundedCircle
        />
      }
      id="nav-dropdown"
    >
      <Item href="#action/3.1">Action</Item>
      <Item href="#action/3.2">Another action</Item>
      <Item href="#action/3.3">Something</Item>
      <Divider />
      <Item href="#action/3.4">Separated link</Item>
    </NavDropdown>
  );
}
