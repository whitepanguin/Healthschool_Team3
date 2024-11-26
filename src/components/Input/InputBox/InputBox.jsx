import React, { useState } from 'react';
import S from './style';

const InputBox = ({ placeHolderText }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <S.InputWrapper>
            <S.Input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                $isFocused ={isFocused}
                placeholder={placeHolderText}
            />
        </S.InputWrapper>
    );
};

export default InputBox;
