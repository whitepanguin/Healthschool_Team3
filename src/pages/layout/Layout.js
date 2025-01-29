
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useSearchParams } from "react-router-dom";

import S from "./style";
import Logo from "./_component/Logo/Logo";
import SearchBar from "./_component/SearchBar/SearchBar";
import UserStatus from "./_component/UserStatus/UserStatus";
import NavBar from "./_component/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserStatus } from "../../modules/user";

const Layout = () => {

  const location = useLocation();  // 현재 경로를 가져옴

  // 숨기고 싶은 경로 목록을 배열로 설정
  const hiddenPaths = ['/myVideoManage']; // 여러 경로 추가 가능

  // 현재 경로가 hiddenPaths 배열에 포함되어 있으면 NavBar를 숨기도록 설정
  const isNavVisible = !hiddenPaths.includes(location.pathname);

  // 최초 사용자가 토큰을 가지고 있는지 확인하고, 토큰 요청을 보낸다.
  // 토큰 요청시 만료되었다면 삭제하고, 만료가 되지 않았다면 자동으로 로그인 시킨다.
  const { currentUser, isLogin } = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const jwtToken = localStorage.getItem("jwtToken") || searchParams.get("jwtToken");

  const navigate = useNavigate()

  useEffect(() => {

    if(jwtToken){
      localStorage.setItem("jwtToken", jwtToken)
      navigate("/")
    }
    
    if(jwtToken){
      const isAuthenticate = async () => {
        const response = await fetch("http://localhost:8000/auth/jwt", {
          method : "POST",
          headers : {
            "Authorization" : `Bearer ${jwtToken}`
          }
        })
        const getAuthenticate = await response.json();
        return getAuthenticate;
      }

      isAuthenticate()
        .then((res) => {
          console.log(res)
          // 3) 화면에 뿌릴 수 있도록 유저정보를 파싱(redux)
          dispatch(setUser(res.user)) // currentUser
          dispatch(setUserStatus(true)) // isLogin
        })
        .catch(console.error)

    }else {
      dispatch(setUser({})) // currentUser
      dispatch(setUserStatus(false)) // isLogin
      localStorage.clear()
    }
      
  }, [jwtToken])



  return (
    <S.BackGround>
      <S.Header> 
        <Logo />
        <SearchBar />
        <UserStatus/>
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