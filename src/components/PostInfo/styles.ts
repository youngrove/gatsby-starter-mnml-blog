import styled from "styled-components";

export const PostTitle = styled.a`
  color: #3a3a3a;
`;

export const PostDate = styled.div`
  color: #9f9f9f;
  margin-top: 16px;
  ${({ theme }) => theme.laptop`
      margin-top:1rem;
  `}
`;

export const TitleWrapper = styled.h2`
  margin: 0;
`;
