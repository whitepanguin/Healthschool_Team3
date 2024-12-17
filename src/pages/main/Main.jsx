import React from 'react';
import { Link } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton';
import MediaCard from '../../components/mediaCard/MediaCard';

const Main = () => {
  return (
    <div className='wrapper'>
      <Link to={'/components'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>컴포넌트</BasicButton>
      </Link>
      <Link to={'/help'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>help</BasicButton>
      </Link>
      <Link to={'/live'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>라이브</BasicButton>
      </Link>
      <Link to={'/mypage'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>마이페이지</BasicButton>
      </Link>
      <Link to={'/payment/cart'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>결제</BasicButton>
      </Link>
      <div style={{ margin: 10 }}></div>
      <div style={{ display: 'flex', gap: 39 }}>
        <MediaCard
          title="[근력운동] 간단하고 효과적인 근력운동으로 원하는 몸을 만들어봐요!"
          date="2024.12.17"
          description="과학적 접근과 간단한 근력운동으로 누구나 원하는 몸을 만들어 보세요."
          imageUrl="https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782722_1280.jpg"
          instructor="슬기로운 운동생활"
        />      
        <MediaCard
          title="[근력운동] 간단하고 효과적인 근력운동으로 원하는 몸을 만들어봐요!"
          date="2024.12.17"
          description="과학적 접근과 간단한 근력운동으로 누구나 원하는 몸을 만들어 보세요."
          imageUrl="https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782722_1280.jpg"
          instructor="슬기로운 운동생활"
        />      
        <MediaCard
          title="[근력운동] 간단하고 효과적인 근력운동으로 원하는 몸을 만들어봐요!"
          date="2024.12.17"
          description="과학적 접근과 간단한 근력운동으로 누구나 원하는 몸을 만들어 보세요."
          imageUrl="https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782722_1280.jpg"
          instructor="슬기로운 운동생활"
        />
        <MediaCard
          title="[근력운동] 간단하고 효과적인 근력운동으로 원하는 몸을 만들어봐요!"
          date="2024.12.17"
          description="과학적 접근과 간단한 근력운동으로 누구나 원하는 몸을 만들어 보세요."
          imageUrl="https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782722_1280.jpg"
          instructor="슬기로운 운동생활"
          tags={['안녕', '하세요']}
        />
      </div>
    </div>
  );
};

export default Main;