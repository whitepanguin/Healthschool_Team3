import React from 'react';
import S from './style';
import BasicButton from '../../../../components/button/BasicButton';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const Update = () => {
  return (
      <S.Form>
        {/* <!-- 이메일 --> */}
        <S.FormGroup>
          <S.InfoHead for="email">이메일</S.InfoHead>
          <div>
            <S.Input type="text" id="email-username" class="email-username" placeholder="이메일 아이디" required />
            <span class="at-symbol">@</span>
            <S.Input type="text" id="email-domain" class="email-domain" placeholder="도메인 (예: gmail.com)" required />
          </div>
        </S.FormGroup>

        <S.FormGroup>
          <S.InfoHead>이름</S.InfoHead>
          <S.Input type="text" id="name" placeholder="이름을 입력하세요" required />
        </S.FormGroup>
        <S.FormGroup>
          <S.InfoHead>닉네임</S.InfoHead>
          <div>
            <S.Input type="text" id="nickname" placeholder="닉네임을 입력하세요" required />
            <BasicButton style ={{height : '20px'}} size={'small'} shape={'small'} variant={'sub'} color={'gray900'}>중복 확인</BasicButton>
          </div>
        </S.FormGroup>

        <S.FormGroup style={{height : '110px'}}>
          <S.InfoHead>배송지</S.InfoHead>
          <div class="address-group">
            <S.Input type="text" id="city" placeholder="시/도" />
            <S.Input type="text" id="district" placeholder="구/군" />
            <S.Input type="text" id="neighborhood" placeholder="동/읍/면" />
          </div>
          <S.InputAddrDetail type="text" id="address-detail" placeholder="상세 주소" />
        </S.FormGroup>

        <S.FormGroup>
          <S.InfoHead>생년월일</S.InfoHead>
          <div class="dob-group">
            <S.Input type="text" id="year" placeholder="년 (예: 1990)" />
            <S.Input type="text" id="month" placeholder="월 (예: 01)" />
            <S.Input type="text" id="day" placeholder="일 (예: 01)" />
          </div>
        </S.FormGroup>

        <S.ButtonWrapper>
        <BasicButton size={'small'} shape={'small'} variant={'sub'} color={'black'}>취소하기</BasicButton> {/* 취소하기 뒤돌아가기 구현 */}
        <BasicButton size={'small'} shape={'small'} variant={'primary'} color={'white'}>수정하기</BasicButton>
        </S.ButtonWrapper>
      </S.Form>
  );
};

export default Update;