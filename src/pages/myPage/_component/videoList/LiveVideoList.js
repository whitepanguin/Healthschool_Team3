import React from 'react';
import { useLocation } from 'react-router-dom';
import MediaCard from '../../../../components/mediaCard/MediaCard';

const LiveVideoList = () => {
  const location = useLocation()
  const medias = location.state.medias

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns : ' 1fr 1fr 1fr 1fr', gap : '30px'}}>
          {medias.map((media, i) => (
              <MediaCard
                  key={i}
                  title="[근력운동] 간단하고 효과적인 근력운동으로 원하는 몸을 만들어봐요!"
                  date="2024.12.17"
                  description="과학적 접근과 간단한 근력운동으로 누구나 원하는 몸을 만들어 보세요."
                  imageUrl="https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782722_1280.jpg"
                  instructor="슬기로운 운동생활"
                  views = "360"
              />
          ))}
      </div>
    </div>
  );
};

export default LiveVideoList;