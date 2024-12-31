import React, { useState } from 'react';
import S from './style';
import BasicCheckBox from '../../../../components/checkbox/BasicCheckBox';

const Notice = () => {
    // 상태 관리 추가: Notice 컴포넌트를 보이거나 숨길지 결정
    const [isVisible, setIsVisible] = useState(true);

    // 삭제 버튼 클릭 시 해당 Notice 숨기기
    const handleDelete = () => {
        setIsVisible(false);
    };

    return (
        <div>
            <S.Header>
                <S.title>
                    <S.h3>공지사항</S.h3>    
                </S.title>    
            </S.Header>   
            <S.Main>
                {/* isVisible이 true일 때만 보여짐 */}
                {isVisible && (
                    <S.Notice>
                        <S.Topic>
                            <BasicCheckBox />
                            <S.h4>공지사항 :</S.h4>
                        </S.Topic>
                        <S.NoticeBox>
                            <p>메인 제목</p>
                            {/* 삭제 버튼 클릭 시 handleDelete 함수 실행 */}
                            <S.DeleteImg 
                                src={ process.env.PUBLIC_URL + `/images/help/delete.png`} 
                                alt="delete" 
                                onClick={handleDelete}
                            />
                        </S.NoticeBox>
                    </S.Notice>
                )}
            </S.Main>
        </div>
    );
};

export default Notice;
