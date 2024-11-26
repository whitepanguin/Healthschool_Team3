import React, { useState } from 'react';
import S from './style';

const BasicInput = ({ state, isDisabled, errorText, susccessText, placeHolderText }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <S.InputWrapper>
            <S.Input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                $isFocused={isFocused}
                state={state} // 상태 전달
                placeholder={placeHolderText}
                disabled = {isDisabled}
            />
            {state === 'error' && <S.ErrorMessage>{errorText}</S.ErrorMessage>}
            {state === 'success' && <S.SuccessMessage>{susccessText}</S.SuccessMessage>}
        </S.InputWrapper>
    );
};

export default BasicInput;
