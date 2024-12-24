import React from "react";
import styled from "styled-components";

const S = {};
S.InformWrapper = styled.div`
    width: 1200px;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
S.ViewCountAndEdit = styled.div`
    font-size: 11px;
    color: #7f7f7f;
`

export default S;
