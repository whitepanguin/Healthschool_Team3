import React, { useState } from "react";
import LiveComponent1 from "./_component/LiveComponent1/LiveComponent1";
import LiveComponent2 from "./_component/LiveComponent2/LiveComponent2";

const Live = () => {
  const [currentStep, setCurrentStep] = useState(1); // 현재 단계 상태

  // 다음 모달로 전환
  const goToNextStep = () => setCurrentStep(2);

  // 이전 모달로 돌아가기
  const goToPreviousStep = () => setCurrentStep(1);

  return (
    <div>
      {/* 조건부 렌더링 */}
      {currentStep === 1 && <LiveComponent1 onNext={goToNextStep} />}
      {currentStep === 2 && <LiveComponent2 onPrev={goToPreviousStep} />}
    </div>
  );
};

export default Live;
