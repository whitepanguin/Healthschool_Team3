import React, { useState } from 'react';
import S from './style';

const Menus = [
    {
        icon: '🔥',
        label: '인기카테고리',
        subLabels: ['건강', '매일매일', '유산소', '필라테스', '요가']
    },
    {
        icon: '📄',
        label: '마이페이지',
        subLabels: ['프로필', '내 운동 기록', '설정', '로그아웃', '알림']
    },
    {
        icon: '🚀',
        label: '라이브',
        subLabels: ['현재 방송', '지난 방송', '다음 라이브', '공지사항', '문의하기']
    },
    {
        icon: '🛒',
        label: '장바구니',
        subLabels: ['운동용품', '의류', '영양제', '기타', '결제 내역']
    },
    {
        icon: '📢',
        label: '고객센터',
        subLabels: ['FAQ', '1:1 문의', '운영 시간', '공지사항', '서비스 소개']
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
