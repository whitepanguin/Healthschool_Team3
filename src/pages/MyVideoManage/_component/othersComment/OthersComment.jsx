import React, { useState } from 'react';
import S from './style'
import DeleteModal from './DelteModal';
import CommentComponent from '../commentComponent/CommnentComponent';
import ReplyComment from './ReplayCommnet';
const OthersComment = ({personalImage, userId, upLoadTime, commentDetail, replyCommentCount}) => {
    const [showModal, setShowModal] = useState(false);  // 모달의 표시 여부 상태
    const [isReplying, setIsReplying] = useState(false); // 답글 입력 창 표시 여부
      
    
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
      const handleReplyClick = () => {
        setIsReplying(!isReplying); // 답글 입력창 토글
      };
      const handleCancelReply = () => {
        setIsReplying(false); // 답글 입력창 닫기
      };
      
    return (
        <div>
            <S.InformWrapper>
                <div style={{display:'flex', alignItems:"center"}}>
                    <S.UserImageWrapper src={personalImage} />
                    <S.UserInformWrapper>
                        <S.ViewCountAndEdit>{`${userId}ㆍ${upLoadTime}`}</S.ViewCountAndEdit>
                        <div style={{ fontSize: '11px', color: 'white' }}>{`${commentDetail}`}</div>
                    </S.UserInformWrapper>
                </div>
                <div style={{display:'flex', alignItems:"center", cursor:"pointer"}} onClick={handleDeleteClick}>
                    <span style={{fontSize:'10px', color:'red', marginRight:'5px'}}>삭제</span>
                    <img src={process.env.PUBLIC_URL + "/images/myVideoManage/trash.png" } alt='오류' />
                </div>
            </S.InformWrapper>
            <div style={{display:'flex', margin:'10px 0 0 0', cursor:'pointer'}} onClick={handleReplyClick}>
                <img src={process.env.PUBLIC_URL + "/images/myVideoManage/comment.png" } alt='오류' />
                <S.ViewCountAndEdit>{`${replyCommentCount}ㆍ답글`}</S.ViewCountAndEdit>
            </div>
            {isReplying && (
            <div style={{ marginTop: '10px' }}>
            <ReplyComment onCancel = {handleCancelReply} />
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