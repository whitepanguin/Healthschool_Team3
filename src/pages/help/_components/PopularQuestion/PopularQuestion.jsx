import React, { useState } from 'react';
import S from './style';

const PopularQuestion = () => {
    const [clickedItem, setClickedItem] = useState("")

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
        setClickedItem(item === clickedItem ? null : item);// 중복클릭 하면 다시 돌아옴
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
                                        {/* 추후에 Link태그 넣을 예정 */}
                                        {clickedItem === item && <span>{item}페이지로 이동:</span>}
                                        <S.ArrowImg
                                            src={clickedItem === item 
                                                ? process.env.PUBLIC_URL + `/images/help/close.png` 
                                                : process.env.PUBLIC_URL + `/images/help/arrow.png`} 
                                            alt="arrow" 
                                        />
                                    </S.ContainerBox>
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
