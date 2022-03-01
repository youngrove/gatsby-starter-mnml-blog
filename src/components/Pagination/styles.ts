import { Link } from "gatsby";
import styled from "styled-components";
import Left from "../../images/arrow-left.svg";
import Right from "../../images/arrow-right.svg";

export const LeftIcon = styled(Left)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const RightIcon = styled(Right)`
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;

export const Page = styled(Link)<{ $isCurrent: boolean }>`
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: 0 6px;
  display: inline-block;
  border-radius: 50%;
  color: ${({ $isCurrent }) => ($isCurrent ? `#fff;` : `#000`)};
  background-color: ${({ $isCurrent }) => ($isCurrent ? `#000;` : `#fff`)};
  ${({ theme }) => theme.mobile`
  width:30px;
  height:30px;
  line-height:30px;
`};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  ${({ theme }) => theme.mobile`
  margin-top:1.15rem;
`}
`;
