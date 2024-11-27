import React, { useState } from 'react';
import BasicButton from '../../components/button/BasicButton';
import S from './style';
import InputBox from '../../components/Input/InputBox/InputBox';
import BasicInput from '../../components/Input/BasicInput/BasicInput';
import BasicTag from '../../components/tag/BasicTag';
import BasicCheckBox from '../../components/checkbox/BasicCheckBox';
import BasicRadio from '../../components/radio/BasicRadio';
import BasicSwitch from '../../components/switch/BasicSwitch';

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
    // 체크박스
    const [isChecked, setIsChecked] = useState(false);
    // 라디오
    const [selectedValue, setSelectedValue] = useState('option1');
    // 라디오
    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
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
                <InputBox placeHolderText={'입력하세욧...'} />
            </S.Wrapper>
            <S.Wrapper>
                <h2>Input</h2>
                <BasicInput state={inputState} isDisabled={false} errorText={'비밀번호는 영문 대/소문자, 특수문자...'} susccessText={'아주 좋습니다!!'} placeHolderText={'입력하세요...'} />
                <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'} onClick={toggleInputState}>상태변경</BasicButton>
            </S.Wrapper>
            <S.Wrapper>
                <h2>Tag</h2>
                <BasicTag tag={100}>태그</BasicTag>
                <BasicTag tag={200}>태그</BasicTag>
                <BasicTag tag={300}>태그</BasicTag>
                <BasicTag tag={400}>태그</BasicTag>
                <BasicTag tag={500}>태그</BasicTag>
                <BasicTag tag={600}>태그</BasicTag>
            </S.Wrapper>
            <S.Wrapper>
                <h2>Checkbox</h2>
                <BasicCheckBox
                    label="Normal"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />

                <BasicCheckBox
                    label="Hover"
                    checked={false}
                    onChange={() => { }}
                />

                <BasicCheckBox
                    label="Selected"
                    checked={true}
                    onChange={() => { }}
                />

                <BasicCheckBox
                    label="Disabled"
                    checked={false}
                    onChange={() => { }}
                    disabled={true}
                />
            </S.Wrapper>
            <S.Wrapper>
                <h2>Radio</h2>
                <BasicRadio
                    label="Option 1"
                    checked={selectedValue === 'option1'}
                    onChange={handleRadioChange}
                    value="option1"
                />
                <BasicRadio
                    label="Option 2"
                    checked={selectedValue === 'option2'}
                    onChange={handleRadioChange}
                    value="option2"
                />
                <BasicRadio
                    label="Option 3"
                    checked={selectedValue === 'option3'}
                    onChange={handleRadioChange}
                    value="option3"
                    disabled={true}
                />
            </S.Wrapper>
            <S.Wrapper>
                <h2>Switch</h2>
                <BasicSwitch />
                <BasicSwitch isDisabled={true}/>
            </S.Wrapper>
        </div>
    );
};

export default ComponentsPages;