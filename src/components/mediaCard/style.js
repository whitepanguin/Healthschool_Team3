import styled from "styled-components";

const S = {};

S.CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 372px;
  border-radius: 8px;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

S.ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
`;

S.Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

S.ProfileWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 14px;
  bottom: -20px;
  border-radius: 50px;
  border: 5px solid #1A1B1E;
  overflow: hidden;
`

S.Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

S.Content = styled.div`
  padding: 16px;
`;

S.Instructor = styled.span`
  display: inline-block;
  font-size: 14px;
  margin-bottom: 8px;
`;

S.Title = styled.h3`
  font-size: 18px;
  margin: 8px 0;
  line-height: 1.4;
`;

S.Date = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 12px;
`;

S.Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #ddd;
`;

export default S;
