import React, { useState } from 'react';
import BasicButton from '../../components/button/BasicButton';
import S from './style';
import InputBox from '../../components/Input/InputBox/InputBox';
import BasicInput from '../../components/Input/BasicInput/BasicInput';

const ComponentsPages = () => {
    const [inputState, setInputState] = useState('');

    // 버튼 클릭 시 상태 변경
    const toggleInputState = () => {
        setInputState((prevState) => {
            if (prevState === '') return 'error';
            if (prevState === 'error') return 'success';
            return ''; // 'success' 상태일 때 다시 초기 상태로
        });
    };

    return (
        <div>
            <S.Wrapper>
                <h2>button Type</h2>
                <BasicButton size={'medium'} shape={'small'} variant={'default'} color={'white'}>Button Default</BasicButton>
                <BasicButton size={'medium'} shape={'small'} variant={'sub'} color={'black'}>Button Primary Light</BasicButton>
                <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>Button Primary</BasicButton>
            </S.Wrapper>
            <S.Wrapper>
                <h2>button Size</h2>
                <BasicButton size={'small'} shape={'small'} variant={'primary'} color={'white'}>small</BasicButton>
                <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>medium</BasicButton>
                <BasicButton size={'large'} shape={'small'} variant={'primary'} color={'white'}>large</BasicButton>
                <BasicButton size={'full'} shape={'small'} variant={'primary'} color={'white'}>full</BasicButton>
            </S.Wrapper>
            <S.Wrapper>
                <h2>댓글 Input Box</h2>
                <InputBox placeHolderText={'입력하세욧...'}/>
            </S.Wrapper>
            <S.Wrapper>
                <h2>Input</h2>
                <BasicInput state={inputState} isDisabled={false} errorText={'비밀번호는 영문 대/소문자, 특수문자...'} susccessText={'아주 좋습니다!!'} placeHolderText={'입력하세요...'}/>
                <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'} onClick={toggleInputState}>상태변경</BasicButton>
            </S.Wrapper>
        </div>
    );
};

export default ComponentsPages;