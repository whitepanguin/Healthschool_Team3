import S from './style';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const TitleBox = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [title, setTitle] = useState(''); // 제목 상태
  const [content, setContent] = useState(''); // 내용 상태
  const navigate = useNavigate();
  
    // 취소 버튼을 클릭했을 때 실행되는 함수
    const resetFields = () => {
        setTitle(''); // 제목 상태 초기화
        setContent(''); // 내용 상태 초기화
    };



    const onSubmit = async () => {

        console.log(title)
        console.log(content)
        console.log(currentUser.email)
        try {
          const response = await fetch("http://localhost:8000/help/postchat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title : title,
                content : content,
                email: currentUser.email,
            }),
          });
    
          const result = await response.json();
          console.log("서버 응답:", result);
          
          navigate('/help/individualquestion', { state: { updatedUser: result.currentUser } });
    
        } catch (err) {
          console.error("주소 수정 요청 실패:", err);
          alert("서버 오류로 인해 수정에 실패했습니다.");
        }

      };



    console.log(currentUser)
    return (
        <S.Wrap>
                <S.TitleInputBox 
                    type="text" 
                    placeholder="제목을 입력해주세요"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} // 제목 입력 값 관리
                />
                <S.ContentBox 
                    type="text" 
                    className="content" 
                    placeholder="내용을 작성해주세요"
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} // 내용 입력 값 관리
                />
                <S.CancelOrSubmit>
                    <S.CancelBtn onClick={resetFields} type="button">취소</S.CancelBtn>
                    <S.SubmitBtn onClick ={onSubmit}>작성</S.SubmitBtn>
                </S.CancelOrSubmit>
        </S.Wrap>
    );
};

export default TitleBox;
