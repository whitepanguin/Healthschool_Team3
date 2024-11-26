import styled from "styled-components";
// BasicInput

const S = {};

S.InputWrapper = styled.div`
  width: 100%;
  min-width: 200px;
`;

S.Input = styled.input`
  width: 220px;
  height: 42px;
  border: 2px solid
    ${({ isFocused, state }) =>
      state === "error"
        ? "#FF0000" // 오류 상태
        : state === "success"
        ? "#00FF00" // 성공 상태
        : isFocused
        ? "#333333" // 포커스 상태
        : "#8D8D8D"}; // 기본 상태
  background-color: ${({ isFocused, state }) =>
    state === "error"
      ? "#FFECEC" // 오류 배경
      : state === "success"
      ? "#ECFFEC" // 성공 배경
      : isFocused
      ? "#FFFFFF" // 포커스 배경
      : "#D9D9D9"}; // 기본 배경
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  transition: all 0.2s ease-in-out;
  color: #000;
`;

S.ErrorMessage = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #FF0000;
`;

S.SuccessMessage = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #00FF00;
`;

export default S;
