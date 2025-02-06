import React from 'react';
import S from './style';
import BasicTag from '../tag/BasicTag';

const MediaCard = ({userProfile, title, date, description,nickname,viewCount, likeCount,videoUrl, imageUrl, instructor, tags ,id }) => {
    return (
        <S.CardContainer>
            <S.ImageWrapper>
                <S.Image src={imageUrl} alt={title} />
                <S.ProfileWrapper>
                    <S.Profile src={userProfile} alt={instructor} />
                </S.ProfileWrapper>
            </S.ImageWrapper>
            <S.Content>
                <S.Instructor>
                    {instructor} | {date} | {viewCount}회
                </S.Instructor>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
                {tags && (
                    <div style={{ display: 'flex', gap: 2, marginTop: 10 }}>
                        {tags.map((tag, i) => (
                            <BasicTag key={i} tag={600}>
                                {tag}
                            </BasicTag>
                        ))}
                    </div>
                )}
            </S.Content>
        </S.CardContainer>
    );
};


export default MediaCard;