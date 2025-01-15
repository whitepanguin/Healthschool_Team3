import React, { useEffect, useState } from "react";
import S from "./style";
import { Link } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import BasicButton from "../../../components/button/BasicButton";
import BasicCheckBox from "../../../components/checkbox/BasicCheckBox";
import { useDispatch, useSelector } from "react-redux";


const Address = () => {
  const { isLogin, currentUser } = useSelector((state) => state.user);
  const { name, email, address } = currentUser;
  const dispatch = useDispatch();

  const [selectedStores, setSelectedStores] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    // 로컬 스토리지에서 데이터 가져오기
    const storedData = localStorage.getItem("selectedStores");
    if (storedData) {
      setSelectedStores(JSON.parse(storedData));
    }
    const storedOption = localStorage.getItem("selectedStoresoption");
    if (storedOption) {
      setSelectedOptions(JSON.parse(storedOption));
    }
    
  }, [ ]);

  // useEffect(() => {
  //   const fetchSelectedStores = async () => {
  //     const selectedIds = JSON.parse(localStorage.getItem("storedData"));

  //     try {
  //       const response = await fetch("http://localhost:8000/stores/details", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ ids: selectedIds }),
  //       });
  //       if (!response.ok) {
  //         throw new Error("선택한 데이터를 가져오는 데 실패했습니다.");
  //       }
  //       const data = await response.json();
  //       setSelectedStores(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchSelectedStores();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  const updatedStores = selectedStores.map((store) => {
    const option = selectedOptions.find((opt) => opt._id === store._id);
    return option ? { ...store, ...option } : store;
  });

  const totalAmount = updatedStores.reduce((sum, store) => {
    const additionalPrice = store.option1 ? store.additionPrice || 0 : 0;
    return (sum + (store.productPrice || 0) + additionalPrice);
  }, 0)+2000;
    
  return (
    <div>
      <S.ProgressWrapper>
        <Link to={"/payment/cart"}>
          <S.ProgressStep>장바구니</S.ProgressStep>
        </Link>
        <S.Arrow>{">"}</S.Arrow>
        <Link to={"/payment/address"}>
          <S.ProgressStep active>주문/결제</S.ProgressStep>
        </Link>
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
              <S.Phone>Email : {email}</S.Phone>
              <p>선택된 주소: {nowaddress}</p>
            </S.AddressInfo>
            <S.EditButton
              onClick={() => setIsPostcodeVisible(!isPostcodeVisible)}
            >
              변경
            </S.EditButton>
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
          <S.DateText>{formattedDate}</S.DateText>

          <S.FeeText>배송비 2000원</S.FeeText>
          <S.OrderBox>
            <S.Product>
            <div>
      <h1>결제 페이지</h1>
      {updatedStores.map((store) => (
        <div key={store._id}>
          <S.ProductTitle>{store.title}</S.ProductTitle>
          <p>{store.description}</p>
          <S.Price>
            {store.productPrice.toLocaleString("ko-KR")}원
          </S.Price>
          {store.option1 && ( // option1이 true인 경우에만 S.Additional을 렌더링
            <S.Additional>
              <S.ProductTitle>
                +추가 상품: {store.additionTitle}
              </S.ProductTitle>
              <S.Price>
                +{store.additionPrice.toLocaleString("ko-KR")}원
              </S.Price>
            </S.Additional>
          )}
        </div>
      ))}
    </div>
            </S.Product>
          </S.OrderBox>
          <S.TotalAmount>
            총 결제:{" "}
            {totalAmount.toLocaleString("ko-KR")}
            원
          </S.TotalAmount>
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
          <S.TotalAmount>
            총 결제 금액: {totalAmount.toLocaleString("ko-KR")}원
          </S.TotalAmount>
        </S.CardBox>
      </S.Container>
      <Link to={"/payment/transaction"}>
      <S.buttonNext>
        <BasicButton
          size={"medium"}
          shape={"small"}
          variant={"primary"}
          color={"white"}
        >
          다 음
        </BasicButton>
        </S.buttonNext>
      </Link>
    </div>
  );
};

export default Address;
