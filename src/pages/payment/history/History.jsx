import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const History = () => {

  const { isLogin, currentUser } = useSelector((state) => state.user);
  const { name, email, address } = currentUser;
  const [receipt, setReceipt] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 가져오기
    const selectedReceipt = localStorage.getItem("selectedReceipt");
    if (selectedReceipt) {
      const parsedData = JSON.parse(selectedReceipt);

      const formattedData = parsedData.storeid.map((id, index) => ({
        storeid: id,
        name: parsedData.name,
        email: parsedData.email,
        title: parsedData.title[index],
        productPrice:  parseInt(parsedData.productPrice[index], 10),
        option1: parsedData.option1[index] === "true",
        additionTitle: parsedData.additionTitle[index],
        additionPrice:  parseInt(parsedData.additionPrice[index], 10),
        createdAt: parsedData.createdAt,
      }));
      setReceipt(formattedData);
      const cost = formattedData.reduce((acc, item) => {
        let itemTotal = item.productPrice;
        if (item.option1) {
          itemTotal += item.additionPrice;
        }
        return acc + itemTotal;
      }, 0);

      // 2000원 추가
      setTotalCost(cost + 2000);
    }

    
  }, []);


  
  return (
    <div>
       <S.Container>
        <S.ProgressWrapper>
          <Link to={"/payment/failed"}><S.ProgressStep>장바구니</S.ProgressStep></Link>
          <S.Arrow>{">"}</S.Arrow>
          <Link to={"/payment/failed"}><S.ProgressStep>주문/결제</S.ProgressStep></Link>
          <S.Arrow>{">"}</S.Arrow>
          <Link to={"/payment"}><S.ProgressStep active>완료</S.ProgressStep></Link>
        </S.ProgressWrapper>
        {receipt.map((item, index) => (
          <>  
        <S.ImageBox>
        {/* <S.Image src="https://via.placeholder.com/600x300" alt="운동 이미지" /> */}
        <S.TextBox>
          <S.SmallText>{item.createdAt.split("T")[0]}</S.SmallText>
          <S.Title>{item.title}</S.Title>
        </S.TextBox>
      </S.ImageBox>

      {/* 주문 상세 */}
      <S.OrderSection>
        <S.OrderRow>
          <S.Label>주문</S.Label>
          <S.Content>
          {item.title}
          </S.Content>
          <S.Price>{Number(item.productPrice).toLocaleString()}원</S.Price>
        </S.OrderRow>
        {item.option1 && (
              <S.OrderRow>
                <S.Label>추가</S.Label>
                <S.Content>{item.additionTitle}</S.Content>
                <S.Price>{Number(item.additionPrice).toLocaleString()}원</S.Price>
              </S.OrderRow>
            )}
      </S.OrderSection>
      </>
       ))}
      {/* 배송지 정보 */}
      <S.DeliveryBox>
        <S.DeliveryLabel>배송지</S.DeliveryLabel>
        <S.DeliveryInfo>
          <S.BoldText>{currentUser.name}</S.BoldText>
          <S.BoldText>{currentUser.email}</S.BoldText>
          <S.Address>{currentUser.address}</S.Address>
        </S.DeliveryInfo>
      </S.DeliveryBox>

      {/* 결제 완료 */}
      <div> 총 결제 금액: {totalCost.toLocaleString()}원</div>
      <S.Confirmation>주문하신 상품 결제 완료</S.Confirmation>
       </S.Container>
    </div>
  );
};

export default History;