import React from 'react';
import { Link } from "react-router-dom";
import S from './style';

const Logo = () => {
    return (
        <Link to={"/"}>
            <S.Wrapper>
                <S.ImagesWrapper>
                    <img
                        src={process.env.PUBLIC_URL + "/images/main/logo.png"}
                        alt="logo"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </S.ImagesWrapper>
                <S.HomeIconText>헬스쿨</S.HomeIconText>
            </S.Wrapper>
        </Link>
    );
};

export default Logo;