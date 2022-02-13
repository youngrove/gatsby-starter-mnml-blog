import React from "react";
import { Copyright, FooterBar, Trademarks, Wrapper } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <FooterBar>
        <Copyright>Younghun Ban © 2022</Copyright>
        <a
          href="https://github.com/youngban/gatsby-starter-mnml-blog"
          aria-label="git_repo"
        >
          <Trademarks>Powered by gatsby-starter-mnml-blog</Trademarks>
        </a>
      </FooterBar>
    </Wrapper>
  );
};

export default Footer;
