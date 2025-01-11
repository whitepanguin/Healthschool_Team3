import React, { useEffect, useState } from "react";
import S from "./style";
import { Link } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import BasicButton from "../../../components/button/BasicButton";
import BasicCheckBox from "../../../components/checkbox/BasicCheckBox";
import { useDispatch, useSelector } from "react-redux";

const Address = () => {
  const { isLogin, currentUser } = useSelector(state => state.user);
  const { name, email, address, profile } = currentUser
  const dispatch = useDispatch();

  const [nowaddress, setAddress] = useState(address || "주소지를 입력해주세요");
  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false); // DaumPostcode 표시 여부   

  const handleComplete = (data) => {
    // 주소 데이터 처리
    const fullAddress = data.address;
    const extraAddress = data.addressType === "R" ? data.bname || "" : "";
    setAddress(`${fullAddress} ${extraAddress}`);
  };

  useEffect(() => {
    setIsPostcodeVisible(false);
  }, [nowaddress]);
  
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{address}</p>
      <p>{profile}</p>
      <S.ProgressWrapper>
        <S.ProgressStep>장바구니</S.ProgressStep>
        <S.Arrow>{">"}</S.Arrow>
        <S.ProgressStep active>주문/결제</S.ProgressStep>
        <S.Arrow>{">"}</S.Arrow>
        <S.ProgressStep>완료</S.ProgressStep>
      </S.ProgressWrapper>
      <S.Container>
        <S.Header>회원 정보/ 주소</S.Header>
        <S.Section>
          <S.AddressBox>
            <S.Title>배송지</S.Title>
            <S.AddressInfo>
              <S.Name>{name}</S.Name>
              <S.Phone >Email : {email}</S.Phone>
              <p>선택된 주소: {nowaddress}</p>
            </S.AddressInfo>
            <S.EditButton onClick={()=>setIsPostcodeVisible(!isPostcodeVisible)}>변경</S.EditButton>
            {isPostcodeVisible && (
        <div>
          <DaumPostcode onComplete={handleComplete} />
        </div>
      )}
          </S.AddressBox>
          <S.MemoBox>
            <S.CheckOn>
              <BasicCheckBox />
              <S.MemoText>배송메모 개별 입력</S.MemoText>
            </S.CheckOn>
            <S.Select>
              <option>배송메모를 선택해주세요</option>
            </S.Select>
            <S.ReuseBox>
              <BasicCheckBox />
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
              <S.ProductTitle>
                [근력운동] 전달력과 효과적인 근력운동으로 강한 몸 만들어요!
              </S.ProductTitle>
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
            <S.RadioButton type="radio" name="payment" defaultChecked /> 카드
            결제
          </S.PaymentOptions>
        </S.Section>

        <S.CardBox>
          <S.CardText>카드 간편 결제</S.CardText>
          <S.TotalAmount>37,000원</S.TotalAmount>
        </S.CardBox>
      </S.Container>
      <Link to={"/payment/transaction"}>
        <BasicButton
          size={"medium"}
          shape={"small"}
          variant={"primary"}
          color={"white"}
        >
          다 음
        </BasicButton>
      </Link>
    </div>
  );
};

export default Address;
