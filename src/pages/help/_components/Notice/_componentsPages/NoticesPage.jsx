import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import S from './style';

const NoticesPage = () => {
    const location = useLocation();
    const { topic, groupedNotices, arr } = location.state;
    console.log("topic", topic)
    console.log("groupedNotices", groupedNotices)
    console.log("arr", arr)
    console.log(groupedNotices[topic])

    return (
        <div>
            <S.topic>{topic}</S.topic>
            <S.main>
                {groupedNotices[topic].map((notice, idx) => (
                    <div key={idx}>
                        <p>내용 : {notice.content}</p>
                        <p>{notice.createdAt.substring(0, 10)}</p>  {/* createdAt의 앞 10자만 표시 */}
                    </div>
                ))}
            </S.main>
            <S.footer>
                <Link to={"/help/notice"}><S.backButton >Back</S.backButton ></Link>
            </S.footer>
        </div>
    );
};

export default NoticesPage;
