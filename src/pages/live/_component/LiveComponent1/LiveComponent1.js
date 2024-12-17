import React, { useState } from 'react';
import S from './style';
import X from '../XVector.png';
import StreamBox from '../StreamBoxComponent/StreamBox';
import PostImg from './PostImg.png';
import Toggle from './toggle.png';
import { Link } from 'react-router-dom';
const LiveComponent1 = ({onNext}) => {
  const [thumbnail, setThumbnail] = useState(PostImg);
  const [isCustomImage, setIsCustomImage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true); // 모달 표시 여부 상태
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 표시 여부
  const [selectedStreamType, setSelectedStreamType] = useState("웹캠"); // 선택된 스트림 유형
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
        setIsCustomImage(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const closeLiveModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // 드롭다운 열기/닫기
  };

  const selectStreamType = (type) => {
    setSelectedStreamType(type); // 선택된 유형 저장
    setIsDropdownOpen(false); // 드롭다운 닫기
  };
  return (
    <>
      {isModalOpen && ( // 조건부 렌더링으로 모달 표시 여부 제어
        <S.ModalWrapper>
          <S.ModalContent>
            <S.TitleWrapper>
              <S.TitleDiv>라이브 스트림 생성</S.TitleDiv>
              <S.xImg src={X} alt="Close Icon" onClick={closeLiveModal} />
            </S.TitleWrapper>
            <hr />
            <S.Information>세부정보</S.Information>
            <S.InformationWrapper>
              <S.InputTitle>제목(필수 항목)</S.InputTitle>
              <form action="">
                <S.Input placeholder="스트림을 생성하는 제목 추가" />
              </form>
            </S.InformationWrapper>
            <div>어떻게 실시간 스트리밍 하고 싶으신가요</div>
            <S.StreamLabel htmlFor="streamtype">스트림 방송 유형을 선택하세요</S.StreamLabel>
            <S.InputWrapper>
              <input
                readOnly
                placeholder="방송 유형을 선택하세요"
                value={selectedStreamType}
                onClick={toggleDropdown}
              />
              <img src = {Toggle}/>
              {/* 드롭다운 표시 */}
              {isDropdownOpen && (
                <div>
                  <StreamBox
                    title="웹캠"
                    onClick={() => selectStreamType("웹캠")}
                  />
                  <StreamBox
                    title="화면 공유"
                    onClick={() => selectStreamType("화면 공유")}
                  />
                </div>
              )}
            </S.InputWrapper>
            <div>썸네일 (가로,세로 비율이 같은 이미지를 첨부해주세요)</div>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <S.Label htmlFor="fileInput" style={{ width: "150px", height: "150px" }}>
              <S.ImgBackground>
                <S.PostThumbNailImg src={thumbnail} isCustomImage={isCustomImage} />
              </S.ImgBackground>
            </S.Label>
            {/* <hr/> */}
            <S.ButtonWrapper>
              <S.NextButton onClick={onNext}>다음</S.NextButton>
            </S.ButtonWrapper>
            
          </S.ModalContent>
        </S.ModalWrapper>
      )}
    </>
  );
};

export default LiveComponent1;
