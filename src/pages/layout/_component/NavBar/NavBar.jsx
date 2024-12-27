import React, { useEffect, useState } from 'react';
import S from './style';
import BasicButton from '../../../../components/button/BasicButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// 메인 매뉴
const Menus = [
    {
        icon: '🔥',
        label: '인기카테고리',
        // subLabels: ['건강', '매일매일', '유산소', '필라테스', '요가']
        // {name : '건강', path :'/search/${name}'}
    },
    {
        icon: '📄',
        label: '마이페이지',
        path: '/mypage'
    },
    {
        icon: '🚀',
        label: '라이브',
        // subLabels: ['공지사항', '현재 방송', '지난 방송', 'QnA']
        // {name : '공지사항', path :'/live/note'}
        // {name : '현재 방송', path :'/live'}
        // {name : '지난 방송', path :'/live/vod'}
        // {name : 'QnA', path :'/live/qna'}
    },
    {
        icon: '🛒',
        label: '장바구니',
        // subLabels: ['제품 선택', '회원정보/주소', '결제', '결제 내역/영수증']
        // {name : '제품선택', path :'/payment'}
        // {name : '회원정보/주소', path :'/payment/address'}
        // {name : '결제', path :'/payment/transaction'}
        // {name : '결제 내역/영수증', path :'/payment/info'}
    },
    {
        icon: '📢',
        label: '고객센터',
        subLabels: [
            { name: '공지사항', path: '/help/notice' },
            { name: '자주 묻는 질문', path: '/help/popularquestion' },
            { name: '1:1 문의', path: '/help/individualquestion' },
        ]
    },
];

// 유저 매뉴
const MyMenus = [
    {
        icon: '📢',
        label: '설정',
        subLabels: [
            { name: '사용자프로필', path: '/' },
            { name: '프로필 변경', path: '/' },
            { name: '클래스 개설', path: '/' },
            { name: '알람 설정', path: '/' },
        ]
    },
    {
        icon: '📢',
        label: '고객센터',
        subLabels: [
            { name: '공지사항', path: '/help/notice' },
            { name: '자주 묻는 질문', path: '/help/popularquestion' },
            { name: '1:1 문의', path: '/help/individualquestion' },
        ]
    },
];


//강사 메뉴

const NavBar = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMyPage, setIsMyPage] = useState(false);
    const navigate = useNavigate();
    // 로그인전, 로그인후, 로그인후(강사)
    const { isLogin, currentUser } = useSelector(state => state.user);
    const { name, isTeacher, profile } = currentUser
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("🚀 ~ NavBar ~ location:", location);
        setIsMyPage(['/mypage', '/help', '/live'].some((path) => location.pathname.includes(path)));
    }, [location]);


    const handleMyMenuClick = (path) => {
        console.log("🚀 ~ handleMenuClick ~ path:", path)
        navigate(path);
    };

    //메인 메뉴 클릭할때 서브 메뉴가 없을때 
    const handleMenuClick = (menu) => {
        if (menu.path) {
            navigate(menu.path);
        } else {
            setActiveMenu((prev) => (prev === menu.label ? null : menu.label)); // subLabels 토글
        }
    }

    //메인 메뉴 서브 메뉴 클릭
    const handleSubMenu = (path) => {
        navigate(path);
    }

    return (
        <S.Wrapper>
            {isMyPage ? (
                <>
                    <S.ProfileSection>
                        <S.ProfileImage>
                            <S.Profile src={profile == ''? process.env.PUBLIC_URL + `/images/profile/defaultProfile.jpg`: profile } alt={'#'} />
                        </S.ProfileImage>
                        <S.ProfileName>{name} 회원님</S.ProfileName>
                        {isTeacher &&
                            <>
                                <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'} font={'h7'}>Q&A  답변</BasicButton>
                            </>
                        }

                    </S.ProfileSection>

                    <S.MenuWrapper>
                        {isMyPage && (
                            <>
                                {MyMenus.map((menu, index) => (
                                    <div key={index}>
                                        <S.MenuItem>
                                            <S.MenuIcon>{menu.icon}</S.MenuIcon>
                                            <S.MenuLabel>{menu.label}</S.MenuLabel>
                                        </S.MenuItem>
                                        {(
                                            <S.SubLabelWrapper>
                                                {menu.subLabels.map((subLabel, subIndex) => (
                                                    <S.SubLabel key={subIndex} onClick={() => handleMyMenuClick(subLabel.path)}>{subLabel.name}</S.SubLabel>
                                                ))}
                                            </S.SubLabelWrapper>
                                        )}
                                    </div>
                                ))}
                            </>
                        )}
                    </S.MenuWrapper>
                </>
            ) : (
                <>
                    {Menus.map((menu, index) => (
                        <S.MenuWrapper key={index}>
                            <S.MenuItem onClick={() => handleMenuClick(menu)}>
                                <S.MenuIcon>{menu.icon}</S.MenuIcon>
                                <S.MenuLabel>{menu.label}</S.MenuLabel>
                            </S.MenuItem>
                            {activeMenu === menu.label && menu.subLabels && (
                                <S.SubLabelWrapper>
                                    {menu.subLabels.map((subLabel, subIndex) => (
                                        <S.SubLabel key={subIndex} onClick={()=>handleSubMenu(subLabel.path)}>{subLabel.name}</S.SubLabel>
                                    ))}
                                </S.SubLabelWrapper>
                            )}
                        </S.MenuWrapper>
                    ))}
                </>
            )}
        </S.Wrapper>
    );
};

export default NavBar;
