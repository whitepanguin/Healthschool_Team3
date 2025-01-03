import styled from "styled-components";
const S = {};
S.CommentWrapper = styled.div`
    width: 1500px;
    display: flex;
    position: relative;
`
S.UserImageWrapper = styled.img`
    width:  50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 10px;
`
S.InputBox = styled.input`
    width: 1600px;
    height: 160px;  
`
S.CommentBox = styled.div`
  width: 1200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-size: 14px;
  color: #000;
  resize: none;
  overflow-y: hidden;
  white-space: pre-wrap;
  min-height: 50px;
 
  &:empty:before {
    content: "댓글을 작성하세요...";
    color: #7f7f7f;
  }

  /* 기본 스타일을 초기화하여 브라우저 스타일을 덮어씀 */
  & * {
    color: #000;
  }
`;
S.SubmitButton = styled.button`
  width: 50px;
  height: 35px;
  background-color: ${({ disabled }) => (disabled ? '#f7f7f7' : '#065fd4')}; /* 활성화시 파란색 */
  color: ${({ disabled }) => (disabled ? '#909090' : '#fff')}; /* 활성화시 흰색 텍스트 */
  border-radius: 18px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; /* 비활성화시 포인터가 아닌 커서 */
`;
S.CancelButton = styled.button`
  width: 50px;
  height: 35px;
  color: white;
  border-radius: 18px;
  border: none;
  background-color:#1a1b1e;
  cursor: pointer;
  &:hover{
    background-color: #065fd4;
    color: #fff;
  }
`;

export default S;