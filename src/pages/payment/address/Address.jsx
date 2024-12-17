import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import BasicButton from '../../../components/button/BasicButton';
import BasicCheckBox from '../../../components/checkbox/BasicCheckBox';

const Address = () => {
  return (
  <div>
    <S.Container>
      <S.Header>회원 정보/ 주소</S.Header>
      <S.Section>
        <S.AddressBox>
          <S.Title>배송지</S.Title>
          <S.AddressInfo>
            <S.Name>이순신(닉네임)</S.Name>
            <S.Phone>010-1234-5678</S.Phone>
            <S.Address>서울 종로구 세종대로 172</S.Address>
          </S.AddressInfo>
          <S.EditButton>변경</S.EditButton>
        </S.AddressBox>
        <S.MemoBox>
          <S.CheckOn>
            <BasicCheckBox/>
            <S.MemoText>배송메모 개별 입력</S.MemoText>
          </S.CheckOn>
          <S.Select>
            <option>배송메모를 선택해주세요</option>
          </S.Select>
          <S.ReuseBox>
            <BasicCheckBox/>
            <S.ReuseText>다음에도 사용할게요</S.ReuseText>
          </S.ReuseBox>
        </S.MemoBox>
      </S.Section>

      <S.Section>
        <S.OrderHeader>주문상품</S.OrderHeader>
        <S.DateText>12.26(목)일</S.DateText>
        <S.FeeText>배송비 2000원</S.FeeText>
        <S.OrderBox>
          <S.Product>
            <S.ProductTitle>[근력운동] 전달력과 효과적인 근력운동으로 강한 몸 만들어요!</S.ProductTitle>
            <S.Price>25,000원</S.Price>
          </S.Product>
          <S.Additional>
            <S.ProductTitle>[근력운동] + 6개월, 운동 매트</S.ProductTitle>
            <S.Price>10,000원</S.Price>
          </S.Additional>
        </S.OrderBox>
      </S.Section>

      <S.Section>
        <S.PaymentTitle>결제방식</S.PaymentTitle>
        <S.PaymentOptions>
          <S.RadioButton type="radio" name="payment" /> 계좌 간편결제
          <S.RadioButton type="radio" name="payment" defaultChecked /> 카드 결제
        </S.PaymentOptions>
      </S.Section>

      <S.CardBox>
        <S.CardText>카드 간편 결제</S.CardText>
        <S.TotalAmount>35,000원</S.TotalAmount>
      </S.CardBox>
    </S.Container>
    <Link to={'/payment/transaction'}>
      <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>다 음</BasicButton>
    </Link>
  </div>
  );
};

export default Address;