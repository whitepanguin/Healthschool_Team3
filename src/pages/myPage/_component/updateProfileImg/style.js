import styled from "styled-components";
import { flexCenterColumn } from "../../../../global/common";

const S = {};

  S.Wrapper = styled.div`
    ${flexCenterColumn};
    width : 765px;
    margin : 50px auto;
    border : 1px solid #ddd;
    border-radius : 15px;
    padding : 50px;
    box-shadow : 0 4px 8px rgba(0, 0, 0, 0.1);
    gap: 100px;
  `

  S.Label = styled.label`
    display: block;
    width: 200px;
    height: 200px;
  `

  S.Profile = styled.img`
    display: block;
    width: 200px;
    height: 200px;
    background-color: #d9d9d9;
    overflow: hidden;
    border-radius: 50%;
  `

  S.Button = styled.button`
    cursor: pointer;
    width: 200px;
    height: 50px;
  `

export default S;