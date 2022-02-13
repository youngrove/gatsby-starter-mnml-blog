import styled from "styled-components";

export const Wrapper = styled.main`
  flex: 4 1 0;
  && {
    ${({ theme }) => theme.laptop`
    flex:1;
  `}
  }
`;
