import React, { useRef, useState } from 'react';
import BasicButton from '../../../../components/button/BasicButton';
import S from './style';
import { useSelector } from 'react-redux';

const Certify = () => {
  const jwtToken = localStorage.getItem("jwtToken");
  const [files, setFiles] = useState([]);
  const [qualifyNumber, setQualifyNumber] = useState('');
  const fileInputRef = useRef(null);

  const { currentUser } = useSelector((state) => state.user);

  // 파일 선택 핸들러
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    console.log("선택된 파일:", selectedFiles);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  // 파일 선택 버튼 클릭 핸들러
  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  // 파일 삭제 핸들러
  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!qualifyNumber || files.length === 0) {
      alert("자격증 번호와 이미지를 모두 입력해주세요!");
      return;
    }
  
    const formData = new FormData();
    formData.append("email", currentUser.email);
    formData.append("qualifyNumber", qualifyNumber);
  
    files.forEach((file) => {
      formData.append("imageUrls", file);
    });
  
    try {
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
  
      const response = await fetch("http://localhost:8000/users/certifyRequest", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        body: formData,
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert("강사 인증 요청이 성공적으로 제출되었습니다.");
        setFiles([]);
        setQualifyNumber("");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("인증 요청 실패:", error);
      alert("인증 요청 중 오류가 발생했습니다.");
    }
  };
  

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
        <div style={{justifyContent : "left", display : "flex"}}>
          <S.Label>헬스 트레이너 자격증 번호</S.Label>
          </div>
          <S.Input
            type="text"
            placeholder="자격증 번호를 입력하세요"
            value={qualifyNumber}
            onChange={(e) => setQualifyNumber(e.target.value)}
            required
          />
        </S.FormGroup>

        <div style={{justifyContent : "left", display : "flex"}}>
          <S.Label>파일 업로드</S.Label>
          </div>
          <div style={{display : "flex", flexDirection : "row"}}>
            <S.FileList>
            {files.map((file, index) => (
              <S.FileItem key={index}>
                {file.name}
                <S.RemoveButton onClick={() => handleRemoveFile(index)}>
                  X
                </S.RemoveButton>
              </S.FileItem>
            ))}
            </S.FileList>

            <div style={{alignItems : "end"}}>
            <S.FileButton type="button" onClick={handleFileSelect}>
             내 PC
            </S.FileButton>
            </div>
          </div>
            <S.HiddenInputs
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              name = "imageUrls"
              multiple
            />

        <S.ButtonWrapper>
          <BasicButton size={'small'} shape={'small'} variant={'sub'} color={'black'}>
            취소하기
          </BasicButton>
          <BasicButton size={'small'} shape={'small'} variant={'primary'} color={'white'} onClick={handleSubmit}>
            인증 요청
          </BasicButton>
        </S.ButtonWrapper>
      </S.Form>
    </S.Container>
  );
};

export default Certify;
