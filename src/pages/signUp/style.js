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

S.ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  margin-bottom: 17px;
`

export default S;