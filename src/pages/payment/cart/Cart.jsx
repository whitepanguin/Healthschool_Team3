import React, { useEffect, useState } from "react";
import S from "./style";
import { Link, useNavigate } from "react-router-dom";
import BasicButton from "../../../components/button/BasicButton";
import BasicCheckBox from "../../../components/checkbox/BasicCheckBox";
import { useDispatch, useSelector } from "react-redux";
import Card from "../_component/Card";

const Cart = () => {
  const { isLogin, currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [stores, setStores] = useState([]); // 동영상 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 오류 상태 추가
  const navigate = useNavigate(); // navigate 훅 사용

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch("http://localhost:8000/stores/list");
        if (!response.ok) {
          throw new Error("장바구니을 불러오는 데 실패했습니다.");
        }
        const data = await response.json();
        setStores(data); // 받아온 데이터를 상태에 저장
      } catch (err) {
        console.error("Error fetching stores:", err);
        setError(err.message); // 오류 메시지 상태 설정
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchStores();
  }, []); // 빈 배열([])을 넣어 컴포넌트가 처음 렌더링될 때만 실행되도록 함

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때
  }

  if (error) {
    return <div>Error: {error}</div>; // 오류 발생 시 표시
  }
  console.log(stores);
  return (
    <div>
      <Link to={"/"}>
        <BasicButton
          size={"medium"}
          shape={"small"}
          variant={"primary"}
          color={"white"}
        >
          메인
        </BasicButton>
      </Link>
      <S.ProgressWrapper>
        <S.ProgressStep active>장바구니</S.ProgressStep>
        <S.Arrow>{">"}</S.Arrow>
        <S.ProgressStep>주문/결제</S.ProgressStep>
        <S.Arrow>{">"}</S.Arrow>
        <S.ProgressStep>완료</S.ProgressStep>
      </S.ProgressWrapper>
      <S.Button>
        <h1>전체 체크</h1>
        <BasicCheckBox />
      </S.Button>
      <div>
        {stores.map((store) => (
          <div key={store.uuid}>
            <Card
              uuid={store.uuid}
              title={store.title}
              subtitle={store.subtitle}
              detail={store.detail}
              productName={store.productName}
              description={store.description}
              additionTitle={store.additionTitle}
              productPrice={store.productPrice}
              additionPrice={store.additionPrice}
              uploadDate={store.uploadDate}
              tags={store.tags}
              imageUrl={store.imageUrl}
            />
          </div>
        ))}
        </div>
        <div>
          <Link to={"/payment/address"}>
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
      
    </div>
  );
};

export default Cart;
