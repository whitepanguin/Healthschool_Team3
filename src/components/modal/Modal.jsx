import React from 'react';
import S from './style';
import BasicButton from '../button/BasicButton';

const Modal = ({ title, description, icon, confirmText, cancelText, onCancel, onConfirm, isClosable }) => {
    return (
        <S.ModalWrapper>
            <S.Modal>
                {isClosable && <S.CloseButton onClick={onCancel}>×</S.CloseButton>}
                {icon && <S.Icon>{icon}</S.Icon>}
                <S.Content>
                    <S.Title>{title}</S.Title>
                    <S.Description>{description}</S.Description>
                </S.Content>
                <S.Actions>
                    {cancelText && <BasicButton size={'small'} shape={'small'} variant={'sub'} color={'black'} onClick={onCancel}>{cancelText}</BasicButton>}
                    {confirmText && <BasicButton size={'small'} shape={'small'} variant={'primary'} color={'white'} onClick={onConfirm}>{confirmText}</BasicButton>}
                </S.Actions>
            </S.Modal>
        </S.ModalWrapper>
    );
};

export default Modal;
