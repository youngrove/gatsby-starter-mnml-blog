import styled from "styled-components";

export const Wrapper = styled.main`
  flex-grow: 7;
  && {
    ${({ theme }) => theme.laptop`
    flex:1;
  `}
  }
`;
