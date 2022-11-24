import React from "react";

import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const { Collapse, Toggle } = Navbar;

const menu = [
  { route: "/", text: "Home" },
  { route: "/locations", text: "Locations" },
  { route: "/about", text: "About Us" },
  { route: "/faq", text: "FAQ" },
  // { route: "/signup", text: "Sign-Up" },
];

export default function Menu() {
  return (
    <>
      <Toggle aria-controls="menu" />

      <Collapse className="justify-content-end" id="menu">
        {menu.map((link) => (
          <Nav key={link.text}>
            <NavLink to={link.route}>{link.text}</NavLink>
          </Nav>
        ))}
      </Collapse>
    </>
  );
}
