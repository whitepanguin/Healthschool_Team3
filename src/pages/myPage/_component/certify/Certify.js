import React, { useRef, useState } from 'react';
import BasicButton from '../../../../components/button/BasicButton';
import S from './style';

const Certify = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  // 파일 선택 핸들러
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...selectedFiles, ...prevFiles]);
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (files.length === 0) {
  //     alert('하나 이상의 파일을 추가해주세요!');
  //     return;
  //   }

  //   const formData = new FormData();
  //   files.forEach((file) => formData.append('files', file));

  //   fetch('/api/upload', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('서버 응답:', data);
  //       alert('파일 업로드 성공!');
  //       setFiles([]);
  //     })
  //     .catch((error) => {
  //       console.error('업로드 실패:', error);
  //       alert('파일 업로드에 실패했습니다.');
  //     });
  // };

  return (
    <S.Container className="container">
      <S.Form  className="form">
        <S.FormGroup>
        <div style={{justifyContent : "left", display : "flex"}}>
          <S.Label>헬스 트레이너 자격증 번호</S.Label>
        </div>
          <S.Input type="text" id="email-username" class="email-username" placeholder="자격증 번호" required />
        </S.FormGroup>
        <div style={{justifyContent : "left", display : "flex"}}>
          <S.Label>파일 업로드</S.Label>
        </div>
        {/* 파일 리스트 */}
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
            
          {/* 내 PC 버튼 (리스트 외부) */}
          <div style={{alignItems : "end"}}>
            <S.FileButton type="button" onClick={handleFileSelect}>
            내  PC
            </S.FileButton>
          </div>
        </div>
        <S.HiddenInputs
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
        />
        <S.ButtonWrapper>
          <BasicButton size={'small'} shape={'small'} variant={'sub'} color={'black'}>취소하기</BasicButton> {/* 취소하기 뒤돌아가기 구현 */}
          <BasicButton size={'small'} shape={'small'} variant={'primary'} color={'white'}>인증 하기</BasicButton>
        </S.ButtonWrapper>
      </S.Form>
    </S.Container>
  );
}

export default Certify;