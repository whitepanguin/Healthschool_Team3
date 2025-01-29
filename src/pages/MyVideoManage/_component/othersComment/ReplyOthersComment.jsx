import React, { useState } from 'react';
import S from './style'
import DeleteModal from './DelteModal';
import CommentComponent from '../commentComponent/CommnentComponent';
import ReplyComment from './ReplayInput';
const ReplyOthersComment = ({parentId, personalImage, userId, upLoadTime, commentDetail, replyCommentCount, userEmail}) => {
    const [showModal, setShowModal] = useState(false);  // 모달의 표시 여부 상태
    const [isReplying, setIsReplying] = useState(false); // 답글 입력 창 표시 여부
    const [showReplies, setShowReplies] = useState(false);  // 대댓글 표시 여부
    const [replies, setReplies] = useState([]);  // 대댓글 상태
    const [loading, setLoading] = useState(false);  // 로딩 상태
    
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
            <DeleteModal
                show={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                message={`${userId}님의 댓글을 삭제할까요?`}
            />
        </div>
    );
};

export default ReplyOthersComment;