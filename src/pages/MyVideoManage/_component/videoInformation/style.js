import styled from "styled-components";
const S= {};
S.WholeWrapper = styled.div`
    width: 1300px;
    height: 100px;
    flex-direction: column;
    display: flex;
`
S.InformWrapper = styled.div`
    width: 1300px;
    height: 62px;
    display: flex;
    align-items: center;
`
S.UserInformWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 0;
`
S.UserImageWrapper = styled.img`
    width:  50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 10px;
`
S.UserNameText = styled.div`
    align-items: center;
    display: flex;
    padding-left: 5px;
    color: #7f7f7f;
    font-size: 11px;
`
S.ViewCountAndEdit = styled.div`
    font-size: 11px;
    color: #7f7f7f;
`
S.ViewCountImg = styled.img`
    width: 10px;
    height: 11.43px;
`
S.FavoriteWrapper = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    background-color: #fff;
    width: 130px;
    height: 30px;
    border-radius: 15px;
    margin-left: 20px ;
    padding-left: 23px;
    cursor: pointer;
`
S.postTitleDiv = styled.div`
    width: 1300px;
    height: 38px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    
`
S.ViewCountImg = styled.img`
    width: 10px;
    height: 11.43px;
`
export default S;
