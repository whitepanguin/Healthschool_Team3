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
S.SelectUserText = styled.label`
    color: #717171;
    font-size: 14px;
    padding-bottom: 10px;
`



S.ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end; /* 버튼을 오른쪽으로 정렬 */
  margin-top: 15px; /* 버튼 위에 여백 추가 */
`;

S.PrevButton = styled.button`
  padding: 10px 20px;
  background-color: rgba(0,0,0,0.3); /* 버튼 색상 */
  color: #fff;
  border-radius: 15px;
  width: 90px;
  height: 35px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  &:hover {
    background-color: #000; /* 호버 시 색상 변경 */
  }
`;
S.SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #fff; /* 버튼 색상 */
  color: #000;
  border-radius: 15px;
  width: 90px;
  height: 35px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  &:hover {
    background-color: #717171; /* 호버 시 색상 변경 */
  }
`;
S.RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* 옵션 간의 간격 */
  width: 640px;
  height: 170px;
  border: 1px solid white;
`;

S.RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 2px solid ${({ isChecked }) => (isChecked ? "#007bff" : "#555")};
  border-radius: 8px;
  background-color: ${({ isChecked }) => (isChecked ? "#e8f4ff" : "#444")};
  color: ${({ isChecked }) => (isChecked ? "#007bff" : "#fff")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #007bff;
  }
`;

S.RadioInput = styled.input`
  display: none; /* 기본 라디오 버튼 숨기기 */
`;

S.RadioTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    color: ${({ isChecked }) => (isChecked ? "#007bff" : "#ccc")};
    margin: 0;
  }
`;
S.RangeWrapper = styled.div`
  margin-top: 25px;
  width: 640px;
  height: 170px;
  border: 1px solid #fff;
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 18px; */
`
S.RadioDiv = styled.div`
  color: #717171;
  font-size: 14px;
  margin-left: 37px;
  margin-bottom: 18px;
`
S.TagInput = styled.input`
  color: black;
  width: 400px;
`
S.TagWrapper = styled.div`
  margin-top: 25px;
  width: 640px;
  height: 170px;
  border: 1px solid #fff;
  background-color: #333;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* gap: 18px; */
  padding: 24px;
`
S.TagButton = styled.button`
  background-color: #ff4d61;
  color: #fff;
`
S.TagItem = styled.span`
  display: inline-block;
  background: #fff;
  color: #333;
  padding: 4px 8px;
  margin-right: 8px;
  border-radius: 12px;
  margin-bottom: 8px;
  font-size: 14px;
`;
S.CancelButton = styled.button`
  background-color: #fff;
  color: #333;
`
export default S;
