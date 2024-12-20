import React from 'react';
import S from './style';

const BasicRadio = ({ label, checked, onChange, disabled, value }) => {
    return (
        <S.RadioWrapper>
            <S.Radio
                id= {value}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            {label && <S.Label htmlFor={value} disabled={disabled}>{label}</S.Label>}
        </S.RadioWrapper>
    );
};

export default BasicRadio;
