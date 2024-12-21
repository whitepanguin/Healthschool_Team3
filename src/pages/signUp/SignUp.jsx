import React, { useState } from 'react';
import Logo from '../layout/_component/Logo/Logo';
import S from './style';
import BasicInput from '../../components/Input/BasicInput/BasicInput';
import BasicButton from '../../components/button/BasicButton';

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    birthDate: '',
    nickname: ''
  });

  const [inputStates, setInputStates] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    nickname: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    nickname: ''
  });

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setFormValues((prev) => ({
      ...prev,
      [field]: value
    }));

    setInputStates((prev) => ({
      ...prev,
      [field]: '' // 입력 시 상태 초기화
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: '' // 입력 시 에러 메시지 초기화
    }));
  };

  const validate = () => {
    let isValid = true;
    let newErrors = {};
    let newStates = {};

    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
      newStates.email = 'error';
      isValid = false;
    } else {
      newStates.email = 'success';
    }

    // 비밀번호 유효성 검사
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formValues.password)) {
      newErrors.password =
        '비밀번호는 소문자, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.';
      newStates.password = 'error';
      isValid = false;
    } else {
      newStates.password = 'success';
    }

    // 비밀번호 확인
    if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
      newStates.confirmPassword = 'error';
      isValid = false;
    } else {
      newStates.confirmPassword = 'success';
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

    // 닉네임 유효성 확인
    if (!formValues.nickname.trim()) {
      newErrors.nickname = '닉네임을 입력해주세요.';
      newStates.nickname = 'error';
      isValid = false;
    } else {
      newStates.nickname = 'success';
    }

    setErrors(newErrors);
    setInputStates(newStates);
    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Form Values:', formValues);
      alert('회원가입이 완료되었습니다!');
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
          state={inputStates.email}
          errorText={errors.email}
          susccessText={'올바른 이메일입니다!'}
          placeHolderText={'이메일'}
          onChange={handleChange('email')}
        />
        <BasicInput
          width={'336px'}
          height={'43px'}
          state={inputStates.password}
          type={'password'}
          errorText={errors.password}
          susccessText={'올바른 비밀번호입니다!'}
          placeHolderText={'비밀번호'}
          onChange={handleChange('password')}
        />
        <BasicInput
          width={'336px'}
          height={'43px'}
          state={inputStates.confirmPassword}
          type={'password'}
          errorText={errors.confirmPassword}
          susccessText={'비밀번호가 확인되었습니다!'}
          placeHolderText={'비밀번호 확인'}
          onChange={handleChange('confirmPassword')}
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
        <BasicInput
          width={'336px'}
          height={'43px'}
          state={inputStates.nickname}
          errorText={errors.nickname}
          susccessText={'멋진 닉네임입니다!'}
          placeHolderText={'닉네임'}
          onChange={handleChange('nickname')}
        />
        <S.ButtonWrapper>
          <BasicButton
            size={'full'}
            shape={'small'}
            variant={'primary'}
            color={'white'}
            onClick={handleSubmit}
          >
            회원가입
          </BasicButton>
        </S.ButtonWrapper>
      </S.FormWrapper>
    </S.Container>
  );
};

export default SignUp;
