import React, { useState } from 'react';
import S from './style';

const VideoInform = ({ userImage, userId, subscribeNum, userName, postTitle,viewCount,postDate }) => {
    // 상태 추가: initial state는 yelloStar 이미지로 설정
    const [isFavorite, setIsFavorite] = useState(false);  // true이면 yelloStar, false이면 whiteStar

    // 클릭 시 이미지 변경하는 함수
    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);  // 상태 토글
    };

    return (
        <S.WholeWrapper>
            <S.InformWrapper>
                <S.UserImageWrapper src={userImage} />
                <S.UserInformWrapper>
                    <div style={{ fontSize: '14px', color: 'white' }}>{`${userName}`}</div>
                    <S.ViewCountAndEdit>{`${userId}ㆍ구독자${subscribeNum}`}</S.ViewCountAndEdit>
                </S.UserInformWrapper>
                
                {/* FavoriteWrapper 클릭 시 이미지 변경 */}
                <S.FavoriteWrapper onClick={handleFavoriteClick}>
                    <img 
                        src={process.env.PUBLIC_URL + (!isFavorite ? "/images/myVideoManage/whiteStar.png" : "/images/myVideoManage/yellowStar.png")} 
                        alt="star" 
                    />
                    <span style={{ color: 'black' }}>즐겨찾기</span>
                </S.FavoriteWrapper>
            </S.InformWrapper>
            <S.postTitleDiv>
                <div>{postTitle}</div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <S.ViewCountImg src={process.env.PUBLIC_URL + "/images/myVideoManage/ViewCountImg.png"} alt="X"/>
                    <S.ViewCountAndEdit>{`${viewCount}ㆍ${postDate}`}</S.ViewCountAndEdit>
                </div>
            </S.postTitleDiv>
        </S.WholeWrapper>
    );
};

export default VideoInform;
