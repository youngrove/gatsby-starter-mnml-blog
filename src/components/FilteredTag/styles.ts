import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { TAG_SMALL, TAG_MEDIUM, TAG_LARGE } from "../../config";

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
    ${$count === TAG_SMALL && `color:#888`}
    ${$count >= TAG_MEDIUM && largeTag}
    ${$count > TAG_LARGE && `${largeTag} font-weight:700`}
  `}
`;
