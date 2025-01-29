import S from './style'
import VideoList from './_component/myVideoList/myVideoList';
import VideoInform from './_component/videoInformation/VideoInform';
import CommentComponent from './_component/commentComponent/CommnentComponent';
import CompletSortComponent from './_component/SortComponent/CompletSortComponent';
import OthersComment from './_component/othersComment/OthersComment';
import ReactPlayer from "react-player";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { faCropSimple } from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';

const MyVideoManage = () => {
    const location = useLocation(); // useLocation으로 전달된 state 가져오기
    const videoDataFromMediaCard = location.state; // 모든 props를 videoData로 받기
    console.log("Location State:", videoDataFromMediaCard);
    const userImage = process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg";
    const userId = "john_doe_123";
    const subscribeNum = 5000;
    const userName = "John Doe";
    const postTitle = "Test Title"
    const viewCount = 2960
    const postDate = "2023-07-30"
    const myImage = process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg";
    const [videoUrl, setVideoUrl] = useState("");
    const [uploadDate , setUploadDate] = useState("");
    const [error, setError] = useState(""); // 에러 메시지
    const [comments, setComments] = useState([]); // 댓글 상태 추가
    const [loading, setLoading] = useState(true); // 로딩 상태
  
    const videoId = videoDataFromMediaCard._id; // 동영상 ID
    console.log("videoUrl :",videoDataFromMediaCard.videoUrl)
    console.log("video ID= ", videoId)
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
      useEffect(() => {
        const fetchComments = async()=>{
          try {
            const response = await fetch(`http://localhost:8000/videos/${videoId}/comments`);
            if(!response.ok){
              throw new Error("댓글을 불러오는데 실패했습니다.")
            }
            const data = await response.json();
            setComments(data);
          }catch(err){
            console.error("댓글 가져오기 실패: ", err);
            setError(err.message);
          }finally{
            setLoading(false)
          }
        };
        if (videoDataFromMediaCard) {
          setVideoUrl(videoDataFromMediaCard.videoUrl); // videoUrl 설정
          setUploadDate(videoDataFromMediaCard.uploadDate); // 업로드 날짜 설정
        }
        fetchComments();
      }, [videoDataFromMediaCard]);
    
      if (!videoDataFromMediaCard) {
        return <div>에러: 동영상 데이터가 없습니다.</div>; // 데이터가 없을 경우 에러 표시
      }
      const handleAddComment = (newComment) => {
        setComments((prevComments) => [newComment, ...prevComments]); // 새 댓글을 앞에 추가
      };
    return (
        // 전체box div
        <div style= {{margin : '0 0 0 180px' }}> 
            <div style={{display:'flex', gap:'30px', alignItems:"center"}}>
                {/* 비디오 */}
                <S.VideoContainer>
                <ReactPlayer
                url={videoDataFromMediaCard.videoUrl} // 동영상 URL
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
                userImage={videoDataFromMediaCard.imageUrl}
                userId={videoDataFromMediaCard.email}
                subscribeNum={videoDataFromMediaCard.likeCount}
                userName={videoDataFromMediaCard.nickname}
                postTitle={videoDataFromMediaCard.title}
                viewCount={videoDataFromMediaCard.viewCount}
                postDate={new Date(videoDataFromMediaCard.uploadDate).toLocaleDateString("ko-KR")}
                editDate ={videoDataFromMediaCard.editDate}
            />
            <CommentComponent videoId={videoDataFromMediaCard._id} onAddComment={handleAddComment}/>
            <div style={{display:'flex', padding:'0 90px 0 0'}}>
            <CompletSortComponent/>
            </div>
            
            <div style={{display:"flex", flexDirection:'column', gap:'50px'}}>
                {comments.map((comment) => (
                  <OthersComment
                    key={comment._id}
                    parentId={comment._id} // 댓글의 고유 id
                    personalImage={comment.userProfile} // 사용자 프로필 이미지
                    userEmail = {comment.email}
                    userId={comment.nickname} // 사용자 닉네임
                    upLoadTime={new Date(comment.uploadDate).toLocaleDateString("ko-KR")} // 댓글 업로드 날짜
                    commentDetail={comment.content} // 댓글 내용
                    replyCommentCount={comment.replyCount || 0} // 대댓글 개수
                  />
                ))}
            </div>
            
        </div>
    );
};

export default MyVideoManage;
