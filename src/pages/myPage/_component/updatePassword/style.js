import styled from "styled-components";
import { flexCenterColumn} from "../../../../global/common";

const S = {};

S.Form = styled.div`
    width : 765px;
    height: 500px;
    margin : 50px auto;
    border : 1px solid #ddd;
    border-radius : 15px;
    padding : 50px;
    box-shadow : 0 4px 8px rgba(0, 0, 0, 0.1);
    ${flexCenterColumn}
    justify-content: space-between;
    gap: 15px;
`



S.Input = styled.input`
  background-color: #f1ebf5;
  border-radius: 10px;
  width: 400px;
  height: 60px;
  aspect-ratio: 8 / 1;
  padding: 16px;
  color: #333;
  border: none;
  margin: 0 10px;
  `
  S.InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    gap: 20px;
    align-items : center;
  `
  S.InputNewPassword = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  `

S.ButtonWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`






export default S;



// info: {
//   textAlign: "left",
//   fontSize: "16px"
// }