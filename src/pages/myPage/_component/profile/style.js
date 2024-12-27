import styled from "styled-components";
import { flexCenterColumn} from "../../../../global/common";

const S = {};

S.profileWrapper = styled.div`
    width : 765px;
    margin : 50px auto;
    border : 1px solid #ddd;
    border-radius : 15px;
    padding : 50px;
    box-shadow : 0 4px 8px rgba(0, 0, 0, 0.1);
    ${flexCenterColumn}
    gap: 15px;
`
S.ProfileInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 80px;
    width: 450px;
    gap: 10px;
`
S.ProfileInfoHead = styled.h2`
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