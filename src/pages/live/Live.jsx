import React, { useState } from "react";
import LiveComponent1 from "./_component/LiveComponent1/LiveComponent1";
import LiveComponent2 from "./_component/LiveComponent2/LiveComponent2";
// Livecomponent1과 Livecomponent를 연결 및 props 전달
const Live = () => {
  const [currentStep, setCurrentStep] = useState(1); // 현재 단계 상태
  const [streamData, setStreamData] = useState({
    title: "", // 제목
    streamType: "웹캠", // 스트림 유형
    thumbnail: "", // 썸네일 이미지
    visibility: "public", // 공개 상태
  }); // 두 페이지에서 받은 데이터를 모을 객체

  // LiveComponent1에서 입력받은 데이터 저장
  const handleComponent1Data = (data) => {
    setStreamData((prevData) => ({
      ...prevData,
      title: data.title,
      streamType: data.streamType,
      thumbnail: data.thumbnail,
    }));
  };

  // LiveComponent2에서 입력받은 데이터 저장
  const handleComponent2Data = (data) => {
    setStreamData((prevData) => ({
      ...prevData,
      visibility: data.visibility,
    }));
  };

  // 다음 모달로 전환
  const goToNextStep = () => setCurrentStep(2);

  // 이전 모달로 돌아가기
  const goToPreviousStep = () => setCurrentStep(1);

  return (
    <div>
      {/* 조건부 렌더링 */}
      {currentStep === 1 && (
        <LiveComponent1
          onNext={goToNextStep}
          onData={handleComponent1Data}
          title={streamData.title} // 제목을 전달
        />
      )}
      {currentStep === 2 && (
        <LiveComponent2
          onPrev={goToPreviousStep}
          onData={handleComponent2Data}
          onSubmit={() => console.log(streamData)}
        />
      )}
    </div>
  );
};

export default Live;
