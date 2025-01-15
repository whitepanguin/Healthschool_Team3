import React, { useState } from 'react';
import BasicButton from '../../../../components/button/BasicButton';
import S from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserStatus } from '../../../../modules/user';

const UserStatus = () => {
    // 로그인전, 로그인후, 로그인후(강사)
    const { isLogin, currentUser } = useSelector(state => state.user);
    const { name, isTeacher, profile } = currentUser
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //알람확인
    const [alarm, setAlarm] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem("jwtToken")
        dispatch(setUser({}))
        dispatch(setUserStatus(false))
        navigate("/");
    }

    return (
        <S.Wrapper>
            {isLogin && (
                <S.UserName>
                    <p>{name} 회원님</p>
                </S.UserName>
            )}
            <Link>
                <S.ImagesWrapper>
                    <S.Images
                        src={process.env.PUBLIC_URL + `/images/main/${alarm.length === 0 ? ('bell_w.png') : ('bellOn_w.png')}`}
                        alt="logo"
                    />
                </S.ImagesWrapper>
            </Link>
            {isTeacher && isLogin && (
                <>
                    <Link to={'/live'}>
                        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>영상업로드</BasicButton>
                    </Link>
                    <Link to={'/live'}>
                        <BasicButton size={'medium'} shape={'small'} variant={'live'} color={'white'}>라이브 온</BasicButton>
                    </Link>
                </>
            )}
            <Link>
                <S.ImagesWrapper>
                    <S.Images
                        src={process.env.PUBLIC_URL + "/images/main/questionAnswer_w.png"}
                        alt="logo"
                    />
                </S.ImagesWrapper>
            </Link>
            {!isLogin ? (
                <Link to={'/signin'}>
                    <BasicButton size={'small'} shape={'small'} variant={'primary'} color={'white'}>로그인</BasicButton>
                </Link>
            ) : (
                <>
                    <BasicButton size={'small'} shape={'small'} variant={'primary'} color={'white'} onClick={handleLogout}>로그아웃</BasicButton>
                </>
            )}
        </S.Wrapper>
    );
};

export default UserStatus;