import styled from "styled-components";
//InputBox

const S = {};

S.InputWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;

S.Input = styled.input`
  width: 420px;
  height: 140px;
  background-color: ${({ $isFocused  }) =>
    $isFocused ? "#FFFFFF" : "#D9D9D9"};
  border-radius: 10px;
  padding: 0 10px;
  font-size: 16px;
  border: 0;
  outline: none;
  transition: all 0.2s ease-in-out;
  color: #000;
`;

export default S;
