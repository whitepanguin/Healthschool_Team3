import React, { useEffect, useState } from 'react';
import S from './style';
import BasicButton from '../../../../components/button/BasicButton';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);

  // ✅ 최신 정보를 저장할 상태
  const [userInfo, setUserInfo] = useState(currentUser);

  // 📌 생년월일 포맷 함수 (YYYYMMDD → YYYY.MM.DD)
  const formatBirthDate = (birthDate) => {
    if (!birthDate) return "생년월일을 등록 해주세요";
    const birthStr = birthDate.toString();
    return `${birthStr.slice(0, 4)}.${birthStr.slice(4, 6)}.${birthStr.slice(6, 8)}`;
  };

  // ✅ 업데이트된 정보가 있으면 반영
  useEffect(() => {
    if (location.state?.updatedUser) {
      setUserInfo(location.state.updatedUser);  // 최신 정보로 업데이트
      console.log("최신 사용자 정보:", location.state.updatedUser);
    }
  }, [location]);

  return (
    <S.profileWrapper>
      <S.ProfileInfo>
        <S.ProfileInfoHead>이메일</S.ProfileInfoHead>
        <S.profileData>{userInfo.email}</S.profileData>
      </S.ProfileInfo>
      <S.ProfileInfo>
        <S.ProfileInfoHead>이름</S.ProfileInfoHead>
        <S.profileData>{userInfo.name}</S.profileData>
      </S.ProfileInfo>
      <S.ProfileInfo>
        <S.ProfileInfoHead>닉네임</S.ProfileInfoHead>
        <S.profileData>{userInfo.nickName || "닉네임을 등록 해주세요"}</S.profileData>
      </S.ProfileInfo>
      <S.ProfileInfo>
        <S.ProfileInfoHead>생년월일</S.ProfileInfoHead>
        <S.profileData>{formatBirthDate(userInfo.birthDate) || "생년월일을 등록 해주세요"}</S.profileData>
      </S.ProfileInfo>
      <S.ProfileInfo>
        <S.ProfileInfoHead>배송지</S.ProfileInfoHead>
        <S.profileData>{userInfo.address || "주소를 등록 해주세요"}</S.profileData>
      </S.ProfileInfo>
      <S.ProfileInfo>
        <S.ProfileInfoHead>강사 인증 여부</S.ProfileInfoHead>
        <S.profileData>인증완료(미인증)</S.profileData>
      </S.ProfileInfo>
      <Link to={'/mypage/update'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>
          회원정보 수정하기
        </BasicButton>
      </Link>
    </S.profileWrapper>
  );
};

export default Profile;
