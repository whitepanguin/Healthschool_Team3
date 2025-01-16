import styled from "styled-components";

const S = {};

S.topic = styled.h1`
    text-align: center;
    font-size: 32px;
    margin: 20px 10px;
`

S.main = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 500px;
    border: 1px solid white;
`

S.footer = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

S.backButton = styled.button`
    width: 200px;
    height: 70px;
    color: #fff;
    background-color: #3D6AFF;
    border-radius: 8px;
    box-shadow: 2px 2px 2px rgba(225, 225, 225, 0.7);
    margin: 0 auto;
`

export default S;