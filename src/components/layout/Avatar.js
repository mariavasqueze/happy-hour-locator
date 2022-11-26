import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { NavDropdown, Image } from "react-bootstrap";

import { UserContext } from "../../context";

const { Item, Divider } = NavDropdown;

export default function Avatar() {
  const { currentUser, signOutUser } = useContext(UserContext);

  const items = () => {
    return (
      <>
        <NavLink className="dropdown-item" to="/profile">
          My Profile
        </NavLink>
        <NavLink className="dropdown-item" to="/qrcodes">
          My QR Codes
        </NavLink>
        <Divider />
        <Item onClick={signOutUser}>Log Out</Item>
      </>
    );
  };

  return currentUser ? (
    <NavDropdown
      title={
        <>
          <Image
            alt="avatar"
            src={
              currentUser
                ? "https://img.freepik.com/premium-vector/cool-nerdy-pizza-cartoon-avatar-illustration_448933-122.jpg?w=1060"
                : "images/avatar.png"
            }
            roundedCircle
          />
          {currentUser.displayName}
        </>
      }
      id="nav-dropdown"
    >
      {items()}
    </NavDropdown>
  ) : null;
}
