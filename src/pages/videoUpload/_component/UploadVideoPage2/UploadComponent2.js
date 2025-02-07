import React, { useRef, useState } from "react";
import S from "./style";
import BasicRadio from "../../../../components/radio/BasicRadio";
import TagSettings from "./TagSettings";
// 라이브 페이지 2번째 페이지 팝업
const StreamSettings = ({ visibility, handleVisibilityChange }) => {
  return (
    <S.RangeWrapper>
      <BasicRadio
        value="public"
        label="공개"
        checked={visibility === "public"}
        onChange={handleVisibilityChange}
      />
      <S.RadioDiv>누구나 내 스트림을 시청할 수 있습니다.</S.RadioDiv>

      <BasicRadio
        value="subscriber"
        label="구독자 공개"
        checked={visibility === "subscriber"}
        onChange={handleVisibilityChange}
      />
      <S.RadioDiv style={{ marginBottom: "0px" }}>
        날 구독하는 사람만 내 스트림을 시청할 수 있습니다.
      </S.RadioDiv>
    </S.RangeWrapper>
  );
};



const UploadVideoPage2 = ({ onPrev, handleComponent2Data,onSubmit }) => {
  const [isModalOpen, setIsModalOpen] = useState(true); // 모달 표시 여부 상태
  const [visibility, setVisibility] = useState("public"); // 기본값: 'public'
  const [tags, setTags] = useState([]);
  
  const closeLiveModal = () => {
    setIsModalOpen(false);
  };
  const handleVisibilityChange = (event) => {
    setVisibility(event.target.value); // visibility 값 변경
  };

  // 완료 버튼 클릭 시, streamData 업데이트 후 상위 컴포넌트로 데이터 전달
  const handleSubmit = async() => {
    handleComponent2Data({ visibility, tags }); // `visibility`만 상위 컴포넌트로 전달
    onSubmit();
  };

  return (
    <>
      {isModalOpen && (
        <S.ModalWrapper>
          <S.ModalContent>
            <S.TitleWrapper>
              <S.TitleDiv>라이브 스트림 생성</S.TitleDiv>
              <S.xImg
                src={process.env.PUBLIC_URL + "/images/live/XVector.png"}
                alt="X"
                onClick={closeLiveModal}
              />
            </S.TitleWrapper>
            <hr />
            <S.Information>공개 상태</S.Information>
            <S.SelectUserText>
              라이브 스트리밍을 볼 수 있는 사용자를 선택하세요
            </S.SelectUserText>

            <StreamSettings
              visibility={visibility}
              handleVisibilityChange={handleVisibilityChange}
            />
            <S.Information>태그 설정</S.Information>
            <S.SelectUserText>
              업로드할 동영상의 태그를 설정하세요
            </S.SelectUserText>
            <TagSettings
              tags={tags}
              setTags={setTags}
            />

            <S.ButtonWrapper>
              <S.PrevButton onClick={onPrev}>이전</S.PrevButton>
              <S.SubmitButton onClick={handleSubmit}>완료</S.SubmitButton>
            </S.ButtonWrapper>
          </S.ModalContent>
        </S.ModalWrapper>
      )}
    </>
  );
};

export default UploadVideoPage2;
