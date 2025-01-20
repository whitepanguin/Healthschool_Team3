import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate import
import BasicButton from '../../components/button/BasicButton';
import MediaCard from '../../components/mediaCard/MediaCard';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const { isLogin, currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]); // 동영상 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 오류 상태 추가
  const navigate = useNavigate(); // navigate 훅 사용

  // 컴포넌트가 마운트될 때 API로부터 데이터 가져오기
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:8000/videos/list");
        if (!response.ok) {
          throw new Error('동영상을 불러오는 데 실패했습니다.');
        }
        const data = await response.json();
        setVideos(data); // 받아온 데이터를 상태에 저장
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError(err.message); // 오류 메시지 상태 설정
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchVideos();
  }, []); // 빈 배열([])을 넣어 컴포넌트가 처음 렌더링될 때만 실행되도록 함

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때
  }

  if (error) {
    return <div>Error: {error}</div>; // 오류 발생 시 표시
  }

  // 동영상 카드 클릭 시 navigate로 데이터 전달
  const handleCardClick = (video) => {
    navigate(`/myVideoManage/${video._id}`, {
      state: { ...video }, // 모든 데이터 전달
    });
  };

  return (
    <div className='wrapper'>
      <Link to={'/components'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>컴포넌트</BasicButton>
      </Link>
      <Link to={'/help/notice'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>help</BasicButton>
      </Link>
      <Link to={'/live'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>라이브</BasicButton>
      </Link>
      <Link to={'/mypage/'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>마이페이지</BasicButton>
      </Link>
      <Link to={'/payment/cart'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>결제</BasicButton>
      </Link>
      <Link to={'/payment/history'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>tosstest</BasicButton>
      </Link>

      <div style={{ margin: 10 }}></div>
      <div style={{ display: 'grid', gridTemplateColumns : ' 1fr 1fr 1fr 1fr', gap : '30px'} }>
        {videos.map((video) => (
          <div key={video._id} style={{cursor:"pointer", }} onClick={() => handleCardClick(video) }>
            <MediaCard
              key={video._id}
              videoId={video._id}
              title={video.title}
              nickname={video.nickname}
              viewCount={video.viewCount}
              likeCount={video.likeCount}
              uploadDate={video.uploadDate}
              videoUrl={video.videoUrl}
              imageUrl={video.imageUrl}
              tags={video.tags}
              description={video.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
