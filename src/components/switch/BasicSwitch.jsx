import React, { useState } from 'react';
import S from './style';

const BasicSwitch = ({ isDisabled }) => {
    const [isOn, setIsOn] = useState(false);

    return (
        <S.SwitchContainer>
            {isDisabled ? (
                <>
                    {/* 스위치 비활성화 */}
                    <S.SwitchWrapper disabled>
                        <S.Switch $on={false} disabled>
                            <S.Knob $on={false} disabled />
                        </S.Switch>
                        <S.Label disabled>Disabled</S.Label>
                    </S.SwitchWrapper>
                </>
            ) : (
                <>
                    {/* 스위치 on/off */}
                    <S.SwitchWrapper>
                        <S.Switch $on={isOn} onClick={() => setIsOn(!isOn)}>
                            <S.Knob $on={isOn} />
                        </S.Switch>
                        <S.Label>{isOn ? 'On' : 'Off'}</S.Label>
                    </S.SwitchWrapper>
                </>
            )}
        </S.SwitchContainer>
    );
};

export default BasicSwitch;