import styled from 'styled-components';

const S = {}

S.Container = styled.div`
  background: #1d1d1f;
  color: white;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

S.Header = styled.h2`
  margin-bottom: 10px;
  color: #bbb;
`;

S.Section = styled.div`
  margin-bottom: 20px;
`;

S.AddressBox = styled.div`
  background: #333;
  padding: 15px;
  border-radius: 8px;
  position: relative;
`;

S.Title = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

S.AddressInfo = styled.div`
  line-height: 1.6;
`;

S.Name = styled.div`
  font-weight: bold;
`;

S.Phone = styled.div``;

S.Address = styled.div``;

S.EditButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #555;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`;

S.MemoBox = styled.div`
  margin-top: 10px;
`;

S.CheckBox = styled.input``;

S.MemoText = styled.label`
  margin-left: 5px;
`;

S.Select = styled.select`
  margin-top: 10px;
  width: 100%;
  padding: 8px;
  background: #444;
  color: white;
  border: none;
  border-radius: 5px;
`;

S.ReuseBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

S.ReuseText = styled.label`
  margin-left: 5px;
`;

S.OrderHeader = styled.h3`
  margin-bottom: 5px;
`;

S.DateText = styled.div`
  color: #aaa;
`;

S.FeeText = styled.div`
  color: #888;
  text-align: right;
`;

S.OrderBox = styled.div`
  background: #222;
  padding: 10px;
  border-radius: 8px;
`;

S.Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0px 5px 0px;
`;

S.Additional = styled(S.Product)``;

S.ProductTitle = styled.div``;

S.Price = styled.div`
  font-weight: bold;
`;

S.PaymentTitle = styled.h3``;

S.PaymentOptions = styled.div`
  display: flex;
  gap: 10px;
`;

S.RadioButton = styled.input`
  margin-right: 5px;
`;

S.CardBox = styled.div`
  background: #444;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.CardText = styled.div`
  font-size: 1.2em;
`;

S.TotalAmount = styled.div`
  font-size: 1.4em;
  font-weight: bold;
`;
S.CheckOn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
S.ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  font-size: 1em;
  float: right;
`;

S.ProgressStep = styled.span`
  color: ${(props) => (props.active ? '#3b82f6' : '#888')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

S.Arrow = styled.span`
  margin: 0 8px;
  color: #888;
`;
S.buttonNext = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px; /* 오른쪽으로부터 20px 간격 */
`;

S.InputAddrDetail = styled.input`
  background-color: #f1ebf5;
  border-radius: 10px;
  width: 100%;
  height: 10px;
  aspect-ratio: 8 / 1;
  padding: 16px;
  color: #333;
  border: none;
  margin: 0 10px;
`

export default S;
