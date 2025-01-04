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

S.QnaContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  min-height: 800px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

S.QnaTitle = styled.h2`
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 20px;
`;

S.QnaList = styled.ol`
  padding-left: 20px;
  margin: 0;
  list-style: decimal;
  cursor: pointer;
`;

S.QnaItem = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1.2em;
`;


S.QnaAnswer = styled.div`
  max-height: ${(props) => (props.isOpen ? "100px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
  padding: ${(props) => (props.isOpen ? "10px" : "0 10px")};
  font-size: 1em;
  border: ${(props) => (props.isOpen ? "1px solid #ddd" : "none")};
  border-radius: 5px;
  cursor: auto;
`;

S.NoAnswer = styled.div`
  color: #3D6AFF;
  font-size: 1em;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #d9363e;
  }
`;

export default S;