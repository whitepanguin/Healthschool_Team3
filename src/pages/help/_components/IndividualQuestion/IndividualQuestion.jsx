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


    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible); // isVisible 값 반전 (true면 false, false면 true)
    };

    return (
        <div>
            <S.Header>
                <S.h1>문의 등록</S.h1>
                <S.h4>어떠한 내용이라도 답변드릴 준비가 되어 있습니다!</S.h4>
                <S.h4>문의를 보내주세요! 가능한 한 빨리 답변 드리도록 하겠습니다.</S.h4>
            </S.Header>
            <hr />
            <S.Wrap>
                <S.Main>
                    <S.Account>
                        <TitleBox />
                    </S.Account>
                </S.Main>
                <S.Navber>
                    <S.NavberTitle>문의 목록</S.NavberTitle>
                    <S.NavList>
                        {postChats.length > 0 ? (
                            postChats.map((postChat) => (
                                <S.List  key={postChat._id}>
                                    <h4>Title: {postChat.title}</h4>
                                    {/*<p>Content: {postChat.content}</p>*/}
                                </S.List>
                            ))
                        ) : (
                            <S.ContentNone>문의 내용이 없습니다.</S.ContentNone>
                        )}
                    </S.NavList>
                </S.Navber>
            </S.Wrap>
            <Outlet />
        </div>
    );
};

export default IndividualQuestion;


