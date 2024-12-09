import React, { useEffect, useState } from 'react';
import S from './style';
import BasicButton from '../../../../components/button/BasicButton';
import { useLocation } from 'react-router-dom';

const Menus = [
    {
        icon: '🔥',
        label: '인기카테고리',
        subLabels: ['건강', '매일매일', '유산소', '필라테스', '요가']
        // {name : '건강', path :'/search/${name}'}
    },
    {
        icon: '📄',
        label: '마이페이지',
        subLabels: ['강사 상세페이지', '구매강의', '달력', '강사인증', '영상 업로드', '설정']
        // {name : '상세페이지', path :'/mypage'}
        // {name : '구매강의', path :'/mypage/vid'}
        // {name : '달력', path :'/mypage/planner'}
        // {name : '강사인증', path :'/mypage/trainer'}
        // {name : '영상 업로드', path :'/upload'}
        // {name : '설정', path :'/mypage/setting'}
    },
    {
        icon: '🚀',
        label: '라이브',
        subLabels: ['공지사항', '현재 방송', '지난 방송', 'QnA']
        // {name : '공지사항', path :'/live/note'}
        // {name : '현재 방송', path :'/live'}
        // {name : '지난 방송', path :'/live/vod'}
        // {name : 'QnA', path :'/live/qna'}
    },
    {
        icon: '🛒',
        label: '장바구니',
        subLabels: ['제품 선택', '회원정보/주소', '결제', '결제 내역/영수증']
        // {name : '제품선택', path :'/payment'}
        // {name : '회원정보/주소', path :'/payment/address'}
        // {name : '결제', path :'/payment/transaction'}
        // {name : '결제 내역/영수증', path :'/payment/info'}
    },
    {
        icon: '📢',
        label: '고객센터',
        subLabels: ['서비스 소개', '공지사항', 'FAQ', '1:1 문의']
        // {name : '서비스 소개', path :'/help'}
        // {name : '공지사항', path :'/help/note'}
        // {name : 'FAQ', path :'/help/faq'}
        // {name : '1:1 문의', path :'/help/11'}
    },
];

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
            { name: '사용자프로필', path: '/' },
            { name: '프로필 변경', path: '/' },
            { name: '클래스 개설', path: '/' },
            { name: '알람 설정', path: '/' },
        ]
    },
];

const NavBar = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMyPage, setIsMyPage] = useState(false);

    useEffect(() => {
        console.log("🚀 ~ NavBar ~ location:", location);
        setIsMyPage(location.pathname.includes('/mypage'));
    }, [location]);

    const handleMenuClick = (menuLabel) => {
        setActiveMenu((prev) => (prev === menuLabel ? null : menuLabel));
    };

    return (
        <S.Wrapper>
            {isMyPage ? (
                <>
                    <S.ProfileSection>
                        <S.ProfileImage />
                        <S.ProfileName>헬스짱</S.ProfileName>
                        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>Q&A  답변</BasicButton>
                    </S.ProfileSection>

                    <S.MenuWrapper>
                        {isMyPage && (
                            <>
                                {MyMenus.map((menu, index) => (
                                    <div key={index}>
                                        <S.MenuItem onClick={() => handleMenuClick(menu.label)}>
                                            <S.MenuIcon>{menu.icon}</S.MenuIcon>
                                            <S.MenuLabel>{menu.label}</S.MenuLabel>
                                        </S.MenuItem>
                                        {(
                                            <S.SubLabelWrapper>
                                                {menu.subLabels.map((subLabel, subIndex) => (
                                                    <S.SubLabel key={subIndex}>{subLabel.name}</S.SubLabel>
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
                            <S.MenuItem onClick={() => handleMenuClick(menu.label)}>
                                <S.MenuIcon>{menu.icon}</S.MenuIcon>
                                <S.MenuLabel>{menu.label}</S.MenuLabel>
                            </S.MenuItem>
                            {activeMenu === menu.label && (
                                <S.SubLabelWrapper>
                                    {menu.subLabels.map((subLabel, subIndex) => (
                                        <S.SubLabel key={subIndex}>{subLabel}</S.SubLabel>
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
