import React, { ReactNode } from "react";
import { Wrapper } from "./styles";

const Main = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Main;
