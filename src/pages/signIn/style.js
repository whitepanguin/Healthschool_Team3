import styled from 'styled-components';

const S = {}

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
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

export default S;