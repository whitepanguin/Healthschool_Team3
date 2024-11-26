import styled from 'styled-components';

const S = {};

S.RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

S.Radio = styled.input.attrs({ type: 'radio' })`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 50%; 
    background-color: ${({ theme }) => theme.PALLETE.white};
    cursor: pointer;
    transition: all 0.2s ease;

    &:not(:checked) {
        background-color: ${({ theme }) => theme.PALLETE.white};
        border-color: #ccc;
    }

    &:not(:checked):hover {
        border-color: ${({ theme }) => theme.PALLETE.primary["main"]};
    }

    &:checked {
        border-color: ${({ theme }) => theme.PALLETE.primary["main"]};
        background-color: ${({ theme }) => theme.PALLETE.primary["main"]};
    }

    &:disabled {
        background-color: #f0f0f0;
        border-color: #d0d0d0;
        cursor: not-allowed;
    }

    &:checked::before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        background-color: ${({ theme }) => theme.PALLETE.white};
        border-radius: 50%;
        position: absolute; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%); 
    }

    position: relative; 
`;


S.Label = styled.label`
    font-size: 14px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export default S;
