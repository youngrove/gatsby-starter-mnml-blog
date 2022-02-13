import styled from "styled-components";

export const PostTitle = styled.a`
  text-decoration: none;
  color: #3a3a3a;
`;

export const PostExcerpt = styled.p`
  margin: 20px 20px 28px 0;
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid #eee;
  &:first-child {
    padding: 0 0 50px 0;
  }
  &:not(:first-child) {
    padding: 50px 0 50px 0;
  }
  &&& {
    ${({ theme }) => theme.laptop`
    &:first-child {
      padding: 0 0 30px 0;
    }
    &:not(:first-child) {
      padding: 30px 0 30px 0;
    }
  `}
  }
`;
