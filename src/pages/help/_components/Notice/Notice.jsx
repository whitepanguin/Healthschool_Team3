import React, { useState, useEffect } from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const Notice = () => {
    const [notices, setNotices] = useState([]); // 공지사항 데이터를 저장
    const [loading, setLoading] = useState(true); // 로딩 상태 관리
    const [error, setError] = useState(null); // 에러 상태 관리
    const [clickedItem, setClickedItem] = useState(""); // 클릭된 항목을 추적

    // 공지사항 데이터를 가져오는 함수
    const getNotice = async () => {
        try {
            const response = await fetch('http://localhost:8000/help/getNotice', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            if (response.ok) {
                setNotices(result); // 데이터를 state에 저장
            } else {
                setError('공지사항을 불러오는 데 실패했습니다.');
            }
        } catch (error) {
            setError('서버와의 연결에 문제가 발생했습니다.');
        }
    };

    // 컴포넌트가 마운트될 때 데이터를 불러오기
    useEffect(() => {
        getNotice();
    }, []);

    // 클릭된 항목을 토글하는 함수
    const handleClick = (item) => {
        // 클릭된 항목의 상태를 토글 (이미 클릭된 항목은 다시 비우고, 다른 항목을 클릭 시 변경)
        setClickedItem(item === clickedItem ? "" : item);
    };


    // notices 데이터를 topic 기준으로 그룹화
    const groupedNotices = notices.reduce((acc, curr) => {
        if (!acc[curr.title]) {
            acc[curr.title] = [];
        }
        acc[curr.title].push(curr);
        return acc;
    }, {});
    return (
        <div>
            <S.Header>
                <S.title>
                    <S.h3>공지사항</S.h3>
                </S.title>
            </S.Header>
            <S.Main>
                {Object.keys(groupedNotices).map((topic, index,arr) => (
                  <Link to="/help/notice/noticepages" state={{ topic, groupedNotices,arr}}>
                        <S.Notice key={index}>
                            <S.Topic>
                                <S.h4>{topic}</S.h4>
                            </S.Topic>
                            {groupedNotices[topic].map((notice, idx) => (
                                <S.NoticeBox key={idx} onClick={() => handleClick(notice.title)}>
                                <p>{notice.content}</p>
                                </S.NoticeBox>
                            ))}
                            <img src={process.env.PUBLIC_URL + `/images/help/right.png`} alt="" />
                        </S.Notice>
                    </Link>
                ))}
            </S.Main>
        </div>
    );
};

export default Notice;
