import styled from "styled-components";
import { flexCenterColumn, flexCenterRow } from "../../../../global/common";

const S = {};

S.Wrapper = styled.div`
  width: 215px;
  height: 100%;
  ${flexCenterRow}
`;

S.ImagesWrapper = styled.div`
  width: 80px;
  height: 80px;
`

S.HomeIconText = styled.p`
  color: #fff;
  font-size: 35px;
`;

export default S;
