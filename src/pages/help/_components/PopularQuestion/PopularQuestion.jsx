import React, { useState } from 'react';
import S from './style';
import MediaCard from '../../../../components/mediaCard/MediaCard';


const PopularQuestion = () => {
    const [question, setQuestion] = useState("");
    const QuestionList = [
        {
            question: "계정 관리",
            topic: ["회원 이름 찾기", "비밀번호 찾기", "회원가입하기"]
        },
        {
            question: "이용 가이드",
            topic: ["영상 구매 방법", "영상 구독방법", "강사등록 가이드"]  // 이 항목에는 topic이 비어 있음
        }
    ];

    return (
        <div>
            <S.Title>
                <S.MainTitle >헬스쿨 고객지원</S.MainTitle >
            </S.Title>
            <S.Main>
                {QuestionList.map((datas, i) => (
                    <S.Container>
                    <S.Management key={i}>
                        {datas.question}
                    </S.Management>
                       <ul>

                       {datas.topic.map((item, j) => (
                           <S.Li key={j}>
                              <S.ContainerBox>
                                {item}
                                <S.ArrowImg src={process.env.PUBLIC_URL + `/images/help/arrow.png`} alt="arrow" /> 
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


