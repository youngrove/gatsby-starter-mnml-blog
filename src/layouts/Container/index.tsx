import React, { ReactNode } from "react";
import Aside from "../Aside";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import { ContentWrapper, GlobalStyle, Section, Wrapper } from "./styles";
import { ThemeProvider } from "styled-components";
import media from "../../styles/media";

interface ContainerProps {
  title?: string;
  gitUrl?: string;
  children?: ReactNode;
}
const Container = ({ title, gitUrl, children }: ContainerProps) => {
  return (
    <ThemeProvider theme={media}>
      <Wrapper>
        <GlobalStyle theme={media} />
        <Header title={title} gitUrl={gitUrl}></Header>
        <ContentWrapper>
          <Section>
            <Main>{children}</Main>
            <Aside></Aside>
          </Section>
        </ContentWrapper>
        <Footer></Footer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Container;
