import styled from "styled-components";


const S = {};

S.Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

S.Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative; /* 버튼을 정확한 위치로 이동하기 위해 추가 */
`;
S.FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 80px;
  gap: 10px;
border-bottom: 1px solid #fff;
`

S.Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #fff;

`;

S.Input = styled.input`
  background-color: #f1ebf5;
  border-radius: 10px;
  width: 300px;
  height: 10px;
  aspect-ratio: 8 / 1;
  padding: 16px;
  color: #333;
  border: none;
  margin: 0 10px;
  `

S.FileList = styled.ul`
  margin-top: 10px;
  padding: 0;
  list-style: none;
  width: 300px;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 4px;
  text-align: left;
  `;
S.FileItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 8px;
`;

S.RemoveButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 3px;
  border: none;
  padding: 2px 6px;
  cursor: pointer;
`;

/* 내 PC 버튼 스타일 (리스트 외부) */
S.FileButton = styled.button`
  background-color: #7f7f7f;
  color: white;
  border: none;
  width: 70px;
  border-radius: 15px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 200px;
  align-self: flex-end; /* 오른쪽 정렬 */
`;

S.HiddenInputs = styled.input`
  display: none;
`;

S.ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 30px;
`

export default S
