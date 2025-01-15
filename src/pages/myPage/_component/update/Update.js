import React, { useEffect, useState } from 'react';
import S from './style';
import BasicButton from '../../../../components/button/BasicButton';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const { register, handleSubmit, setValue, formState: { isSubmitting, errors } } = useForm({ mode: "onChange" });
  const [baseAddress, setBaseAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  console.log("현재 사용자 정보:", currentUser);

  // 📌 카카오 주소 API 스크립트 로드
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // 📌 카카오 주소 API 실행
  const openPostcode = () => {
    console.log("주소 검색 버튼 클릭됨");
    new window.daum.Postcode({
      oncomplete: function (data) {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
          if (data.bname !== '') extraAddress += data.bname;
          if (data.buildingName !== '') extraAddress += (extraAddress ? `, ${data.buildingName}` : data.buildingName);
          fullAddress += extraAddress ? ` (${extraAddress})` : '';
        }

        setBaseAddress(fullAddress);
        setValue('baseAddress', fullAddress);
      }
    }).open();
  };

  // 📌 폼 제출
  const onSubmit = async (data) => {
    console.log("폼 제출 데이터 확인:", data);

    const { name, nickName } = data;
    const fullAddress = `${baseAddress} ${detailAddress}`;
    const birthDateFormatted = birthDate ? format(new Date(birthDate), 'yyyyMMdd') : '';

    console.log("서버로 전송할 데이터:", {
      email: currentUser.email,
      name,
      nickName,
      address: fullAddress,
      birthDate: birthDateFormatted,
    });

    try {
      const response = await fetch("http://localhost:8000/users/modify", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: currentUser.email,
          name,
          nickName, 
          address: fullAddress,
          birthDate: birthDateFormatted,
        }),
      });

      const result = await response.json();
      console.log("서버 응답:", result);

      if (result.updateSuccess) {
        alert("회원 정보가 성공적으로 수정되었습니다.");
        navigate('/mypage/profile', { state: { updatedUser: result.currentUser } });
      } else {
        alert(result.message || "회원 정보 수정에 실패했습니다.");
      }
    } catch (err) {
      console.error("수정 요청 실패:", err);
      alert("서버 오류로 인해 수정에 실패했습니다.");
    }
  };

  // 📌 사용자 정보로 초기값 설정
  useEffect(() => {
    if (currentUser) {
      setBaseAddress(currentUser.address || '');

      // ✅ 생년월일 변환: 숫자(20250102) → 문자열("2025-01-02")
      if (currentUser.birthDate) {
        const birthDateStr = currentUser.birthDate.toString();  // 숫자 → 문자열 변환
        const formattedBirthDate = `${birthDateStr.slice(0, 4)}-${birthDateStr.slice(4, 6)}-${birthDateStr.slice(6, 8)}`;
        setBirthDate(formattedBirthDate);
        setValue('birthDate', formattedBirthDate);
      } else {
        setBirthDate('');
      }

      setValue('name', currentUser.name || '');
      setValue('nickName', currentUser.nickName || '');
    }
  }, [currentUser, setValue]);


  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      {/* 이름 */}
      <S.FormGroup>
        <S.InfoHead>이름</S.InfoHead>
        <S.Input
          type="text"
          placeholder="이름을 입력하세요"
          {...register("name", { required: true })}
        />
        {errors.name && <p style={{ color: 'red' }}>이름을 입력해주세요.</p>}
      </S.FormGroup>

      {/* 닉네임 */}
      <S.FormGroup>
        <S.InfoHead>닉네임</S.InfoHead>
        <S.Input
          type="text"
          placeholder="닉네임을 입력하세요"
          {...register("nickName", { required: true })}  // ✅ 수정된 부분
        />
        {errors.nickName && <p style={{ color: 'red' }}>닉네임을 입력해주세요.</p>}
      </S.FormGroup>

      {/* 주소 */}
      <S.FormGroup>
        <S.InfoHead>주소</S.InfoHead>
        <div>
          <S.Input
            style={{ width: "400px", marginBottom: "5px" }}
            type="text"
            placeholder="기본 주소"
            value={baseAddress}
            readOnly
            {...register("baseAddress")}
          />
          <BasicButton
            size={'small'}
            shape={'small'}
            variant={'primary'}
            color={'white'}
            onClick={openPostcode}
            type="button"
          >
            주소 검색
          </BasicButton>
          <S.InputAddrDetail
            style={{ width: "400px" }}
            type="text"
            placeholder="상세 주소를 입력하세요"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
        </div>
      </S.FormGroup>

      {/* 생년월일 */}
      <S.FormGroup style={{ marginTop: "30px" }}>
        <S.InfoHead>생년월일</S.InfoHead>
        <S.Input
          type="date"
          value={birthDate}
          onChange={(e) => {
            const selectedDate = e.target.value;
            setBirthDate(selectedDate);
            setValue("birthDate", selectedDate);
          }}
        />
      </S.FormGroup>

      {/* 버튼 */}
      <S.ButtonWrapper>
        <BasicButton
          size={'small'}
          shape={'small'}
          variant={'sub'}
          color={'black'}
          onClick={() => navigate('/mypage/profile')}
        >
          취소하기
        </BasicButton>
        <BasicButton
          size={'small'}
          shape={'small'}
          variant={'primary'}
          color={'white'}
          onClick={(e) => {
            e.preventDefault();  // ✅ 기본 제출 방지
            console.log("수정 버튼 클릭됨 ✅");
            handleSubmit(onSubmit)();  // ✅ 폼 제출 실행
          }}
        >
          수정하기
        </BasicButton>
      </S.ButtonWrapper>
    </S.Form>
  );
};

export default Update;
