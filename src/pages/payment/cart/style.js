import styled from 'styled-components';

const S = {};

S.Wrapper = styled.div`
  padding: 2rem;
  background-color: #111;
  color: #fff;
`;

S.Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;
S.CartItem = styled.div`
  display: flex;
  background: #333;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

S.CheckboxWrapper = styled.div`
  margin-right: 1rem;
`;

S.Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-right: 1rem;
`;

S.Content = styled.div`
  flex: 1;
`;

S.Title = styled.h3`
  margin: 0 0 0.5rem;
`;

S.Description = styled.p`
  font-size: 0.875rem;
  margin: 0 0 0.5rem;
`;

S.Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #aaa;
`;
S.Tag = styled.span`
  background: #444;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

S.Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

S.ExtraCost = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

S.Price = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;
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
S.Button = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

S.PriceSection = styled.div`
  grid-column: 3 / 4;
  padding: 70px;
  // background-color: #f5f5f5;
  border-left: 1px solid #ddd;
  margin: auto;

  p {
    margin: 20px 0;
    font-size: 1rem;
    &:first-child {
      font-weight: bold;
    }
  }
`;


export default S;
