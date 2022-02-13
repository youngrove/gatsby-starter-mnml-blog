import React from "react";
import { BlogName, GitHubIcon, NavBar, Wrapper } from "./styles";

interface HeaderProps {
  title?: string;
  gitUrl?: string;
}
const Header = ({ title, gitUrl }: HeaderProps) => {
  return (
    <Wrapper>
      <NavBar>
        <BlogName href="/">{title}</BlogName>
        <a href={gitUrl} aria-label="git_profile">
          <GitHubIcon />
        </a>
      </NavBar>
    </Wrapper>
  );
};

export default Header;
