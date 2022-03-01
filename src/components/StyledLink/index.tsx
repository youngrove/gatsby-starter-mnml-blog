import React from "react";
import { Wrapper } from "./styles";

const StyledLink = ({ to, children }: { to: string; children: any }) => {
  return <Wrapper to={to}>{children}</Wrapper>;
};

export default StyledLink;
