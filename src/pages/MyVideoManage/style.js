import styled from "styled-components";
const S = {};
S.VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  display: flex; /* flexbox 사용 */
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
`;

S.Video = styled.video`
  width: 100%; /* Video의 너비를 90%로 설정 */
  height: 100%; /* Video의 높이를 90%로 설정 */
  background-color: aquamarine;
`;
S.VideoListWrapper = styled.div`
    width: 30%;
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