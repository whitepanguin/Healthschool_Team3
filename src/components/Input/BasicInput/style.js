import styled from "styled-components";
// BasicInput

const S = {};

S.InputWrapper = styled.div`
  width: 100%;
  min-width: 200px;
`;

S.Input = styled.input`
  width: ${({ width }) => width || '220px'};
  height: ${({ height }) => height || '42px'};
  border-radius: 10px;
  background-color: ${({ $isFocused, state }) =>
    state === "error"
      ? "#FFECEC" // 오류 배경
      : state === "success"
      ? "#ECFFEC" // 성공 배경
      : $isFocused
      ? "#FFFFFF" // 포커스 배경
      : "#D9D9D9"}; // 기본 배경
  padding: 10px;
  border: 0;
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
