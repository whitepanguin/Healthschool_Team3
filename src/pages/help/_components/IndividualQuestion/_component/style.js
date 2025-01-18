import styled from "styled-components";

const S  = {}

S.Wrap = styled.div`
    width: 100%;
    height: 100%;

`
S.form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`

S.TitleInputBox = styled.input`
    width: 60%;
    height: 50px;
    color: #000;
`
S.ContentBox = styled.input`
   width: 60%;
   height: 40%;
   line-height: 40%;
   color: #000;
`

S.CancelOrSubmit = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

S.CancelBtn = styled.button`
    width: 200px;
    height: 50px;
    background: #3D6AFF;
    box-shadow: 2px 2px 2px rgba(225, 225, 225, 0.7);
    border-radius: 8px;
`

S.SubmitBtn = styled.button`
  width: 200px;
  height: 50px;
  background: #3D6AFF;
  box-shadow: 2px 2px 2px rgba(225, 225, 225, 0.7);
  border-radius: 8px;
`

export default S;