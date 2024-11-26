import styled from "styled-components";

const S = {};

S.SearchWrapper = styled.div`
  position: relative;
  width: 640px;
  height: 44px;

  & .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px; /* input 안쪽 왼쪽에 배치 */
    path {
      color: #fff;
    }
    font-size: 18px;
  }
`;

S.SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  background-color: #1a1b1e;
  border-radius: 22px;
  color: #fff;
  padding: 0 10px 0 10px;
`;

export default S;
