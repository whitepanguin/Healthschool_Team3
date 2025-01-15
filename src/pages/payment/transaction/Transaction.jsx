import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const Transaction = () => {
  return (
    <S.Container>
      {/* 이미지 및 설명 */}
      <S.ProgressWrapper>
        <Link to={"/payment/failed"}><S.ProgressStep>장바구니</S.ProgressStep></Link>
        <S.Arrow>{">"}</S.Arrow>
        <Link to={"/payment/failed"}><S.ProgressStep>주문/결제</S.ProgressStep></Link>
        <S.Arrow>{">"}</S.Arrow>
        <Link to={"/payment/transaction"}><S.ProgressStep active>완료</S.ProgressStep></Link>
      </S.ProgressWrapper>
      <S.ImageBox>
        <S.Image src="https://via.placeholder.com/600x300" alt="운동 이미지" />
        <S.TextBox>
          <S.SmallText>슬기로운 운동생활 | 2024.12.17</S.SmallText>
          <S.Title>[근력운동] 간단하고 효과적인 근력운동으로 원하는 몸을 만들어봐요!</S.Title>
          <S.Description>
            과학적 접근과 간단한 근력운동으로 누구나 원하는...
          </S.Description>
        </S.TextBox>
      </S.ImageBox>

      {/* 주문 상세 */}
      <S.OrderSection>
        <S.OrderRow>
          <S.Label>주문</S.Label>
          <S.Content>
            [근력운동] 간단하고 효과적인 근력운동으로 원하는 몸을 만들어봐요!
          </S.Content>
          <S.Price>25,000원</S.Price>
        </S.OrderRow>
        <S.OrderRow>
          <S.Label>추가</S.Label>
          <S.Content>[근력운동] + 덤벨, 운동 매트</S.Content>
          <S.Price>10,000원</S.Price>
        </S.OrderRow>
      </S.OrderSection>

      {/* 배송지 정보 */}
      <S.DeliveryBox>
        <S.DeliveryLabel>배송지</S.DeliveryLabel>
        <S.DeliveryInfo>
          <S.BoldText>이순신(닉네임)</S.BoldText>
          <S.BoldText>010-1234-5678</S.BoldText>
          <S.Address>서울 종로구 세종대로 172</S.Address>
        </S.DeliveryInfo>
      </S.DeliveryBox>

      {/* 결제 완료 */}
      <S.Confirmation>주문하신 상품 결제 완료</S.Confirmation>
    </S.Container>
  );
};

export default Transaction;