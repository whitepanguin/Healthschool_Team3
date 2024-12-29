import React from 'react';
import S from './style';
import BasicButton from '../../../../components/button/BasicButton';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const UpdatePassword = () => {
  return (
      <S.Form>
        <h1 style={{fontSize : "20px"}}>비밀번호 변경</h1>
        <S.InputGroup>
          <S.Input type="text" id="name" placeholder="현재 비밀번호" required />
          <S.InputNewPassword>
            <S.Input type="text" id="nickname" placeholder="새 비밀번호" required />
            <S.Input type="text" id="nickname" placeholder="새 비밀번호 확인" required />
          </S.InputNewPassword>
        </S.InputGroup>
        <S.ButtonWrapper>
          <BasicButton size={'small'} shape={'small'} variant={'primary'} color={'white'}>수정하기</BasicButton>
          <BasicButton size={'small'} shape={'small'} variant={'sub'} color={'black'}>취소하기</BasicButton> {/* 취소하기 뒤돌아가기 구현 */}
        </S.ButtonWrapper>
      </S.Form>
  );
};

export default UpdatePassword;