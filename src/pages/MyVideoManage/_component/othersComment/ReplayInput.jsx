import React, { useRef, useState } from 'react';
import S from './ReplyComment'
import { useSelector } from 'react-redux';
const ReplyComment = ({ onCancel, parentId, setReplies, setIsReplying, onAddReply}) => {
    const [replyCommentText, setReplyCommentText] = useState(''); // 텍스트 상태 관리
    const commentBoxRef = useRef(null); // contenteditable div 참조
    const formRef = useRef(null); // 폼 참조
    const [replyCommentTime, setReplyCommentTime] = useState(''); // 댓글 작성 시간 상태 관리
    const { currentUser, isLogin } = useSelector((state) => state.user); // user 상태 가져오기
    const [loading, setLoading] = useState(false);  // 로딩 상태
    
    // 텍스트 내용 자동 크기 조정
    const adjustHeight = (el) => {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    };
    const handleReplyCancel = () => {
        setIsReplying(false); // 부모 컴포넌트의 handleCancelReply 호출
      };
    // 폼 전송 시 contenteditable의 텍스트를 hidden input에 복사
    const handleSubmit =async (event) => {
      console.log(parentId)
      event.preventDefault(); // 기본 폼 전송 막기
      const currentTime = new Date().toLocaleString();
      setReplyCommentTime(currentTime); // 작성 시간을 상태로 저장
      const commentContent = commentBoxRef.current.innerText; // contenteditable의 텍스트 가져오기
  
      // 숨겨진 input에 텍스트 값 설정
      
  
      const replyCommentData = {
        content: commentContent,
        email: currentUser.email, // 현재 로그인 사용자 이메일
        nickname: currentUser.name, // 현재 로그인 사용자 닉네임
        userProfile: currentUser.profile || 'http://localhost:8000/default-profile.png', // 사용자 프로필 이미지 또는 기본값
        parentCommentId: parentId, // 참조하는 댓글 ID
      };
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/videos/${parentId}/replies`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(replyCommentData),
        });
    
        if (!response.ok) {
          throw new Error('대댓글 추가 실패');
        }
        const newReply = await response.json();  // 서버에서 반환된 대댓글 정보
          // 대댓글이 성공적으로 추가되면, 그 대댓글을 replies 상태에 추가
        setReplies((prevReplies) => [...prevReplies, newReply]);
        onAddReply(newReply)
        commentBoxRef.current.innerText = ''
        setReplyCommentText('');
      } catch (error) {
        console.error('대댓글 추가 에러:', error);
      } finally {
        setLoading(false);
      }
    };
    const handleInputChange = (e) => {
        setReplyCommentText(e.target.innerText); // 텍스트 상태 업데이트
        adjustHeight(e.target); // 텍스트에 맞게 높이 자동 조정
      };
    const handleCancel = () => {
        commentBoxRef.current.blur();  // focus 해제
        setReplyCommentText('');            // 상태 초기화
        commentBoxRef.current.innerText = ''; // contentEditable 내용 초기화
        commentBoxRef.current.style.height = 'auto';
    };
    
    return (
        <S.CommentWrapper>
            <S.UserImageWrapper src={currentUser.profile||"http://localhost:8000/uploads/images/defaultProfile.jpg"} />
            <form ref={formRef} onSubmit={handleSubmit} method='POST' style={{display:'flex', flexDirection:'column'} } >
                <S.CommentBox ref={commentBoxRef} contentEditable="true" onInput={handleInputChange}/>
                <div style={{display:'flex', gap:'5px', position: 'absolute', bottom: '9px', right: '250px'}}>
                    <S.CancelButton type='button' onClick={handleReplyCancel}>취소</S.CancelButton>
                    <S.SubmitButton type='submit' disabled={!replyCommentText.trim()}  onClick={handleSubmit}>작성</S.SubmitButton>
                </div>
            </form>
            
        </S.CommentWrapper>
    );
};

export default ReplyComment;