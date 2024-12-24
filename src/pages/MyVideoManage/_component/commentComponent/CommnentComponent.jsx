import React, { useRef, useState } from 'react';
import S from './style'
const CommentComponent = ({myImage}) => {
    const [commentText, setCommentText] = useState(''); // 텍스트 상태 관리
    const commentBoxRef = useRef(null); // contenteditable div 참조
    const formRef = useRef(null); // 폼 참조
    const [commentTime, setCommentTime] = useState(''); // 댓글 작성 시간 상태 관리
  
    // 텍스트 내용 자동 크기 조정
    const adjustHeight = (el) => {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    };
  
    // 폼 전송 시 contenteditable의 텍스트를 hidden input에 복사
    const handleSubmit = (event) => {
      event.preventDefault(); // 기본 폼 전송 막기
      const currentTime = new Date().toLocaleString();
      setCommentTime(currentTime); // 작성 시간을 상태로 저장
      const commentContent = commentBoxRef.current.innerText; // contenteditable의 텍스트 가져오기
  
      // 숨겨진 input에 텍스트 값 설정
      const commentInput = formRef.current.querySelector('input[name="comment"]');
      commentInput.value = commentContent;
      const timeInput = formRef.current.querySelector('input[name="commentTime"]');
        timeInput.value = currentTime; // 작성 시간을 hidden input에 설정
  
      // 여기서 폼 전송 (예: axios 또는 fetch 사용)
      formRef.current.submit(); // 폼 전송
    };
    const handleInputChange = (e) => {
        setCommentText(e.target.innerText); // 텍스트 상태 업데이트
        adjustHeight(e.target); // 텍스트에 맞게 높이 자동 조정
      };
    const handleCancel = () => {
        commentBoxRef.current.blur();  // focus 해제
        setCommentText('');            // 상태 초기화
        commentBoxRef.current.innerText = ''; // contentEditable 내용 초기화
        commentBoxRef.current.style.height = 'auto';
    };
    
    return (
        <S.CommentWrapper>
            <S.UserImageWrapper src={myImage} />
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