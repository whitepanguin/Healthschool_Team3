import React from 'react';
import S from './DeleteStyle'; // 스타일 컴포넌트
// 확인 및 취소 버튼의 동작을 처리하는 컴포넌트
const DeleteModal = ({ show, onClose, onConfirm, commentId }) => {
  if (!show) return null; // show가 false일 경우 모달이 보이지 않도록 처리

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalMessage>{`댓글을 삭제할까요?`}</S.ModalMessage>
        <S.ModalNotice>※한번 삭제한 댓글은 복구가 불가능 합니다※</S.ModalNotice>

        <hr/>
        <div style={{ display: 'flex', justifyContent:'flex-end', marginTop:'30px', gap:'10px'}}>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.ConfirmButton onClick={onConfirm}>확인</S.ConfirmButton>
        </div>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default DeleteModal;
