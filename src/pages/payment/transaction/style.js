import styled from 'styled-components';

const S = {};

// 전체 컨테이너
S.Container = styled.div`
  width: 700px;
  margin: 0 auto;
  font-family: 'Arial, sans-serif';
  color: #333;
  /* background-color: #fff; */
`;

// 이미지 박스
S.ImageBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

S.Image = styled.img`
  width: 300px;
  height: 170px;
  object-fit: cover;
  border-radius: 10px;
`;

S.TextBox = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

S.SmallText = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0 0 5px;
`;

S.Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
`;

S.Description = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;
`;

// 주문 섹션
S.OrderSection = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 20px;
`;

S.OrderRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

S.Label = styled.div`
  font-weight: bold;
  width: 50px;
`;

S.Content = styled.div`
  flex: 1;
  font-size: 14px;
`;

S.Price = styled.div`
  font-weight: bold;
`;

// 배송지 섹션
S.DeliveryBox = styled.div`
  /* background-color: #f7f7f7; */
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

S.DeliveryLabel = styled.h3`
  font-size: 14px;
  margin-bottom: 10px;
`;

S.DeliveryInfo = styled.div`
  font-size: 14px;
  line-height: 1.6;
`;

S.BoldText = styled.p`
  font-weight: bold;
  margin: 0;
`;

S.Address = styled.p`
  margin: 5px 0 0;
`;

// 결제 완료 메시지
S.Confirmation = styled.h2`
  text-align: right;
  font-weight: bold;
  color: #000;
  font-size: 18px;
`;

export default S;
