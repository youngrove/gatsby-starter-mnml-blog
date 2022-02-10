import React from "react";
import { toUrl } from "../../utils/converter";
import { Wrapper } from "./styles";

const Tag = ({ children }: any) => {
  return <Wrapper to={`/tags/${toUrl(children)}`}>#{children} </Wrapper>;
};

export default Tag;
