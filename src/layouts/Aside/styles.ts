import styled from "styled-components";

export const TagWrapper = styled.h2`
  margin: 0 0 1.15rem 0;
  ${({ theme }) => theme.mobile`
    margin: 1.15rem 0 1.15rem 0;
  `};
`;

export const Wrapper = styled.aside`
  flex: 1 1 0;
  && {
    ${({ theme }) => theme.laptop`
    flex:1;
  `}
  }
`;
