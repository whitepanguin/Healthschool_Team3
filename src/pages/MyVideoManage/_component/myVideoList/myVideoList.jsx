import React from 'react';
import S from './style'
// 동영상 리스트 개별 컴포넌트
const VideoList = ({image, videoTitle,viewCount,userName,userImage, postDate}) => {
    return (
        <div style={{display: 'flex', gap: '10px' }}>
            <S.ImageWrapper src={image} alt='오류'/>
            <div style={{display: 'flex', flexDirection:'column'}}>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <S.UserImageWrapper src={userImage} alt="오류"/>
                    <S.UserNameText>{userName}</S.UserNameText>
                </div>
                <S.VideoTitleText>{videoTitle}</S.VideoTitleText>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <S.ViewCountImg src={process.env.PUBLIC_URL + "/images/myVideoManage/ViewCountImg.png"} alt="X"/>
                    <S.ViewCountAndEdit>{`${viewCount}ㆍ${postDate}`}</S.ViewCountAndEdit>
                </div>
            </div>

        </div>
    );
};

export default VideoList;