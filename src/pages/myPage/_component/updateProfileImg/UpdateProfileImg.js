import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import S from './style';
import BasicButton from '../../../../components/button/BasicButton';
import { setUser, setUserStatus } from '../../../../modules/user';

const UpdateProfileImg = () => {
  const jwtToken = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const pictureRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [picturePath, setPicturePath] = useState(currentUser.profile ? `http://localhost:8000/${currentUser.profile}` : `${process.env.PUBLIC_URL}/images/profile/defaultProfile.jpg`);

  useEffect(() => {
    if (!jwtToken) {
      navigate("/", { replace: true });
    }
  }, [jwtToken]);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setUser({}));
    dispatch(setUserStatus(false));
    navigate("/");
  };

  // 파일 선택 핸들러
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setSelectedFile(file);
      setPicturePath(fileURL);
    }
  };

  // 파일 저장 핸들러
  const savePicture = async () => {
    if (!selectedFile) {
      alert("이미지를 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("picture", selectedFile);
    formData.append("email", currentUser.email); // ✅ 이메일 추가

    try {
      const response = await fetch("http://localhost:8000/users/picture", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (result.message === "프로필 이미지가 성공적으로 업로드되었습니다.") {
        const updatedProfilePath = `http://localhost:8000/${result.filePath}`;
        dispatch(setUser({ ...currentUser, profile: result.filePath }));

        setPicturePath(updatedProfilePath);

        alert("프로필 이미지가 성공적으로 변경되었습니다.");
        
        navigate("/mypage/my", { state: { updated: true } });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("업로드 실패:", error);
      alert("프로필 이미지 업로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.Wrapper>
      <S.Label htmlFor='profile'>
        <S.Profile src={picturePath} alt="프로필 이미지" />
        <S.Detail>위 이미지를 클릭해주세요</S.Detail>
      </S.Label>
      <input
        onChange={handleFileChange}
        style={{ display: "none" }}
        type="file"
        name="picture"
        id="profile"
        ref={pictureRef}
      />
      <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'} onClick={savePicture}>
        프로필 이미지 변경하기
      </BasicButton>
    </S.Wrapper>
  );
};

export default UpdateProfileImg;
