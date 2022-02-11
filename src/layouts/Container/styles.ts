import styled, { createGlobalStyle } from "styled-components";

export const ArchiveWrapper = styled.h2`
  margin: 0 0 0 0;
  ${({ theme }) => theme.mobile`
    margin: 1.25rem 0 0 0;
  `};
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  max-width: 1160px;
  margin-top: 70px;
  ${({ theme }) => theme.laptop`
    flex-direction:column;
    margin-top:0px;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 20px 20px 0 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
  }
  pre {
    overflow:scroll;
  }
  @media screen and (max-width:768px) {
    html { 
    font-size:14px;
    }
  }
`;
