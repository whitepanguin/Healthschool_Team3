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
    border: 2px solid ${({ theme }) => theme.PALLETE.black};
    border-radius: 3px;
    background-color: ${({ theme }) => theme.PALLETE.white};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:not(:checked) {
        background-color: ${({ theme }) => theme.PALLETE.white};
        border-color: ${({ theme }) => theme.PALLETE.black};
    }

    &:not(:checked):hover {
        border-color: ${({ theme }) => theme.PALLETE.primary["main"]};
    }

    &:checked {
        border-color: ${({ theme }) => theme.PALLETE.primary["main"]};
        background-color: ${({ theme }) => theme.PALLETE.primary["main"]};
        color: ${({ theme }) => theme.PALLETE.white};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.PALLETE.gray["100"]};
        border-color: ${({ theme }) => theme.PALLETE.gray["500"]};
        cursor: not-allowed;
    }

    &:checked::after {
        content: '✔';
        font-size: 14px;
        color: ${({ theme }) => theme.PALLETE.white};
    }
`;

// 라벨 스타일
S.Label = styled.label`
    font-size: 14px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export default S;
