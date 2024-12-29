import React from 'react';
import Banner from '../banner/Banner';
import MediaGallery from '../mediaGallery/MediaGallery';

const My = () => {
  return (
    <div>
      <Banner/>
      <div style={{marginBottom : 60}}/>
      <MediaGallery medias={[1,2,3]} label={"내가 듣던 강의"}/>
      <MediaGallery medias={[1,2,3,4]} label={"결제한 강의 정보"}/>
      <MediaGallery medias={[1,2,3,4]} label={"VOD"}/>
      <MediaGallery medias={[1,2,3,4]} label={"동영상 강의"}/>
    </div>
  );
};

export default My;