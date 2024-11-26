import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import S from "./style";
import Logo from "./_component/Logo/Logo";
import SearchBar from "./_component/SearchBar/SearchBar";
import UserStatus from "./_component/UserStatus/UserStatus";

const Layout = () => {
  return (
    <S.BackGround>
      <S.Header> 
        <Logo />
        <SearchBar />
        <UserStatus />
      </S.Header>

      <S.Wrapper>
        <S.Nav> 네브 </S.Nav>

        <S.Main> 
          <Outlet/>  
        </S.Main>
      </S.Wrapper>

      <S.Footer> 푸터 </S.Footer>
    </S.BackGround>
  );
};

export default Layout;
