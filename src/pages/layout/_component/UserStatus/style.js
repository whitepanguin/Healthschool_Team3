import styled from "styled-components";

const S = {};

S.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  gap: 16px;
`;

S.ImagesWrapper = styled.div`
  width: 22px;
  height: 25px;
`;

S.Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

S.UserName = styled.div`
  height: 32px;
  background-color: ${({ theme }) => theme.PALLETE.primary["main"]};
  padding: 0 5px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    color: #fff;
  }
`;

export default S;
