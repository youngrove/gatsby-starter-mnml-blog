import styled from "styled-components";
import Github from "../../../content/assets/git.svg";

export const GitHubIcon = styled(Github)`
  width: 30px;
  height: 30px;
  fill: #fff;
`;

export const BlogName = styled.a`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  flex: none;
`;

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  max-width: 1160px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: #202020;
  justify-content: center;
  width: 100%;
`;
