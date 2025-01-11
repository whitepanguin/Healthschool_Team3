import React, { useState } from 'react';
import S from './style'
import DeleteModal from './DelteModal';
import CommentComponent from '../commentComponent/CommnentComponent';
import ReplyComment from './ReplayInput';
import { useSelector } from 'react-redux';
const ReplyOthersComment = ({parentId,childId, personalImage, userId, upLoadTime, commentDetail, replyCommentCount, userEmail}) => {
    const [showModal, setShowModal] = useState(false);  // 모달의 표시 여부 상태
    const { currentUser, isLogin } = useSelector((state) => state.user); // user 상태 가져오기
    const [isReplying, setIsReplying] = useState(false); // 답글 입력 창 표시 여부
    const [showReplies, setShowReplies] = useState(false);  // 대댓글 표시 여부
    const [replies, setReplies] = useState([]);  // 대댓글 상태
    const [loading, setLoading] = useState(false);  // 로딩 상태
    
      const handleDeleteClick = () => {
        setShowModal(true); // "삭제" 버튼 클릭 시 모달 표시
      };
      
      const handleConfirmDelete = async () => {
        if(currentUser.email !==userEmail){
          alert("삭제할 권한이 없습니다. 자신이 작성한 댓글만 삭제할 수 있습니다.");
          setShowModal(false);
          return;
        }
        try {
          setLoading(true);
          const response = await fetch(`http://localhost:8000/videos/${parentId}/replies/${childId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (!response.ok) {
            throw new Error('댓글 삭제 실패');
          }
    
          console.log(`${userId}님의 댓글이 삭제되었습니다.`);
          // 댓글 삭제 후 화면에서 해당 댓글 제거
          setReplies((prevReplies) => prevReplies.filter(reply => reply.id !== childId)); // 댓글 ID로 삭제
    
          setShowModal(false); // 모달 닫기
        } catch (error) {
          console.error('댓글 삭제 에러:', error);
        } finally {
          setLoading(false);
        }
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
            />
        </div>
    );
};

export default ReplyOthersComment;