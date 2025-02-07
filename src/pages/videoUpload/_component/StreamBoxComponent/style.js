import React from "react";
import styled from "styled-components";

const S = {}

S.StreamBoxWrapper= styled.div`
    width: 300px;
    height: 50px;
    background-color: #282828;
    border : 1px solid #717171;
    margin-top: 5px;
    display: flex;
    align-items: center;
`
S.StreamImg = styled.img`
    width: 22px;
    height: 22px;
    margin-left: 10px;
`
S.StreamText = styled.div`
    font-size: 15px;
    margin-left: 8px;
    width: 60px;
`
S.Toggle = styled.img`
    width: 20px;
    height: 10px;
    margin-left: 150px;
`

export default S;