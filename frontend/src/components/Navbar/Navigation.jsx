import React from "react";
import HeaderP1 from "./HeaderP1";
import HeaderP2 from "./HeaderP2";

import { NavWrapper } from "./styles/Navigation.styled";
import HeaderP3 from "./HeaderP3";
const Navigation = () => {

  return (
    <NavWrapper>
      <HeaderP1 />
      <HeaderP2 />
      <HeaderP3 />
    </NavWrapper>
  );
};

export default Navigation;
