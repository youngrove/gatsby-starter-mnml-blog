import React from "react";
import { Copyright, FooterBar, Trademarks, Wrapper } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <FooterBar>
        <Copyright>Younghun Ban © 2022</Copyright>
        <Trademarks>Powered by gatsby-starter-mnml-blog</Trademarks>
      </FooterBar>
    </Wrapper>
  );
};

export default Footer;
