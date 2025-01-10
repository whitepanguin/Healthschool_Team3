import React, { useRef, useState } from 'react';
import S from './style'
import { useSelector } from 'react-redux';
const CommentComponent = ({videoId, onAddComment}) => {
    console.log("videoId: ", videoId)
    const [commentText, setCommentText] = useState(''); // 텍스트 상태 관리
    const commentBoxRef = useRef(null); // contenteditable div 참조
    const formRef = useRef(null); // 폼 참조
    const [CommentTime, setCommentTime] = useState(''); // 댓글 작성 시간 상태 관리
    const [loading, setLoading] = useState(false);  // 로딩 상태
    const [error, setError] = useState(''); // 에러 상태 관리
    const { currentUser, isLogin } = useSelector((state) => state.user); // user 상태 가져오기
    console.log("currentuser: ", currentUser);
    console.log("isLogin: ", isLogin);
    console.log("currentUser.profile: ", currentUser.profile);
    const handleInputChange = (e) => {
      setCommentText(e.target.innerText); // 텍스트 상태 업데이트
      adjustHeight(e.target); // 텍스트에 맞게 높이 자동 조정
    };
    const handleCancel = () => {
      commentBoxRef.current.blur();  // focus 해제
      setCommentText('');            // 상태 초기화tod
      commentBoxRef.current.innerText = ''; // contentEditable 내용 초기화
      commentBoxRef.current.style.height = 'auto';
    };
    // 텍스트 내용 자동 크기 조정
    const adjustHeight = (el) => {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    };
  
    // 폼 전송 시 contenteditable의 텍스트를 hidden input에 복사
    const handleSubmit = async(event) => {
      event.preventDefault(); // 기본 폼 전송 막기
      const currentTime = new Date().toLocaleString();
      setCommentTime(currentTime); // 작성 시간을 상태로 저장
      const commentContent = commentBoxRef.current.innerText; // contenteditable의 텍스트 가져오기
  
      // 숨겨진 input에 텍스트 값 설정
      const commentInput = formRef.current.querySelector('input[name="comment"]');
      commentInput.value = commentContent;
      const timeInput = formRef.current.querySelector('input[name="commentTime"]');
        timeInput.value = currentTime; // 작성 시간을 hidden input에 설정
  
        const commentData = {
          content: commentContent,
          videoId: videoId,
          nickname: currentUser.name, // 
          email: currentUser.email, 
          userProfile: currentUser.profile, // 사용자 프로필 이미지
          replyCount : 0,
        };
    
        setLoading(true);
        setError(''); // 에러 초기화
    
        try {
          // fetch로 댓글 데이터를 서버로 전송
          console.log("videoId: ", videoId)
          const response = await fetch(`http://localhost:8000/videos/${videoId}/comments`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData), // 서버에 전송할 데이터
          });
    
          if (!response.ok) {
            throw new Error('댓글을 추가하는 데 실패했습니다.');
          }
    
          const result = await response.json();
          console.log('댓글이 성공적으로 추가되었습니다:', result);
          onAddComment(result);
          // 댓글 입력창 초기화
          setCommentText('');
          commentBoxRef.current.innerText = '';
          commentBoxRef.current.style.height = 'auto';
        } catch (error) {
          setError(error.message);  // 오류 메시지 설정
          console.error('댓글 추가 오류:', error);
        } finally {
          setLoading(false); // 로딩 끝
        }
      
    };
  
    
  
    return (
        <S.CommentWrapper>
            <S.UserImageWrapper src={currentUser.profile} />
            <form ref={formRef} onSubmit={handleSubmit} method='POST' style={{display:'flex', flexDirection:'column'} } >
                <S.CommentBox ref={commentBoxRef} contentEditable="true" onInput={handleInputChange}/>
                <input type='hidden' name='comment' />
                <input type='hidden' name='commentTime' /> {/* 댓글 작성 시간을 담을 hidden input */}
                <div style={{display:'flex', gap:'5px', position: 'absolute', bottom: '9px', right: '250px'}}>
                    <S.CancelButton type='button' onClick={handleCancel}>취소</S.CancelButton>
                    <S.SubmitButton type='submit' disabled={!commentText.trim()} >작성</S.SubmitButton>
                </div>
            </form>
            
        </S.CommentWrapper>
    );
};

export default CommentComponent;