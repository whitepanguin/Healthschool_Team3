import React, { useEffect, useState } from "react";
import S from "./style";
import { Link, useNavigate } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import BasicButton from "../../../components/button/BasicButton";
import BasicCheckBox from "../../../components/checkbox/BasicCheckBox";
import { useDispatch, useSelector } from "react-redux";
import PaymentButton from '../PaymentButton/PaymentButton';

const Address = () => {
  const { isLogin, currentUser } = useSelector((state) => state.user);
  const { name, email, address } = currentUser;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedStores, setSelectedStores] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [receipt, setReceipt] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  const [nowaddress, setAddress] = useState(address || "주소지를 입력해주세요");
  const [detailAddress, setDetailAddress] = useState('');
  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false); // DaumPostcode 표시 여부
  const [ispaid, setIspaid] = useState(false); // DaumPostcode 표시 여부


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
    if(ispaid){
      const selectedReceipt = receipt
      localStorage.setItem("selectedReceipt", JSON.stringify(selectedReceipt));    
      localStorage.removeItem("selectedStores")
      localStorage.removeItem("selectedStoresoption")
    }
  }, [ispaid]);

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
  
  }, []);
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

  const submitData = async () => {
    const payload = selectedStores.map((store) => {
      // selectedStoresoption에서 해당 _id에 맞는 옵션 찾기
      const option = selectedOptions.find((opt) => opt._id === store._id);
  
      // 옵션이 있다면 store 데이터에 추가하고, 없으면 그대로 반환
      return option
        ? { ...store, option1: option.option1 } // 옵션을 추가한 데이터
        : { ...store, option1: false }; // 옵션이 없으면 false로 설정
    });

    const storeIds = payload.map(store => store._id);
    const titles = payload.map(store => store.title);
    const productPrices = payload.map(store => store.productPrice);
    const option1s = payload.map(store => store.option1);
    const additionTitles = payload.map(store => store.additionTitle);
    const additionPrices = payload.map(store => store.additionPrice);
  
    try {

      const response = await fetch("http://localhost:8000/stores/receipt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          storeid: storeIds,
          name: currentUser.name, 
          email: currentUser.email, 
          title: titles,
          productPrice: productPrices,
          option1: option1s,
          additionTitle: additionTitles,
          additionPrice: additionPrices,
         }),
      });

      if (!response.ok) {
        throw new Error("데이터 전송 실패");
      }
  
      const result = await response.json();
      setReceipt(result)
      console.log("서버 응답:", receipt);
      alert("데이터가 성공적으로 전송되었습니다!");

      // navigate("/payment/transaction"); // 데이터 전송 후 결제 완료 페이지로 이동
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
      alert("데이터 전송에 실패했습니다.");
    }
    setIspaid(true)
  };

  const onSubmit = async () => {

    const fullAddress = `${nowaddress} ${detailAddress}`;

    console.log("서버로 전송할 데이터:", {
      email: currentUser.email,
      address: fullAddress,
    });

    try {
      const response = await fetch("http://localhost:8000/users/modify", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: currentUser.email,
          address: fullAddress,
        }),
      });

      const result = await response.json();
      console.log("서버 응답:", result);

      if (result.updateSuccess) {
        alert("회원 정보가 성공적으로 수정되었습니다.");
        navigate('/payment/history', { state: { updatedUser: result.currentUser } });
      } else {
        alert(result.message || "회원 정보 수정에 실패했습니다.");
      }
    } catch (err) {
      console.error("주소 수정 요청 실패:", err);
      alert("서버 오류로 인해 수정에 실패했습니다.");
    }
  };

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
            <S.InputAddrDetail
                        style={{ width: "400px" }}
                        type="text"
                        placeholder="상세 주소를 입력하세요"
                        value={detailAddress}
                        onChange={(e) => setDetailAddress(e.target.value)}
                      />
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
      <S.buttonNext>
        <BasicButton
          size={"medium"}
          shape={"small"}
          variant={"primary"}
          color={"white"}
          onClick={onSubmit}
        >
          다 음
        </BasicButton>
        </S.buttonNext>
 
        <PaymentButton
          productPrice={totalAmount}
          orderName={"title"}
          customerName={name}
          customerEmail={email}
        >
          결 제 
        </PaymentButton>
        <button 
          size={"medium"}
          shape={"small"}
          variant={"primary"}
          color={"white"}
        onClick={submitData}>확인</button>

    </div>
  );
};

export default Address;
