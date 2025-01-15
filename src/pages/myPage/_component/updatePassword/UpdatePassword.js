import React from 'react';
import S from './style';
import BasicButton from '../../../../components/button/BasicButton';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({ mode: 'onChange' });

  const newPassword = watch('newPassword');
  const confirmPassword = watch('confirmPassword');

  const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  const onSubmit = async (data) => {
    console.log('폼 제출 데이터:', data);

    try {
      const response = await fetch("http://localhost:8000/users/updatePassword", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: currentUser.email,
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        alert("비밀번호가 성공적으로 변경되었습니다.");
        navigate('/mypage/profile');
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error("비밀번호 변경 오류:", err);
      alert("서버 오류로 인해 변경에 실패했습니다.");
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <h1 style={{ fontSize: '20px' }}>비밀번호 변경</h1>

      <S.InputGroup>
        <S.Input
          type="password"
          placeholder="현재 비밀번호"
          {...register("currentPassword", {
            required: "현재 비밀번호를 입력해주세요."
          })}
        />
        {errors.currentPassword && (
          <S.ErrorMessage>{errors.currentPassword.message}</S.ErrorMessage>
        )}

        <S.InputNewPassword>
          <S.Input
            type="password"
            placeholder="새 비밀번호"
            {...register("newPassword", {
              required: "새 비밀번호를 입력해주세요.",
              pattern: {
                value: passwordRegex,
                message: "소문자, 숫자, 특수문자를 포함한 8자 이상이어야 합니다."
              }
            })}
          />
          {errors.newPassword && (
            <S.ErrorMessage>{errors.newPassword.message}</S.ErrorMessage>
          )}

          <S.Input
            type="password"
            placeholder="새 비밀번호 확인"
            {...register("confirmPassword", {
              required: "새 비밀번호 확인을 입력해주세요.",
              validate: (value) =>
                value === newPassword || "새 비밀번호가 일치하지 않습니다."
            })}
          />
          {errors.confirmPassword && (
            <S.ErrorMessage>{errors.confirmPassword.message}</S.ErrorMessage>
          )}
        </S.InputNewPassword>
      </S.InputGroup>

      <S.ButtonWrapper>
        <BasicButton
          size={'small'}
          shape={'small'}
          variant={'primary'}
          color={'white'}
          onClick={(e) => {
            e.preventDefault();   
            handleSubmit(onSubmit)();
          }}
        >
          변경하기
        </BasicButton>

        <BasicButton
          size={'small'}
          shape={'small'}
          variant={'sub'}
          color={'black'}
          onClick={() => navigate('/mypage/profile')}
        >
          취소하기
        </BasicButton>
      </S.ButtonWrapper>
    </S.Form>
  );
};

export default UpdatePassword;
