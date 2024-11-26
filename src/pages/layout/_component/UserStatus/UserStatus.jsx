import React, { useState } from 'react';
import BasicButton from '../../../../components/button/BasicButton';
import S from './style';
import { Link } from 'react-router-dom';

const UserStatus = () => {
    // 로그인전, 로그인후, 로그인후(강사)
    const [userStatus, setUserStatus] = useState('로그인전');
    //알람확인
    const [alarm, setAlarm] = useState([]);
    //강사확인
    const [isInstructor, setIsInstructor] = useState(false);

    return (
        <S.Wrapper>
            {userStatus === '로그인' && (
                <S.UserName>
                    <p>홍길동 회원님</p>
                </S.UserName>
            )}
            <S.ImagesWrapper>
                <S.Images
                    src={process.env.PUBLIC_URL + `/images/main/${alarm.length === 0 ? ('bell_w.png') : ('bellOn_w.png')}`}
                    alt="logo"
                />
            </S.ImagesWrapper>
            {isInstructor && userStatus === '로그인' && (
                <>
                    <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>영상업로드</BasicButton>
                    <BasicButton size={'medium'} shape={'small'} variant={'live'} color={'white'}>라이브 온</BasicButton>
                </>
            )}
            <S.ImagesWrapper>
                <S.Images
                    src={process.env.PUBLIC_URL + "/images/main/questionAnswer_w.png"}
                    alt="logo"
                />
            </S.ImagesWrapper>
            {userStatus === '로그인전' ? (
                <>
                    <BasicButton size={'small'} shape={'small'} variant={'primary'} color={'white'}>로그인</BasicButton>
                </>
            ) : (
                <>
                    <BasicButton size={'small'} shape={'small'} variant={'primary'} color={'white'}>로그아웃</BasicButton>
                </>
            )}
        </S.Wrapper>
    );
};

export default UserStatus;