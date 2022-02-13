import styled, { css } from "styled-components";
import { Link } from "gatsby";

const largeTag = css`
  font-size: 1.25rem;
  ${({ theme }) => theme.mobile`
  font-size: 1.1rem;
`}
`;

export const Wrapper = styled(Link)<{ $count: number }>`
  ${({ $count }) => css`
    color: #000;
    line-height: 1.7;
    ${$count === 1 && `color:#888`}
    ${$count > 2 && largeTag}
    ${$count > 4 && `${largeTag} font-weight:700`}
  `}
`;
