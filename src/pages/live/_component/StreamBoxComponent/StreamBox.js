import React from 'react';
import S from './style'
import StreamImg from './StreamImg.png'
import Toggle from './toggle.png'
const StreamBox = ({title, onClick}) => {
    return (
        <S.StreamBoxWrapper onClick={onClick}>
            <S.StreamImg src={StreamImg} alt='StreamImg'/>
            <S.StreamText>{title}</S.StreamText>
            <S.Toggle src={Toggle}/>
        </S.StreamBoxWrapper>
    );
};

export default StreamBox;