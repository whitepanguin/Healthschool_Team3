import styled from "styled-components";

const S = {};

S.SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

S.SwitchWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

S.Switch = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
  background: ${({ $on, disabled, theme }) =>
    disabled
      ? theme.PALLETE.gray["500"]
      : $on
      ? theme.PALLETE.primary["main"]
      : theme.PALLETE.gray["500"]};
  border-radius: 12px;
`;

S.Knob = styled.div`
  position: absolute;
  top: 2px;
  left: ${({ $on }) => ($on ? "26px" : "2px")};
  width: 20px;
  height: 20px;
  background: ${({ disabled, theme }) =>
    disabled ? theme.PALLETE.gray["900"] : theme.PALLETE.white};
  border-radius: 50%;
  transition: left 0.3s;
`;

S.Label = styled.span`
  font-size: 16px;
`;

export default S;
