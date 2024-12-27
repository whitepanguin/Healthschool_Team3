import React from 'react';
import Banner from '../banner/Banner';
import MediaGallery from '../mediaGallery/MediaGallery';

const My = () => {
  return (
    <div>
      <Banner/>
      <div style={{marginBottom : 60}}/>
      <MediaGallery medias={[1,2,3]} label={"냉냉"}/>
      <MediaGallery medias={[1,2,3,4]} label={"낭낭"}/>
      <MediaGallery medias={[1,2,3,4]} label={"냉냉"}/>
      <MediaGallery medias={[1,2,3,4]} label={"냉냉"}/>
    </div>
  );
};

export default My;