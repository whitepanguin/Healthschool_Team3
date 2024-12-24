import styled from "styled-components";

const S = {};
S.Video = styled.div`
    width: 1200px;
    height: 600px;
    background-color: aquamarine;
    
    /* margin-top: 70px; */
`
S.VideoListWrapper = styled.div`
    width: 420px;
    height: 600px;
    background-color: #1a1b1e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border : 2px solid black;
    
`;

S.SortWrapper = styled.div`
    margin-bottom: 20px;
    margin-top: 40px;
    position: relative;
    
  
  input {
    width: 200px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    color : #000;
  }
`;
export default S;