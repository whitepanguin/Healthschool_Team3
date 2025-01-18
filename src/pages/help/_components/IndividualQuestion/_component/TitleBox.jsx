import S from './style';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const TitleBox = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [title, setTitle] = useState(''); // 제목 상태
    const [content, setContent] = useState(''); // 내용 상태

    // 취소 버튼을 클릭했을 때 실행되는 함수
    const resetFields = () => {
        setTitle(''); // 제목 상태 초기화
        setContent(''); // 내용 상태 초기화
    };

    console.log(currentUser)
    return (
        <S.Wrap>
            <S.form method='POST'>
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
                    <S.SubmitBtn type="submit">작성</S.SubmitBtn>
                </S.CancelOrSubmit>
            </S.form>
        </S.Wrap>
    );
};

export default TitleBox;
