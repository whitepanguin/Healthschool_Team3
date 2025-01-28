// IndividualQuestion.jsx
import React, { useEffect, useState } from 'react';
import S from './style';
import { Outlet } from 'react-router-dom';
import TitleBox from './_component/TitleBox';
import { useSelector } from 'react-redux';

const IndividualQuestion = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [postChats, setPostChats] = useState([]);  // 상태 추가

    const getPostChat = async () => {
        console.log(currentUser.email);
        try {
            const response = await fetch('http://localhost:8000/help/getPostChat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: currentUser.email,
                }),
            });
            const result = await response.json();
            console.log("result", result);
            if (response.ok) {
                setPostChats(result);  // 받은 데이터를 상태에 저장
            } else {
                // 에러 처리
            }
        } catch (error) {
            console.error("Error fetching postChats:", error);
        }
    };

    useEffect(() => {
        getPostChat();  // 컴포넌트가 처음 렌더링될 때 호출
    }, [currentUser.email]);  // currentUser.email이 변경될 때마다 호출

    return (
        <div>
            <S.Header>
                <S.h1>문의 등록</S.h1>
                <S.h4>어떠한 내용이라도 답변드릴 준비가 되어 있습니다!</S.h4>
                <S.h4>문의를 보내주세요! 가능한 한 빨리 답변 드리도록 하겠습니다.</S.h4>
            </S.Header>
            <h3>상세보기</h3>
            <hr />
            <div id="Questions">
                {postChats.length > 0 ? (
                    postChats.map((postChat) => (
                        <div key={postChat._id}>
                            <h4>Title: {postChat.title}</h4>
                            <p>Content: {postChat.content}</p>
                        </div>
                    ))
                ) : (
                    <p>문의 내용이 없습니다.</p> // 데이터를 받지 못했을 때 표시
                )}
            </div>
            <S.Main>
                <S.Account>
                    <TitleBox />
                </S.Account>
            </S.Main>
            <Outlet />
        </div>
    );
};

export default IndividualQuestion;
