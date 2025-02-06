import React, { useState, useEffect } from 'react';
import S from './style';
import DeleteModal from './DelteModal';
import CommentComponent from '../commentComponent/CommnentComponent';
import ReplyComment from './ReplayInput';
import ReplyOthersComment from './ReplyOthersComment';
import { useSelector } from 'react-redux';

const OthersComment = ({setComments,videoId,parentId, personalImage, userId, upLoadTime, commentDetail, replyCommentCount, userEmail}) => {
    const { currentUser, isLogin } = useSelector((state) => state.user); // user 상태 가져오기
    const [showModal, setShowModal] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    const [showReplies, setShowReplies] = useState(false);
    const [replies, setReplies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [replyCount, setReplyCount] = useState(replyCommentCount); // 초기 replyCommentCount 값

    const fetchReplies = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:8000/videos/${parentId}/replies`);
            if (response.ok) {
                const data = await response.json();
                setReplies(data);
                if (data.length === 0) {
                    console.log('대댓글이 없습니다.');
                }
            } else {
                console.log('대댓글이 존재하지 않습니다.');
            }
        } catch (error) {
            console.error('대댓글 가져오기 오류:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleReplyClick = () => {
        setIsReplying(!isReplying);
        if (!showReplies && replies.length === 0) {
            fetchReplies();
        }
    };

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = async () => {
        if(currentUser.email !==userEmail){
          alert("삭제할 권한이 없습니다. 자신이 작성한 댓글만 삭제할 수 있습니다.");
          setShowModal(false);
          return;
        }
        try {
          setLoading(true);
          const response = await fetch(`http://localhost:8000/videos/${videoId}/comments/${parentId}`, {
            method: 'DELETE',
            headers: { 
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: currentUser.email,
            })
          });
    
          if (!response.ok) {
            throw new Error('댓글 삭제 실패');
          }
    
          console.log(`${userId}님의 댓글이 삭제되었습니다.`);
          // 댓글 삭제 후 화면에서 해당 댓글 제거
          const data = await response.json();
          console.log("data", data);
          setComments(prevReplies => prevReplies.filter(reply => reply._id !== parentId)); // 삭제된 대댓글 제외
          setShowModal(false); // 모달 닫기
        } catch (error) {
          console.error('댓글 삭제 에러:', error);
        } finally {
          setLoading(false);
        }
      };

   
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCancelReply = () => {
        setIsReplying(false);
    };

    // 대댓글 추가 후 replyCount 업데이트
    const handleAddReply = (newReply) => {
        setReplyCount(prevCount => prevCount + 1);  // replyCount 증가
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
                <S.ViewCountAndEdit>{`${replyCount}ㆍ답글 입력ㆍ더보기`}</S.ViewCountAndEdit>
            </div>

            {isReplying && (
                <div style={{ marginLeft: '50px' }}>
                    <div style={{ marginTop: '10px' }}>
                        {replies.length > 0 ? (
                            replies.map((reply) => (
                                <ReplyOthersComment
                                    key={reply._id}
                                    childId={reply._id}
                                    parentId={reply.parentCommentId}
                                    personalImage={reply.userProfile}
                                    userId={reply.nickname}
                                    userEmail={reply.email}
                                    upLoadTime={new Date(reply.uploadDate).toLocaleDateString("ko-KR")}
                                    commentDetail={reply.content}
                                    replyCommentCount={reply.likeCount}
                                    setReplies={setReplies}
                                    setReplyCount={setReplyCount}
                                />
                            ))
                        ) : (
                            <p>대댓글이 없습니다.</p>
                        )}
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <ReplyComment parentId={parentId} setReplies={setReplies} setIsReplying={setIsReplying} onAddReply={handleAddReply} />
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
};

export default OthersComment;
