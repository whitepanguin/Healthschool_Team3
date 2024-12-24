import React from "react";
import styled from "styled-components";

const S = {}

S.TypeBoxWrapper= styled.div`
    width: 200px;
    height: 40px;
    background-color: #fff;
    border : 1px solid #717171;
    display: flex;
    align-items: center;
`
S.TypeText = styled.div`
    font-size: 14px;
    margin-left: 8px;
    color: black;
    `
S.Toggle = styled.img`
    width: 15px;
    height: 9px;
    margin-left: 150px;
`
S.SortWrapper = styled.div`
    margin-bottom: 40px;
    margin-top: 40px;
    position: relative;
    /* display: flex; */
    /* justify-content: flex-end; */
    /* flex-direction: column; */
    
  
  input {
    width: 200px;
    height: 40px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    color : #000;
  }
`
export default S;