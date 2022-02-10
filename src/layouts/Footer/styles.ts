import styled from "styled-components";

export const Copyright = styled.span`
  font-size: 12px;
`;

export const Trademarks = styled.span`
  font-size: 12px;
  color: #9f9f9f;
`;

export const FooterBar = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  max-width: 1160px;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.laptop`
    flex-direction:column;
  `}
`;

export const Wrapper = styled.footer`
  display: flex;
  color: #fff;
  background-color: #202020;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  padding: 35px 0 60px 0;
`;
