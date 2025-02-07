import React, { useState } from 'react';
import S from './style';
import StreamBox from '../StreamBoxComponent/StreamBox';

// 라이브 페이지 첫번째 페이지 팝업
const UploadComponent1 = ({ onNext, handleComponent1Data, title, description }) => {
  const PostImg = process.env.PUBLIC_URL + "/images/live/PostImg.png";
  
  // 썸네일 미리보기 및 파일 저장
  const [thumbnailPreview, setThumbnailPreview] = useState(PostImg);
  const [thumbnailFile, setThumbnailFile] = useState(null); 

  // 동영상 미리보기 및 파일 저장
  const [videoFile, setVideoFile] = useState(null);
  const [videoFileName, setVideoFileName] = useState(""); // 선택한 동영상 파일명 표시
  const [videoPreview, setVideoPreview] = useState(null); // 동영상 미리보기 URL

  const [isCustomImage, setIsCustomImage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true); // 모달 표시 여부 상태
  const [titleValue, setTitleValue] = useState(title); // 제목 상태
  const [DescriptionValue, setDescriptionValue] = useState(description); // 설명 상태

  // ✅ 썸네일 파일 선택 및 저장
  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    console.log("썸네일 선택됨:", file);

    // 미리보기 설정
    const reader = new FileReader();
    reader.onloadend = () => {
      setThumbnailPreview(reader.result);
      setIsCustomImage(true);
    };
    reader.readAsDataURL(file);

    // 원본 파일 저장 (추후 백엔드 전송)
    setThumbnailFile(file);
  };

  // ✅ 동영상 파일 선택 및 저장 (미리보기 추가)
  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    console.log("동영상 선택됨:", file);
    setVideoFile(file);
    setVideoFileName(file.name); // 선택한 파일명 표시

    // 동영상 미리보기 URL 생성
    const videoURL = URL.createObjectURL(file);
    setVideoPreview(videoURL);
  };

  const closeLiveModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  // 제목이 비어있으면 alert를 띄움
  const handleNext = () => {
    if (!titleValue.trim()) {
      alert("제목은 반드시 입력해야 합니다");
      return;
    }

    if (!videoFile) {
      alert("동영상을 선택해야 합니다.");
      return;
    }

    // 다음 컴포넌트로 보낼 데이터 저장
    handleComponent1Data({
      title: titleValue,
      description: DescriptionValue,
      thumbnailFile, // 썸네일 파일
      videoFile, // 동영상 파일
    });

    onNext();
  };

  return (
    <>
      {isModalOpen && (
        <S.ModalWrapper>
          <S.ModalContent>
            <S.TitleWrapper>
              <S.TitleDiv>동영상 생성</S.TitleDiv>
              <S.xImg src={process.env.PUBLIC_URL + "/images/live/XVector.png"} alt="X" onClick={closeLiveModal} />
            </S.TitleWrapper>
            <hr />
            <S.Information>세부정보</S.Information>
            <S.InformationWrapper>
              <S.InputTitle>제목(필수 항목)</S.InputTitle>
              <form>
                <S.Input
                  placeholder="동영상을 생성하는 제목 추가"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                />
              </form>
            </S.InformationWrapper>
            <S.DescriptionWrapper>
              <S.InputDescription>설명</S.InputDescription>
              <form>
                <S.Input2
                  placeholder="시청자에게 동영상에 대해 설명해 주세요"
                  value={DescriptionValue}
                  onChange={(e) => setDescriptionValue(e.target.value)}
                />
              </form>
            </S.DescriptionWrapper>
            
            {/* ✅ 썸네일 업로드 */}
            <div style={{display:'flex', gap:"200px"}}>
              <div>
                <div>썸네일</div>
                <input
                  type="file"
                  id="thumbnailInput"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleThumbnailChange}
                />
                <S.Label htmlFor="thumbnailInput" style={{ width: "150px", height: "150px" }}>
                  <S.ImgBackground>
                    <S.PostThumbNailImg
                      src={thumbnailPreview}
                      alt="PostImage"
                      isCustomImage={isCustomImage}
                    />
                  </S.ImgBackground>
                </S.Label>
              </div>
              {/* ✅ 동영상 업로드 */}
              <div>
                <div style={{marginBottom:'30px'}}>동영상 선택</div>
                <input
                  type="file"
                  id="videoInput"
                  style={{ display: "none" }}
                  accept="video/*"
                  onChange={handleVideoChange}
                />
                <S.Label htmlFor="videoInput" style={{ width: "320px", height: "180px" }}>
                  <S.VideoBackground>
                    {/* ✅ 동영상이 선택되면 video 태그 표시, 없으면 기본 썸네일 표시 */}
                    {videoPreview ? (
                      <video width="320px" height="180px" controls>
                        <source src={videoPreview} type="video/mp4" />
                        브라우저가 동영상 태그를 지원하지 않습니다.
                      </video>
                    ) : (
                      <img src={PostImg} alt='오류'/>
                    )}
                  </S.VideoBackground>
                </S.Label>
              </div>
            </div>
           
            <S.ButtonWrapper>
              <S.NextButton onClick={handleNext}>다음</S.NextButton>
            </S.ButtonWrapper>
          </S.ModalContent>
        </S.ModalWrapper>
      )}
    </>
  );
};

export default UploadComponent1;
