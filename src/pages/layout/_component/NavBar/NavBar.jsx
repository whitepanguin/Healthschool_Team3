import React, { useState } from 'react';
import S from './style';

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
        subLabels: ['강사 상세페이지', '구매강의', '달력', '강사인증',  '영상 업로드', '설정']
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

const NavBar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menuLabel) => {
        setActiveMenu((prev) => (prev === menuLabel ? null : menuLabel));
    };

    return (
        <S.Wrapper>
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
        </S.Wrapper>
    );
};

export default NavBar;
