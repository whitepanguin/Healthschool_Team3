import React, { useEffect, useState } from 'react';
import S from './style';

const PopularQuestion = () => {
    const [quesetions, setQuesetions] = useState([]);

    const getPopularQuestion = async () => {
        console.log("여기");
        try {
            const response = await fetch(`http://localhost:8000/help/getPopularQuesetion`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json(); // JSON으로 변환
            if (response.ok) {
                console.log(result);
                setQuesetions(result);
            } else {
                // 오류 처리
            }
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error);
        }
    };

    useEffect(() => {
        getPopularQuestion();
    }, []);

    const [clickedItem, setClickedItem] = useState(""); // 클릭된 항목을 추적

    const handleClick = (item) => {
        // 클릭된 항목의 상태를 토글 (이미 클릭된 항목은 다시 비우고, 다른 항목을 클릭 시 변경)
        setClickedItem(item === clickedItem ? "" : item);
    };
    console.log()
    // quesetions 데이터를 topic 기준으로 그룹화
    const groupedQuestions = quesetions.reduce((acc, curr) => {
        if (!acc[curr.topic]) {
            acc[curr.topic] = [];
        }
        acc[curr.topic].push(curr);
        return acc;
    }, {});
    console.log(groupedQuestions)
    return (
        <div>
            <S.Title>
                <S.MainTitle>헬스쿨 고객지원</S.MainTitle>
            </S.Title>
            <S.Main>
                {Object.keys(groupedQuestions).map((topic, i) => (
                    <S.Container key={i}>
                        <S.Management>
                            {topic} {/* topic 이름 출력 */}
                        </S.Management>
                        <ul>
                            {groupedQuestions[topic].map((item, j) => (
                                <S.Li key={j} onClick={() => handleClick(item.title)}>
                                    <S.ContainerBox>
                                        {item.title}
                                        <S.ArrowImg
                                            src={clickedItem === item.title
                                                ? process.env.PUBLIC_URL + `/images/help/up.png`
                                                : process.env.PUBLIC_URL + `/images/help/down.png`}
                                            alt="arrow"
                                        />
                                    </S.ContainerBox>
                                    <S.Nav isVisible={clickedItem === item.title}>
                                        <div>{item.answer}</div>
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
