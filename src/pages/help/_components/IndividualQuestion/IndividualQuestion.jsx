// IndividualQuestion.jsx
import React from 'react';
import S from './style';
import { Outlet } from 'react-router-dom';
import InputBox from '../../../../components/Input/InputBox/InputBox';

const IndividualQuestion = () => {
    return (
        <div>
            <S.Header>
                <S.h1>문의 등록</S.h1>
                <S.h4>어떠한 내용이라도 답변드릴 준비가 되어 있습니다!</S.h4>
                <S.h4>문의를 보내주세요! 가능한 한 빨리 답변 드리도록 하겠습니다.</S.h4>
            </S.Header>
            <S.Main>
                <h3>상세보기</h3>
                <hr />
                <S.Account>
                    <InputBox placeHolderText={'입력하세욧...'} />
                    <S.SubmitBtn className="submit">문의 전송</S.SubmitBtn>
                </S.Account>
            </S.Main>
            <Outlet />
        </div>
    );
};
export default IndividualQuestion;
