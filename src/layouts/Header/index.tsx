import React from "react";
import { BlogName, GitHubIcon, NavBar, Wrapper } from "./styles";

const Header = ({ title }: { title?: string }) => {
  return (
    <Wrapper>
      <NavBar>
        <BlogName href="/">{title}</BlogName>
        <a href="/">
          <GitHubIcon />
        </a>
      </NavBar>
    </Wrapper>
  );
};

export default Header;
