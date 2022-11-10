import React from "react";

import { Navbar, Image } from "react-bootstrap";

const { Brand: NavBarBrand, Text } = Navbar;

export default function Brand() {
  return (
    <NavBarBrand>
      <Image alt="logo" src="/logo30.png" width="30" height="30" />
      <Text>Happy Hour Locator</Text>
    </NavBarBrand>
  );
}
