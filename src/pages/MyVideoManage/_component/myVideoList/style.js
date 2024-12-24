import styled from "styled-components";
const S = {};

S.ImageWrapper = styled.img`
    width: 160px;
    height: 106px;
    border-radius: 10px;
    

`
S.UserImageWrapper = styled.img`
    width:  22px;
    height: 22px;
    border-radius: 100%;
`
S.UserNameText = styled.div`
    align-items: center;
    display: flex;
    padding-left: 5px;
    color: #7f7f7f;
    font-size: 11px;
`
S.VideoTitleText = styled.div`
    color: #fff;
    font-size : 13px;
`
S.ViewCountImg = styled.img`
    width: 10px;
    height: 11.43px;
`
S.ViewCountAndEdit = styled.div`
    font-size: 11px;
    color: #7f7f7f;
`
export default S;