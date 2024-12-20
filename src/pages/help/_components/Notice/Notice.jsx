import React from 'react';
import S from './style';
import BasicCheckBox from '../../../../components/checkbox/BasicCheckBox';
const Notice = () => {
    return (
        <div>
            <S.Header>
                <S.title>
                    <S.h3>공지사항</S.h3>    
                </S.title>    
            </S.Header>   
            <S.Main>
                <S.Notice>
                    <S.Topic>
                        <BasicCheckBox />
                        <S.h4>공지사항 :</S.h4>
                    </S.Topic>
                    <div>
                        <p>메인 제목</p>
                    </div>
                </S.Notice>
                <S.Notice>
                    <S.Topic>
                        <BasicCheckBox  />
                        <S.h4>공지사항 :</S.h4>
                    </S.Topic>
                    <div>
                        <p>메인 제목</p>
                    </div>
                </S.Notice>
                <S.Notice>
                    <S.Topic>
                        <BasicCheckBox  />
                        <S.h4>공지사항 :</S.h4>
                    </S.Topic>
                    <div>
                        <p>메인 제목</p>
                    </div>
                </S.Notice>
                <S.Notice>
                    <S.Topic>
                        <BasicCheckBox />
                        <S.h4>공지사항 :</S.h4>
                    </S.Topic>
                    <div>
                        <p>메인 제목</p>
                    </div>
                </S.Notice>
            </S.Main>
        </div>
    );
};

export default Notice;