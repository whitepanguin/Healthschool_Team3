import styled from "styled-components";

const S = {};

S.BackGround = styled.div`
  background-color: #1a1b1e;
`;

S.Header = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
`;

S.Wrapper = styled.div`
  display: flex;
`;

S.Main = styled.main`
  width: 1669px;
`;

S.Nav = styled.nav`
  width: 259px;
  height: 1580px;
  border: 1px solid #fff;
`;

S.Footer = styled.footer`
  height: 292px;
  background-color: #f2f2f2;
`;

export default S;
