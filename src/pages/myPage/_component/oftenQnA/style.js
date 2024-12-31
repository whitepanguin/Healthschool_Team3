import styled from "styled-components";

const S = {}

S.Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 100%;
  margin: 0 auto;
`;

S.Column = styled.div`
  width: 50%;
`;

S.Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

S.TableRow = styled.tr`
  &:last-child td {
    border-bottom: none; /* 마지막 행의 모든 셀 하단 테두리 제거 */
  }
`;

S.TableCell = styled.td`
  padding: 10px;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
`;

S.NumberCell = styled.td`
  padding: 10px;
  text-align: center;
  font-size: 14px;
  width: 50px;
  border-bottom: 1px solid #ddd;
  color: #4279FF;
`;

S.DateCell = styled.td`
  text-align: center;
  font-size: 12px;
  border-bottom: 1px solid #ddd;
  color: #8A8A8A;
  width: 80px;
  `;

S.ViewsCell = styled.td`
  text-align: center;
  font-size: 12px;
  border-bottom: 1px solid #ddd;
  color: #8A8A8A;
  width: 80px;
`;

export default S;