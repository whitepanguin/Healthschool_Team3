import styled from 'styled-components';

const S = {};

S.ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

S.Modal = styled.div`
    background: #fff;
    width: 400px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    text-align: center;
`;

S.CloseButton = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    background: none;
    border: none;
    font-size: 18px;
    color : #000;
    cursor: pointer;
`;

S.Icon = styled.div`
    font-size: 36px;
    margin-bottom: 10px;
`;

S.Content = styled.div`
    margin-bottom: 20px;
`;

S.Title = styled.h2`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color : #000;
`;

S.Description = styled.p`
    font-size: 14px;
    color: #555;
`;

S.Actions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export default S;
