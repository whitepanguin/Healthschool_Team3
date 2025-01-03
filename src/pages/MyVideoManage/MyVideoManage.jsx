import S from './style'
import VideoList from './_component/myVideoList/myVideoList';
import VideoInform from './_component/videoInformation/VideoInform';
import CommentComponent from './_component/commentComponent/CommnentComponent';
import CompletSortComponent from './_component/SortComponent/CompletSortComponent';
import OthersComment from './_component/othersComment/OthersComment';
const MyVideoManage = () => {
    const userImage = process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg";
    const userId = "john_doe_123";
    const subscribeNum = 5000;
    const userName = "John Doe";
    const postTitle = "Test Title"
    const viewCount = 2960
    const postDate = "2023-07-30"
    const myImage = process.env.PUBLIC_URL + "/images/myVideoManage/carrot.jpg";

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
        <div style= {{padding : '10px 0 0 200px'}}> 
            <div style={{display:'flex', gap:'50px'}}>
                {/* 비디오 */}
                <S.Video ></S.Video>
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