import React from "react";
import { Outlet } from "react-router-dom";
import S from "./style";
import Logo from "./_component/Logo/Logo";
import SearchBar from "./_component/SearchBar/SearchBar";
import UserStatus from "./_component/UserStatus/UserStatus";
import NavBar from "./_component/NavBar/NavBar";

const Layout = () => {
  return (
    <S.BackGround>
      <S.Header> 
        <Logo />
        <SearchBar />
        <UserStatus />
      </S.Header>

      <S.Wrapper>
        <S.Nav>
          <NavBar/>
        </S.Nav>

        <S.Main> 
          <Outlet/>  
        </S.Main>
      </S.Wrapper>

      <S.Footer> 푸터 </S.Footer>
    </S.BackGround>
  );
};

export default Layout;
