import styled from 'styled-components';

const S = {};

S.Title = styled.div`
    width : 100%;
    height : 120px;
    display: flex;
    flex-direction: column;
    align-items : center
`

S.MainTitle = styled.h1`
  font-size: 32px;
  margin : 10px
`;

S.Management = styled.h2`
    font-size: 25px;
    margin: 10px;
    border-bottom : 1px solid #fff;
`;

S.h3 = styled.h3`
    font-size: 20px;
    margin: 10px;
`;

S.Main = styled.div`
    width : 100%;
    height : 100%;
`

S.Li = styled.li`
    list-style:none;
`;

S.Container = styled.div`
    margin : 50px;
`;

S.ContainerBox = styled.div`
    width : 100%;
    height : 70px;
    font-size : 20px;
    padding : 10px;
    margin: 10px;
    border : 1px solid #fff;
    display: flex;
    justify-content : space-between;
    align-items : center;
`;

S.ArrowImg = styled.img`
    width : 40px;
    height : 40px;
`;

S.Nav = styled.div`
    width: 100%;
    height: 100px;
    padding: 10px;
    margin: 10px;
    background-color: #d9d9d9;
    border: 1px solid white;
    margin-top: 10px;
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};  // display 값이 isVisible에 따라 변경됩니다.
`;

export default S;
