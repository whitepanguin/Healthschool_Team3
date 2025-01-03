import React, { useState } from 'react';
import S from './style';

const PopularQuestion = () => {
    const [clickedItem, setClickedItem] = useState(""); // 클릭된 항목을 추적

    const QuestionList = [
        {
            question: "계정 관리",
            topic: ["회원 이름 찾기", "비밀번호 찾기", "회원가입하기"]
        },
        {
            question: "이용 가이드",
            topic: ["영상 구매 방법", "영상 구독방법", "강사등록 가이드"]
        }
    ];

    const handleClick = (item) => {
        // 클릭된 항목의 상태를 토글 (이미 클릭된 항목은 다시 비우고, 다른 항목을 클릭 시 변경)
        setClickedItem(item === clickedItem ? "" : item);
    };

    return (
        <div>
            <S.Title>
                <S.MainTitle>헬스쿨 고객지원</S.MainTitle>
            </S.Title>
            <S.Main>
                {QuestionList.map((datas, i) => (
                    <S.Container key={i}>
                        <S.Management>
                            {datas.question}
                        </S.Management>
                        <ul>
                            {datas.topic.map((item, j) => (
                                <S.Li key={j} onClick={() => handleClick(item)}>
                                    <S.ContainerBox>
                                        {item}
                                        <S.ArrowImg
                                            src={clickedItem === item 
                                                ? process.env.PUBLIC_URL + `/images/help/up.png` 
                                                : process.env.PUBLIC_URL + `/images/help/down.png`} 
                                            alt="arrow" 
                                        />
                                    </S.ContainerBox>
                                    <S.Nav isVisible={clickedItem === item}>
                                        <div>{item}에 대한 추가 정보</div>
                                    </S.Nav>
                                </S.Li>
                            ))}
                        </ul>
                    </S.Container>
                ))}
            </S.Main>
        </div>
    );
};

export default PopularQuestion;
