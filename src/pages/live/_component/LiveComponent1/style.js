import React from "react";
import styled from "styled-components";

const S = {}
// Styled Components
S.ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

S.ModalContent = styled.div`
  margin-top: 50px;
  background: #333;
  width: 800px;
  height: 700px;
  border-radius: 30px;
  position: relative;
  /* display: flex; */
  flex-direction: column;
  padding-left: 15px;

`;
S.TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
S.TitleDiv= styled.div`
    position: relative;
    font-size: 25px;
    margin-top:15px;
`
S.xImg = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 15px;
    margin-top: 15px;
    cursor: pointer;
`
S.Information =styled.div`
    font-size: 25px;
    font-weight: 500;
    margin-top: 20px;
`
S.InformationWrapper = styled.div`
    margin-top:23px;
    width: 770px;
    height: 80px;
    border : 1px solid #ff8983;
    border-radius: 5px;
    padding-left: 5px;
    margin-bottom: 20px;
`
S.InputTitle = styled.div`
    color: #ff8983;
    font-size: 14px;
    margin-bottom: 5px;
`
S.Input = styled.input`
    all: unset;
    background-color:#333;
    width: 750px;
    ::placeholder{
        color: #717171;
        font-size: 14px;
    }
`
S.StreamLabel = styled.label`
    color: #717171;
    font-size: 14px;
`
S.PostThumbNailImg = styled.img`
  width:  ${({ isCustomImage }) => (isCustomImage ? "150px" : "50px")}; 
  height: ${({ isCustomImage }) => (isCustomImage ? "150px" : "50px")}; 
  border-radius: 10px;
`;

S.Label = styled.label`
    display: block; /* block-level 요소로 변경 */
    width: 150px;
    height: 150px;

`
S.ImgBackground = styled.div`
    height: 150px;
    width: 150px;
    margin-top: 10px;
    border-radius: 30px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
S.InputWrapper = styled.div`
  

  /* 자식 요소 S.Input 스타일링 */
  input {
    width: 200px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default S;
