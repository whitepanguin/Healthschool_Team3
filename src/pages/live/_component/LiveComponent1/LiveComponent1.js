import React, { useState } from 'react';
import S from './style';
import StreamBox from '../StreamBoxComponent/StreamBox';

// 라이브 페이지 첫번째 페이지 팝업
const LiveComponent1 = ({ onNext, onData, title }) => {
  const PostImg = process.env.PUBLIC_URL + "/images/live/PostImg.png";
  const [thumbnail, setThumbnail] = useState(PostImg);
  const [isCustomImage, setIsCustomImage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true); // 모달 표시 여부 상태
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 표시 여부
  const [selectedStreamType, setSelectedStreamType] = useState("웹캠"); // 선택된 스트림 유형
  const [titleValue, setTitleValue] = useState(title); // 제목 상태

  // 썸네일 파일 처리
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

  // 제목이 비어있으면 alert를 띄움
  const handleNext = () => {
    if (!titleValue.trim()) {
      alert("제목은 반드시 입력해야 합니다");
      return; // 제목이 비어있다면 다음 단계로 넘어가지 않음
    }
    onData({
      title: titleValue,
      streamType: selectedStreamType,
      thumbnail
    });
    onNext();
  };

  return (
    <>
      {isModalOpen && ( // 조건부 렌더링으로 모달 표시 여부 제어
        <S.ModalWrapper>
          <S.ModalContent>
            <S.TitleWrapper>
              <S.TitleDiv>라이브 스트림 생성</S.TitleDiv>
              <S.xImg src={process.env.PUBLIC_URL + "/images/live/XVector.png"} alt="X" onClick={closeLiveModal} />
            </S.TitleWrapper>
            <hr />
            <S.Information>세부정보</S.Information>
            <S.InformationWrapper>
              <S.InputTitle>제목(필수 항목)</S.InputTitle>
              <form>
                <S.Input
                  placeholder="스트림을 생성하는 제목 추가"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)} // 제목 업데이트
                />
              </form>
            </S.InformationWrapper>
            <div>어떻게 실시간 스트리밍 하고 싶으신가요?</div>
            <S.StreamLabel htmlFor="streamtype">스트림 방송 유형을 선택하세요</S.StreamLabel>
            <S.InputWrapper>
              <input
                readOnly
                placeholder="방송 유형을 선택하세요"
                value={selectedStreamType}
                onClick={toggleDropdown}
              />
              <img src={process.env.PUBLIC_URL + "/images/live/toggle.png"} alt="toggle" style={{position:'absolute', top:'10px', left:'170px', cursor:"pointer"}} onClick={toggleDropdown}  />
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
            <div>썸네일 (가로, 세로 비율이 같은 이미지를 첨부해주세요)</div>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <S.Label htmlFor="fileInput" style={{ width: "150px", height: "150px" }}>
              <S.ImgBackground>
                <S.PostThumbNailImg
                  src={thumbnail}
                  alt="PostImage"
                  isCustomImage={isCustomImage}
                />
              </S.ImgBackground>
            </S.Label>

            <S.ButtonWrapper>
              <S.NextButton onClick={handleNext}>다음</S.NextButton>
            </S.ButtonWrapper>
          </S.ModalContent>
        </S.ModalWrapper>
      )}
    </>
  );
};

export default LiveComponent1;
