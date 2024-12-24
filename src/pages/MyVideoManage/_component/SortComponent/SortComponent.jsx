import React from 'react';
import S from './style'
// 실시간 스트리밍 div를 눌렀을때 dropdown으로 보여지는 메뉴 컴포넌트

const SortComponent = ({type, onClick}) => {
    return (
        <S.TypeBoxWrapper style={{cursor:'pointer'}} onClick={onClick}>
            <S.TypeText>{type}</S.TypeText>
        </S.TypeBoxWrapper>
    );
};

export default SortComponent;