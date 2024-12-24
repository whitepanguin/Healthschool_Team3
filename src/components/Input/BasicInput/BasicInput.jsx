import React, { useState } from 'react';
import S from './style';

const BasicInput = ({ state, isDisabled, errorText, susccessText, placeHolderText, width, height, onChange, type }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <S.InputWrapper>
            <S.Input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                $isFocused={isFocused}
                type={type}
                state={state} // 상태 전달
                placeholder={placeHolderText}
                disabled={isDisabled}
                width={width}
                height={height}
                onChange={onChange} // onChange 핸들러 추가
            />
            {state === 'error' && <S.ErrorMessage>{errorText}</S.ErrorMessage>}
            {state === 'success' && <S.SuccessMessage>{susccessText}</S.SuccessMessage>}
        </S.InputWrapper>
    );
};

export default BasicInput;
