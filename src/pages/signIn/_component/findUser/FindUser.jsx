import React, { useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../layout/_component/Logo/Logo';
import BasicInput from '../../../../components/Input/BasicInput/BasicInput';
import BasicButton from '../../../../components/button/BasicButton';

const FindUser = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: '',
    birthDate: '',
  });

  const [inputStates, setInputStates] = useState({
    name: '',
    birthDate: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    birthDate: '',
  });

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));

    setInputStates((prev) => ({
      ...prev,
      [field]: '', // 입력 시 상태 초기화
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: '', // 입력 시 에러 메시지 초기화
    }));
  };

  const validate = () => {
    let isValid = true;
    let newErrors = {};
    let newStates = {};

    if (!formValues.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
      newStates.name = 'error';
      isValid = false;
    } else {
      newStates.name = 'success';
    }

    // 생년월일 유효성 검사 (YYYYMMDD 형식)
    const birthDateRegex = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
    if (!birthDateRegex.test(formValues.birthDate)) {
      newErrors.birthDate = '생년월일은 YYYYMMDD 형식으로 입력해주세요.';
      newStates.birthDate = 'error';
      isValid = false;
    } else {
      newStates.birthDate = 'success';
    }

    setErrors(newErrors);
    setInputStates(newStates);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validate()) {
      console.log('Form Values:', formValues);
      const { name, birthDate } = formValues;
      try {
        const response = await fetch(`http://localhost:8000/users/findUser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            birthDate: birthDate,
          }),
        });
        const result = await response.json(); // JSON으로 변환
        console.log('🚀 ~ handleSubmit ~ result:', result);
        if (response.ok) {
          console.log(result);
          alert(result.message); // 성공 메시지 표시
          navigate('/signin'); // 찾은 사용자 정보 페이지로 이동
        } else {
          alert(result.message); // 에러 메시지 표시
        }
      } catch (error) {
        console.log('🚀 ~ handleSubmit ~ error:', error);
      }
    }
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.FormWrapper>
        <BasicInput
          width={'336px'}
          height={'43px'}
          state={inputStates.name}
          errorText={errors.name}
          susccessText={''}
          placeHolderText={'이름'}
          onChange={handleChange('name')}
        />
        <BasicInput
          width={'336px'}
          height={'43px'}
          state={inputStates.birthDate}
          errorText={errors.birthDate}
          susccessText={'올바른 생년월일입니다!'}
          placeHolderText={'생년월일 (YYYYMMDD)'}
          onChange={handleChange('birthDate')}
        />
        <S.ButtonWrapper>
          <BasicButton
            size={'full'}
            shape={'small'}
            variant={'primary'}
            color={'white'}
            onClick={handleSubmit}
          >
            사용자 찾기
          </BasicButton>
        </S.ButtonWrapper>
      </S.FormWrapper>
    </S.Container>
  );
};

export default FindUser;
