import styled from 'styled-components';

const S = {};

S.ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

S.ModalContainer = styled.div`
  width: 800px;
  height: 300px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

S.ModalMessage = styled.div`
    
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 50px;
  color: black;
`;
S.ModalNotice = styled.div`
  font-size: 20px;
  margin-bottom: 40px;
  color: black;
`;

S.CancelButton = styled.button`
  width: 140px;
  height: 67px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  color: black;
  border-radius: 10px;
  cursor: pointer;
`;

S.ConfirmButton = styled.button`
  width: 140px;
  height: 67px;
  border: none;
  background-color: #3d6aff;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export default S;
