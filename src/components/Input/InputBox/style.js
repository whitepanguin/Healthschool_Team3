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
  border: 2px solid
    ${({ $isFocused  }) => ($isFocused ? "#333333" : "#8D8D8D")};
  background-color: ${({ $isFocused  }) =>
    $isFocused ? "#FFFFFF" : "#D9D9D9"};
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  transition: all 0.2s ease-in-out;
  color: #000;
`;

export default S;
