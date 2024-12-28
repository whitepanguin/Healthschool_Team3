import React from 'react';
import S from './style';
import BasicButton from '../../../../components/button/BasicButton';
import { Link } from 'react-router-dom';

const Profile = ({user}) => {
  return (
    <S.profileWrapper>
      <S.ProfileInfo >
        <S.ProfileInfoHead >이메일</S.ProfileInfoHead>
        <S.profileData >aaaa@gmail.com</S.profileData>
      </S.ProfileInfo>
      <S.ProfileInfo >
        <S.ProfileInfoHead >이름</S.ProfileInfoHead>
        <S.profileData >홍길동</S.profileData>
      </S.ProfileInfo>
      <S.ProfileInfo >
        <S.ProfileInfoHead >닉네임</S.ProfileInfoHead>
        <S.profileData >생년 월일</S.profileData>
      </S.ProfileInfo>
      <S.ProfileInfo >
        <S.ProfileInfoHead >생년월일</S.ProfileInfoHead>
        <S.profileData>aaaa@gmail.com</S.profileData>
      </S.ProfileInfo>
      <S.ProfileInfo >
        <S.ProfileInfoHead >배송지</S.ProfileInfoHead>
        <S.profileData style={{ borderBottom: '1px dashed #ccc', paddingBottom : '10px'}}>서울특별시 땡땡구 땡땡동</S.profileData>
        <S.profileData >서울특별시 땡땡구 땡땡동</S.profileData>
      </S.ProfileInfo>
      <S.ProfileInfo >
        <S.ProfileInfoHead >강사 인증 여부</S.ProfileInfoHead>
        <S.profileData >인증완료(미인증)</S.profileData>
      </S.ProfileInfo>
      <Link to={'/mypage/update'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>회원정보 수정하기</BasicButton>
      </Link>
    </S.profileWrapper>
  );
};

export default Profile;