import React from 'react';
import { useQuestion } from '../QuestionContext';
import S from './style';

const Result = () => {
    const { selectedItem } = useQuestion();

    return (
        <S.resultContainer>
            <S.MainTitle>선택한 항목: {selectedItem}</S.MainTitle>
        </S.resultContainer>
    );
};

export default Result;
