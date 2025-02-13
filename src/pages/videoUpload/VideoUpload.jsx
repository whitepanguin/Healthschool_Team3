import React, { useState } from "react";
import UploadComponent1 from "./_component/UploadVideoPage1/UploadComponent1";
import UploadComponent2 from "./_component/UploadVideoPage2/UploadComponent2";
import { useSelector } from "react-redux";

const VideoUpload = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { currentUser, isLogin } = useSelector((state) => state.user); // user 상태 가져오기
  const [streamData, setStreamData] = useState({
    title: "",
    description: "",
    visibility: "public",
    tags: [],
    thumbnailFile: null, // 파일 자체를 저장
    videoFile:null,
  });

  // 첫 번째 단계에서 받은 데이터 저장
  const handleComponent1Data = (data) => {
    setStreamData((prevData) => ({
      ...prevData,
      title: data.title,
      description: data.description,
      thumbnailFile: data.thumbnailFile, // 썸네일 파일 저장
      videoFile: data.videoFile
    }));
  };

  // 두 번째 단계에서 받은 데이터 저장
  const handleComponent2Data = (data) => {
    console.log("visibility",data.visibility)
    console.log("tags",data.tags)
    setStreamData((prevData) => ({
      ...prevData,
      visibility: data.visibility,
      tags: data.tags,
    }));
  };

  // ✅ **썸네일과 데이터를 백엔드로 전송**
  const handleSubmit = async () => {
    console.log(currentUser)
    const formData = new FormData();
    formData.append("title", streamData.title);
    formData.append("description", streamData.description);
    formData.append("visibility", streamData.visibility);
    formData.append("tags", JSON.stringify(streamData.tags));
    formData.append("thumbnail", streamData.thumbnailFile);
    formData.append("video", streamData.videoFile);
    formData.append("nickname", currentUser.name);
    formData.append("email", currentUser.email);
    formData.append("userProfile",currentUser.profile)
    console.log("📂 FormData 확인:");
  for (let pair of formData.entries()) {
    console.log(pair[0], pair[1]);
  }

    try {
      console.log(streamData)
      const response = await fetch("http://localhost:8000/videos/uploads", {
        method: "POST",
        body: formData, // JSON이 아닌 `FormData`를 사용!
      });
      if (!response.ok) {
        const errorResponse = await response.text();
        throw new Error(`서버 오류: ${errorResponse}`);
      }
      const result = await response.json();
      console.log("업로드 성공:", result);
    } catch (error) {
      console.error("업로드 중 오류 발생:", error);
    }
  };

  return (
    <div>
      {currentStep === 1 && (
        <UploadComponent1
          onNext={() => setCurrentStep(2)}
          handleComponent1Data={handleComponent1Data}
          title={streamData.title}
          description={streamData.description}
        />
      )}
      {currentStep === 2 && (
        <UploadComponent2
          onPrev={() => setCurrentStep(1)}
          handleComponent2Data={handleComponent2Data}
          Prevtags={streamData.tags}
          Prevvisibility={streamData.visibility}
          onSubmit={handleSubmit} // ✅ 완료 버튼 클릭 시 실행
        />
      )}
    </div>
  );
};

export default VideoUpload;
