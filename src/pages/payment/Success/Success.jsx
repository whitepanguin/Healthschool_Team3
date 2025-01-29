import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Success = () => {
  const [searchParams] = useSearchParams();
  const [responseData, setResponseData] = useState(null);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const naviagate = useNavigate()

  useEffect(() => {

    const confirm = async () => {
      const requestData = {
        orderId : searchParams.get("orderId"),
        amount : searchParams.get("amount"),
        paymentKey : searchParams.get("paymentKey")
      }
      const response = await fetch("http://localhost:8000/payment/toss", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(requestData)
      })
      const datas = await response.json()
      if(!datas.ok) {
        throw { message : datas.message }
      }
      return datas
    }

    if(!isRequestSent){
      confirm()
        .then((data) => {
          setResponseData(data)
          setIsRequestSent(true)
        })
        .catch((error) => {
          // naviagate(`/payment/failed`)
        })
    }

  }, [isRequestSent, searchParams, naviagate])

  return (
    <div>
      <h1>결제가 성공적으로 완료되었습니다.</h1>
      <h2>주문 번호 : {searchParams.get("orderId")}</h2>
      <h2>주문 가격 : {searchParams.get("amount")}</h2>
      <Link to={"/"}>다른 상품 보러가기</Link>
    </div>
  );
};

export default Success;