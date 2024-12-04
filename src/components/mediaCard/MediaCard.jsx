import React from 'react';
import S from './style';

const MediaCard = ({ title, date, description, imageUrl, instructor }) => {
    return (
        <S.CardContainer>
            <S.ImageWrapper>
                <S.Image src={imageUrl} alt={title} />
                <S.ProfileWrapper>
                    <S.Profile src={imageUrl} alt={instructor}/>
                </S.ProfileWrapper>
            </S.ImageWrapper>
            <S.Content>
                <S.Instructor>{instructor} | {date}</S.Instructor>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.Content>
        </S.CardContainer>
    );
};

export default MediaCard;