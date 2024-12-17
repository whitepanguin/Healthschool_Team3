import React, { useState } from "react";
import X from "../XVector.png";
import S from "./style";

const LiveComponent2 = ({ onPrev }) => {
  const [isModalOpen, setIsModalOpen] = useState(true); // 모달 표시 여부 상태
  const [selectedOption, setSelectedOption] = useState("public"); // 선택된 라디오 버튼 상태

  const closeLiveModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <>
      {isModalOpen && (
        <S.ModalWrapper>
          <S.ModalContent>
            <S.TitleWrapper>
              <S.TitleDiv>라이브 스트림 생성</S.TitleDiv>
              <S.xImg src={X} alt="Close Icon" onClick={closeLiveModal} />
            </S.TitleWrapper>
            <hr />
            <S.Information>공개 상태</S.Information>
            <S.SelectUserText>
              라이브 스트리밍을 볼 수 있는 사용자를 선택하세요
            </S.SelectUserText>

            

            {/* 버튼 영역 */}
            <S.ButtonWrapper>
              <S.PrevButton onClick={onPrev}>이전</S.PrevButton>
              <S.SubmitButton>완료</S.SubmitButton>
            </S.ButtonWrapper>
          </S.ModalContent>
        </S.ModalWrapper>
      )}
    </>
  );
};

export default LiveComponent2;
