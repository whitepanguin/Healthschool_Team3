import React, { useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';

const QnAList = () => {
  const [clickedItem, setClickedItem] = useState(null); 
  const navigate = useNavigate();

  const handleClick = (id) => {
    setClickedItem(clickedItem === id ? null : id); 
  };
  const handleNoAnswer = () => {
    navigate('/mypage/qnalist/write'); 
  };

  const qnaData = [
    { id: 1, question: "자주하는 질문 1" , answer : "답변 1"},
    { id: 2, question: "자주하는 질문 2" , answer : "답변 2"},
    { id: 3, question: "자주하는 질문 3" , answer : "답변 3"},
    { id: 4, question: "자주하는 질문 4" , answer : "답변 4"},
    { id: 5, question: "자주하는 질문 5" , answer : ""},
  ];

  return (
    <S.QnaContainer>
      <S.QnaTitle>Q&A</S.QnaTitle>
      <S.QnaList>
        {qnaData.map((item) => (
          <>
            <S.QnaItem key={item.id} onClick={() => handleClick(item.id)}>{item.question}</S.QnaItem>
            <S.QnaAnswer isOpen={clickedItem === item.id}>
              {item.answer ? (
                item.answer
              ) : (
                <S.NoAnswer onClick={handleNoAnswer}>답변을 작성해주세요</S.NoAnswer>
              )}
            </S.QnaAnswer>
          </>
        ))}
      </S.QnaList>
    </S.QnaContainer>
  );
};

export default QnAList;