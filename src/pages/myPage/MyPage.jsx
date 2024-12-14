import React from 'react';
import Banner from './_component/banner/Banner';
import MediaGallery from './_component/mediaGallery/MediaGallery';

const MyPage = () => {
  return (
    <div>
      <Banner/>
      <div style={{marginBottom : 60}}/>
      <MediaGallery medias={[1,2,3,4]} label={"냉냉"}/>
      <MediaGallery medias={[1,2,3,4]} label={"냉냉"}/>
      <MediaGallery medias={[1,2,3,4]} label={"냉냉"}/>
      <MediaGallery medias={[1,2,3,4]} label={"냉냉"}/>
    </div>
  );
};

export default MyPage;