import React, { useState } from "react";
import UploadComponent1 from "./_component/UploadVideoPage1/UploadComponent1";
import UploadComponent2 from "./_component/UploadVideoPage2/UploadComponent2";
// Livecomponent1과 Livecomponent를 연결 및 props 전달
const VideoUpload = () => {
  const [currentStep, setCurrentStep] = useState(1); // 현재 단계 상태
  const [streamData, setStreamData] = useState({
    title: "", // 제목
    description: "", // 스트림 유형
    thumbnail: "", // 썸네일 이미지
    visibility: "public", // 공개 상태
    tags: [],
  }); // 두 페이지에서 받은 데이터를 모을 객체

  // LiveComponent1에서 입력받은 데이터 저장
  const handleComponent1Data = (data) => {
    setStreamData((prevData) => ({
      ...prevData,
      title: data.title,
      description: data.description,
      thumbnail: data.thumbnail,
    }));
    console.log(streamData);
  };

  // LiveComponent2에서 입력받은 데이터 저장
  const handleComponent2Data = (data) => {
    console.log("data",data)
    setStreamData((prevData) => ({
      ...prevData,
      visibility: data.visibility,
      tags: data.tags
    }));
    console.log(streamData)
  };

  // 다음 모달로 전환
  const goToNextStep = () => setCurrentStep(2);

  // 이전 모달로 돌아가기
  const goToPreviousStep = () => setCurrentStep(1);

  return (
    <div>
      {/* 조건부 렌더링 */}
      {currentStep === 1 && (
        <UploadComponent1
          onNext={goToNextStep}
          handleComponent1Data={handleComponent1Data}
          title={streamData.title} // 제목을 전달
          description={streamData.description} // 설명을 전달
        />
      )}
      {currentStep === 2 && (
        <UploadComponent2
          onPrev={goToPreviousStep}
          handleComponent2Data={handleComponent2Data}
          Prevtags={streamData.tags}
          Prevvisibility={streamData.visibility}
        />
      )}
    </div>
  );
};

export default VideoUpload;
