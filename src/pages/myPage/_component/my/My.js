import React from 'react';
import Banner from '../banner/Banner';
import MediaGallery from '../mediaGallery/MediaGallery';
import OftenQnA from '../oftenQnA/OftenQnA';
import { useSelector } from 'react-redux';

const My = () => {

  const { isLogin, currentUser } = useSelector(state => state.user);
  const { name, isTeacher, profile } = currentUser
    

  return (
    <div>
      {isTeacher ? (
        // 강사 마이페이지
        <>
          <Banner/>
          <div style={{marginBottom : 60}}/>
          <MediaGallery medias={[1,2,3,4]} label={"VOD"} uri={"/mypage/livelist"}/>
          <MediaGallery medias={[1,2,3,4]} label={"내 강의"} uri={"/mypage/pro-videolist"}/> 
          <OftenQnA label={"자주 묻는 질문"}/>
        </>
      ) : (
        // 회원 마이페이지
        <>
          <div style={{marginBottom : 60}}/> 
          <MediaGallery medias={[1,2,3]} label={"내가 듣던 강의"} uri={"/mypage/videolist"}/>
          <MediaGallery medias={[1,2,3,4]} label={"결제한 강의 정보"}/>
          <OftenQnA label={"자주 묻는 질문"} uri={"/mypage/qnalist"}/>
        </>
      )}
    </div>


  );
};

export default My;