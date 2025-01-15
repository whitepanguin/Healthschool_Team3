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
  const [stores, setStores] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]); // 선택된 _id 값들
  const [selectedOptions, setSelectedOptions] = useState([]); 
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
        const x = data

        const separatedData = x.map(y => {
          const { _id, option1, ...rest } = y; // 'option1'과 나머지 속성을 분리
          return { 
            option1: {  _id, option1 }, 
            rest: { _id, ...rest }, }; // 분리된 데이터를 객체로 반환
        });
        
        const option1Array = separatedData.map(data => data.option1);

        // 나머지 데이터 배열
        const modifiedStores = separatedData.map(data => data.rest);

        // console.log(option1Array); // option1 값들만 모은 배열
        // console.log(modifiedStores); // 나머지 속성만 모은 배열
        setOptions(option1Array);
        setStores(modifiedStores); // 받아온 데이터를 상태에 저장
      } catch (err) {
        console.error("Error fetching stores:", err);
        setError(err.message); // 오류 메시지 상태 설정
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchStores();
  }, []); // 빈 배열([])을 넣어 컴포넌트가 처음 렌더링될 때만 실행되도록 함


  const handleCheckboxChange = (id, isChecked) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((_id) => _id !== id) : [...prev, id]
    );
  };
  const handleCheckboxoptionChange = (id, isChecked) => {
    setSelectedOptions((prev) =>
      prev.includes(id) ? prev.filter((_id) => _id !== id) : [...prev, id]
    );
  };

  const handleNextClick = () => {
    const selectedStores = stores
      .filter((store) => selectedIds.includes(store._id))
      .map((store) => ({
        ...store,
        additionPrice: selectedIds.includes(store._id) ? store.additionPrice : 0,
      }));
    const selectedStoresoption = options
      .filter((option) => selectedOptions.includes(option._id));
    
    // console.log(selectedStoresoption)
    localStorage.setItem("selectedStoresoption", JSON.stringify(selectedStoresoption));
  
    // 로컬 스토리지에 선택된 데이터 저장
    localStorage.setItem("selectedStores", JSON.stringify(selectedStores));
    navigate("/payment/address");
  };

  const handlestoreClick = () => {
    // console.log("작동중")
    // console.log(options)
    // console.log(selectedOptions)
    };

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때
  }

  if (error) {
    return <div>Error: {error}</div>; // 오류 발생 시 표시
  }

  return (
    <div>
      <Link to={"/payment"}>
        <BasicButton
          size={"medium"}
          shape={"small"}
          variant={"primary"}
          color={"white"}
        >
          toss test
        </BasicButton>
      </Link>
      <S.ProgressWrapper>
        <Link to={"/payment/cart"}>
          <S.ProgressStep active>장바구니</S.ProgressStep>
        </Link>
        <S.Arrow>{">"}</S.Arrow>
        <S.ProgressStep>주문/결제</S.ProgressStep>
        <S.Arrow>{">"}</S.Arrow>
        <S.ProgressStep>완료</S.ProgressStep>
      </S.ProgressWrapper>
      <S.Button>
        <h1>전체 체크</h1>
        <BasicCheckBox
          checked={selectedIds.length === stores.length}
          onChange={() =>
            setSelectedIds(
              selectedIds.length === stores.length
                ? []
                : stores.map((store) => store._id)
            )
          }
        />
      </S.Button>
      <div>
        {stores.map((store) => (
          <div key={store._id}>
            <S.boxbox>
              <BasicCheckBox
                checked={selectedIds.includes(store._id)}
                onChange={() => handleCheckboxChange(store._id)}
              />
            </S.boxbox>
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
              uploadDate={store.uploadDate.split("T")[0]}
              tags={store.tags}
              imageUrl={store.imageUrl}
              checked={handlestoreClick} // 체크 상태 전달
              onCheckboxChange={() => handleCheckboxoptionChange(store._id)} // 상태 변경 함수 전달
            />
          </div>
        ))}
      </div>
      <S.buttonNext>
        <BasicButton
          size={"medium"}
          shape={"small"}
          variant={"primary"}
          color={"white"}
          onClick={handleNextClick}
        >
          다 음
        </BasicButton>
      </S.buttonNext>
    </div>
  );
};

export default Cart;
