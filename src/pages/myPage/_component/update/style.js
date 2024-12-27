import styled from "styled-components";
import { flexCenterColumn} from "../../../../global/common";

const S = {};

S.Form = styled.div`
    width : 765px;
    margin : 50px auto;
    border : 1px solid #ddd;
    border-radius : 15px;
    padding : 50px;
    box-shadow : 0 4px 8px rgba(0, 0, 0, 0.1);
    ${flexCenterColumn}
    gap: 15px;
`
S.FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 600px;
  gap: 10px;
`

S.Input = styled.input`
  background-color: #f1ebf5;
  border-radius: 10px;
  width: 180px;
  height: 10px;
  aspect-ratio: 8 / 1;
  padding: 16px;
  color: #333;
  border: none;
  margin: 0 10px;
  `
S.InputAddrDetail = styled.input`
  background-color: #f1ebf5;
  border-radius: 10px;
  width: 100%;
  height: 10px;
  aspect-ratio: 8 / 1;
  padding: 16px;
  color: #333;
  border: none;
  margin: 0 10px;
`

S.ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 30px;
`



S.Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80px;
    width: 450px;
    gap: 10px;
`
S.InfoHead = styled.h2`
    text-align: left;
    font-size: 20px;
    border-bottom: 1px solid;
`

S.profileData = styled.p`
    padding-left: 10px;
    font-size: 15px;
`


export default S;



// info: {
//   textAlign: "left",
//   fontSize: "16px"
// }