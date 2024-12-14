import React from 'react';
import MediaCard from '../../../../components/mediaCard/MediaCard';

const MediaGallery = ({ medias, label }) => {
    console.log("🚀 ~ MediaGallery ~ medias:", medias);
    return (
        <div style={{marginBottom : 60}}>
            <h2 style={{fontSize : 24, marginBottom : 60}}>{`${label} >`}</h2>
            <div style={{ display: 'flex', gap: 39 }}>
                {medias.map((media, i) => (
                    <MediaCard
                        key={i}
                        title="[근력운동] 간단하고 효과적인 근력운동으로 원하는 몸을 만들어봐요!"
                        date="2024.12.17"
                        description="과학적 접근과 간단한 근력운동으로 누구나 원하는 몸을 만들어 보세요."
                        imageUrl="https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782722_1280.jpg"
                        instructor="슬기로운 운동생활"
                    />
                ))}
            </div>
        </div>
    );
};

export default MediaGallery;
