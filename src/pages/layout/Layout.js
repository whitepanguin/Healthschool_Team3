import React from "react";
import { Outlet, useLocation } from "react-router-dom";  // useLocation 훅을 추가
import S from "./style";
import Logo from "./_component/Logo/Logo";
import SearchBar from "./_component/SearchBar/SearchBar";
import UserStatus from "./_component/UserStatus/UserStatus";
import NavBar from "./_component/NavBar/NavBar";

const Layout = () => {
  const location = useLocation();  // 현재 경로를 가져옴

  // 숨기고 싶은 경로 목록을 배열로 설정
  const hiddenPaths = ['/myVideoManage']; // 여러 경로 추가 가능

  // 현재 경로가 hiddenPaths 배열에 포함되어 있으면 NavBar를 숨기도록 설정
  const isNavVisible = !hiddenPaths.includes(location.pathname);

  return (
    <S.BackGround>
      <S.Header> 
        <Logo />
        <SearchBar />
        <UserStatus />
      </S.Header>

      <S.Wrapper>
        {isNavVisible && (  // 조건부 렌더링: NavBar를 특정 경로에서만 보이도록 설정
          <S.Nav>
            <NavBar />
          </S.Nav>
        )}

        <S.Main> 
          <Outlet />  {/* 자식 라우트들이 이곳에 렌더링됩니다 */}
        </S.Main>
      </S.Wrapper>

      <S.Footer> 푸터 </S.Footer>
    </S.BackGround>
  );
};

export default Layout;
