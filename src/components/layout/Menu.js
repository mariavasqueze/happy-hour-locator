import React from "react";

import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const { Collapse, Toggle } = Navbar;

export default function Menu({ menu }) {
  return (
    <>
      <Toggle aria-controls="menu" />

      <Collapse className="justify-content-end" id="menu">
        {menu.map((link) => (
          <Nav>
            <NavLink key={link.text} to={link.route}>
              {link.text}
            </NavLink>
          </Nav>
        ))}
      </Collapse>
    </>
  );
}
