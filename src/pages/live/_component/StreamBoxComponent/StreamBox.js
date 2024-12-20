import React from 'react';
import S from './style'
// 실시간 스트리밍 div를 눌렀을때 dropdown으로 보여지는 메뉴 컴포넌트

const StreamBox = ({title, onClick}) => {
    return (
        <S.StreamBoxWrapper style={{cursor:'pointer'}} onClick={onClick}>
            <S.StreamImg src={process.env.PUBLIC_URL + "/images/live/StreamImg.png"} alt="Stream Image"/>
            <S.StreamText>{title}</S.StreamText>
          
        </S.StreamBoxWrapper>
    );
};

export default StreamBox;