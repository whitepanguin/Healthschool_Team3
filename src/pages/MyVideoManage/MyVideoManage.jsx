import S from './style'
import VideoList from './_component/myVideoList/myVideoList';
import VideoInform from './_component/videoInformation/VideoInform';
import CommentComponent from './_component/commentComponent/CommnentComponent';
import CompletSortComponent from './_component/SortComponent/CompletSortComponent';
import OthersComment from './_component/othersComment/OthersComment';
import ReactPlayer from "react-player";
import { useEffect, useState } from 'react';
const MyVideoManage = () => {
    const userImage = process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg";
    const userId = "john_doe_123";
    const subscribeNum = 5000;
    const userName = "John Doe";
    const postTitle = "Test Title"
    const viewCount = 2960
    const postDate = "2023-07-30"
    const myImage = process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg";
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {
      // 백엔드에서 동영상 URL 가져오기
      const fetchVideoUrl = async () => {
        try {
          const response = await fetch("http://localhost:8000/api/videos"); // API 엔드포인트
          const data = await response.json();
          console.log(data)
          setVideoUrl(data[0]?.url); // 첫 번째 동영상 URL 설정
        } catch (error) {
          console.error("동영상 URL을 불러오는 중 오류 발생:", error);
        }
      };
  
      fetchVideoUrl();
    }, []);
    // 아래 videoData는 임시 데이터로 선언된 것임
    const videoData = [
        {
          image: process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg",
          videoTitle: 'React 학습하기',
          viewCount: 1200,
          userName: 'John Doe',
          userImage: process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg",
          postDate: '2024-12-21',
        },
        {
          image: process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg",
          videoTitle: 'JavaScript 기초',
          viewCount: 3000,
          userName: 'Jane Smith',
          userImage: process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg",
          postDate: '2024-11-10',
        },
        {
          image: process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg",
          videoTitle: 'CSS 스타일링',
          viewCount: 1500,
          userName: 'Alice Johnson',
          userImage: process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg",
          postDate: '2024-10-05',
        },
        {
          image: process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg",
          videoTitle: 'Node.js 시작하기',
          viewCount: 2500,
          userName: 'Bob Brown',
          userImage: process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg",
          postDate: '2024-08-15',
        },
        {
          image: process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg",
          videoTitle: 'MongoDB 사용법',
          viewCount: 1800,
          userName: 'Charlie Black',
          userImage: process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg",
          postDate: '2024-07-30',
        },
      ];
    
    return (
        // 전체box div
        <div style= {{margin : '0 0 0 180px' }}> 
            <div style={{display:'flex', gap:'30px', alignItems:"center"}}>
                {/* 비디오 */}
                <S.VideoContainer>
                <ReactPlayer
                url={videoUrl} // 동영상 URL
                playing={false} // 자동 재생 여부
                controls={true} // 재생 버튼 표시 여부
                width="100%"
                height="100%"
                />
                </S.VideoContainer>
                {/* 내 동영상 목록 */}
                <S.VideoListWrapper>
                    {videoData.map((video, index) => (
                        <VideoList
                        key={index}
                        image={video.image}
                        videoTitle={video.videoTitle}
                        viewCount={video.viewCount}
                        userName={video.userName}
                        userImage={video.userImage}
                        postDate={video.postDate}
                        />
                    ))}
                </S.VideoListWrapper>
            </div>
            <VideoInform
                userImage={userImage}
                userId={userId}
                subscribeNum={subscribeNum}
                userName={userName}
                postTitle={postTitle}
                viewCount={viewCount}
                postDate={postDate}
            />
            <CommentComponent myImage = {myImage}/>
            <div style={{display:'flex', padding:'0 90px 0 0'}}>
              <CompletSortComponent/>
            </div>
            <div style={{display:"flex", flexDirection:'column', gap:'50px'}}>
              <OthersComment
                personalImage={myImage}
                userId="홍길동"
                upLoadTime="2024-11-04 04:54:24"
                commentDetail="이렇게 하면 헬스왕이 될 수 있나요?"
                replyCommentCount= {10}
              />
              <OthersComment
                personalImage={myImage}
                userId="홍길동"
                upLoadTime="2024-11-04 04:54:24"
                commentDetail="이렇게 하면 헬스왕이 될 수 있나요?"
                replyCommentCount= {10}
              />
            </div>
        </div>
    );
};

export default MyVideoManage;