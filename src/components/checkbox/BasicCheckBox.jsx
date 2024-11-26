import React from 'react';
import S from './style';

const BasicCheckBox = ({ label, checked, onChange, disabled }) => {
    return (
        <S.CheckBoxWrapper>
            <S.CheckBox 
                checked={checked} 
                onChange={onChange} 
                disabled={disabled} 
            />
            {label && <S.Label disabled={disabled}>{label}</S.Label>}
        </S.CheckBoxWrapper>
    );
};

export default BasicCheckBox;
