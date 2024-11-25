import { css } from "styled-components";

export const felxCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexCenterColumn = css`
  ${felxCenter}
  flex-direction: column;
`

export const flexCenterRow = css`
  ${felxCenter}
  flex-direction: row;
`

export const boxStyle = css`
  width: 100px;
  height: 100px;
  background-color: orange;
`
