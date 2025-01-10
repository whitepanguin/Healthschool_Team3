import React, { useState } from 'react';
import S from './style'
import DeleteModal from './DelteModal';
import CommentComponent from '../commentComponent/CommnentComponent';
import ReplyComment from './ReplayInput';
import ReplyOthersComment from './ReplyOthersComment';
const OthersComment = ({parentId, personalImage, userId, upLoadTime, commentDetail, replyCommentCount, userEmail}) => {
    const [showModal, setShowModal] = useState(false);  // 모달의 표시 여부 상태
    const [isReplying, setIsReplying] = useState(false); // 답글 입력 창 표시 여부
    const [showReplies, setShowReplies] = useState(false);  // 대댓글 표시 여부
    const [replies, setReplies] = useState([]);  // 대댓글 상태
    const [loading, setLoading] = useState(false);  // 로딩 상태
    
    
      
    const fetchReplies = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8000/videos/${parentId}/replies`);
        if (!response.ok) {
          throw new Error('대댓글을 불러오는 데 실패했습니다.');
        }
        const data = await response.json();
        console.log("data", data)
        setReplies(data);  // 대댓글 상태 업데이트
      
      } catch (error) {
        console.error('대댓글 가져오기 오류:', error);
      } finally {
        setLoading(false);
      }
    };
    const handleReplyClick = () => {
      setIsReplying(!isReplying); // 답글 입력창 토글
      if (!showReplies && replies.length === 0) {
        fetchReplies();  // 대댓글을 가져옴
      }
    };
  
      const handleDeleteClick = () => {
        setShowModal(true); // "삭제" 버튼 클릭 시 모달 표시
      };

      const handleConfirmDelete = () => {
        console.log(`${userId}님의 댓글이 삭제되었습니다.`);
        setShowModal(false); // 삭제 확인 후 모달 닫기
      };
    
      const handleCloseModal = () => {
        setShowModal(false); // 취소 클릭 시 모달 닫기
      };
     
        
   
      const handleCancelReply = () => {
        setIsReplying(false); // 답글 입력창 닫기
      };
      
      return (
        <div>
            <S.InformWrapper>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    <S.UserImageWrapper src={personalImage} />
                    <S.UserInformWrapper>
                        <S.ViewCountAndEdit>{`${userId}ㆍ${upLoadTime}`}</S.ViewCountAndEdit>
                        <div style={{ fontSize: '11px', color: 'white' }}>{`${commentDetail}`}</div>
                    </S.UserInformWrapper>
                </div>
                <div style={{ display: 'flex', alignItems: "center", cursor: "pointer" }} onClick={handleDeleteClick}>
                    <span style={{ fontSize: '10px', color: 'red', marginRight: '5px' }}>삭제</span>
                    <img src={process.env.PUBLIC_URL + "/images/myVideoManage/trash.png"} alt='오류' />
                </div>
            </S.InformWrapper>
            
            <div style={{ display: 'flex', margin: '10px 0 0 0', cursor: 'pointer' }} onClick={handleReplyClick}>
                <img src={process.env.PUBLIC_URL + "/images/myVideoManage/comment.png"} alt='오류' />
                <S.ViewCountAndEdit>{`${replyCommentCount}ㆍ답글 입력ㆍ더보기`}</S.ViewCountAndEdit>
            </div>
    
            {isReplying && (
                <div>
                  <div style={{ marginTop: '10px' }}>
                      {replies.length > 0 ? (
                          replies.map((reply) => (
                              <ReplyOthersComment
                                  key={reply._id}  // key는 대댓글의 고유 id를 사용
                                  parentId={reply.parentCommentId}
                                  personalImage={reply.userProfile}
                                  userId={reply.nickname}
                                  userEmail={reply.email}
                                  upLoadTime={new Date(reply.uploadDate).toLocaleDateString("ko-KR")}  // 수정: uploadDate 사용
                                  commentDetail={reply.content}
                                  replyCommentCount={reply.likeCount}
                              />
                          ))
                      ) : (
                          <p>대댓글이 없습니다.</p>  // 대댓글이 없을 경우 표시할 내용
                      )}
                  </div>
                  <div style={{ marginTop: '10px' }}>
                  <ReplyComment onCancel={handleCancelReply} />
                  </div>
                </div>
            )}
    
            
            <DeleteModal
                show={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                message={`${userId}님의 댓글을 삭제할까요?`}
            />
        </div>
    );
  }    

export default OthersComment;