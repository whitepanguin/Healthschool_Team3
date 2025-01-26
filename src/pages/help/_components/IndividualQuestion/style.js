import styled from "styled-components";

const S = {};


S.Header = styled.header`
    display : flex;
    flex-direction : column;
    align-items: center;
    margin-bottom : 50px

`


S.Main = styled.main`
    width: 100%;
    height: 60%;
`

S.Notice = styled.div`
    width : 100%;
    height : 70px;
    padding : 20px;
    margin-bottom : 20px;
    border : 1px solid #fff;
    display :flex;
    align-items : center;
`

S.Topic = styled.div`
    width : 15%;
    height : 100%;
    display : flex;
`

S.title = styled.div`
    width : 50%;
    height : 70px;
    padding : 10px 20px;
    border-radius : 30px;
    border : 1px solid #fff;
`

S.h1 = styled.h1`
    text-align : center;
    font-size : 48px;
`

S.h3 = styled.h3`
    text-align : center;
    font-size : 28px;
`

S.h4 = styled.h4`
    text-align : center;
    font-size : 24px;
`


S.Account = styled.div`
    width : 100%;
    height : 600px;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    gap : 20px;
    align-items: center;
`

S.AccountTextBox = styled.input.attrs({ type: 'text' })`
    margin: 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 80%;
    height: 350px;
    color: #000;
    padding: 10px;
    line-height: 20px; 
    display : flex;
    align-items: start;

`;

S.InputCheck = styled.input.attrs({ type: 'checkbox' })`
    width : 25px;
    height : 25px;
`


S.SubmitBtn = styled.button`
    width : 500px;
    height : 70px;
    background-color : #3D6AFF;
    border-radius : 8px;
    font-size : 24px;
`


S.ViewDetails = styled.h3`
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3D6AFF;
    box-shadow: 2px 2px 2px rgba(225, 225, 225, 0.7);
    border-radius: 8px ;
  &:hover{
   background-color: blue;
   cursor: pointer;
  }
`


S.ContentBox = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #fff;
  margin-bottom : 10px;
`

export default S ;