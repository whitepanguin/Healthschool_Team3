import styled from 'styled-components';

const S = {};

S.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  // background-color: #f9f9f9;
`;

S.Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  // background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  width: 80%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

S.ImageSection = styled.div`
  grid-column: 1 / 2;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

S.ContentSection = styled.div`
  grid-column: 2 / 3;
  padding: 20px;
  border-left: 1px solid #ddd;

  h3 {
    margin: 0 0 10px 0;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    margin: 0 0 10px 0;
    font-size: 0.9rem;
    // color: #666;
  }
`;

S.Tags = styled.div`
  margin-top: 10px;
  span {
    display: inline-block;
    background-color: #eee;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 0.8rem;
    margin-right: 5px;
    color: #333;
  }
`;

S.PriceSection = styled.div`
  grid-column: 3 / 4;
  padding: 20px;
  // background-color: #f5f5f5;
  border-left: 1px solid #ddd;

  p {
    margin: 10px 0;
    font-size: 1rem;
    &:first-child {
      font-weight: bold;
    }
  }
`;

S.Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #0066cc;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #005bb5;
  }
`;

export default S;
