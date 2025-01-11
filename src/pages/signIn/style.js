import styled from 'styled-components';

const S = {}

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

S.LogoWrapper = styled.div`
  margin-bottom: 40px;
`

S.FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 17px;
`;

S.CheckWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 17px;
`;

S.ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  margin-bottom: 17px;
`

S.FindWrapper = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 21px;
`;

S.IconButton = styled.button`
  width: 48px;
  height: 48px;
  margin: 0 10px;
  background: none;
  border: none;

  & img{
    width: 100%;
  }
`
S.ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* 모달 컨테이너 우선순위 */
`;

S.ModalStyle = styled.div`
  background-color: #1a1b1e;
  padding: 20px;
  z-index: 1000;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px; /* 모달 너비 */
  text-align: center;
`;

export default S;