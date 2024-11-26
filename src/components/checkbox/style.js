import styled from 'styled-components';

const S = {};

S.CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

S.CheckBox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 3px;
    background-color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:not(:checked) {
        background-color: #fff;
        border-color: #ccc;
    }

    &:not(:checked):hover {
        border-color: #0056b3;
    }

    &:checked {
        border-color: #007bff;
        background-color: #007bff;
        color: #fff;
    }

    &:disabled {
        background-color: #f0f0f0;
        border-color: #d0d0d0;
        cursor: not-allowed;
    }

    &:checked::after {
        content: '✔';
        font-size: 14px;
        color: #fff;
    }
`;

// 라벨 스타일
S.Label = styled.label`
    font-size: 14px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export default S;
