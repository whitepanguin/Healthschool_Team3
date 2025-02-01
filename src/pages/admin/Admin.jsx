import React, { useEffect, useState } from "react";
import BasicButton from "../../components/button/BasicButton";

const Admin = () => {
  const [certifyList, setCertifyList] = useState([]); // 강사 인증 요청 리스트

  useEffect(() => {
    const fetchCertifyList = async () => {
      try {
        // 강사 인증 요청 목록 가져오기
        const certifyResponse = await fetch("http://localhost:8000/certify/list");
        if (!certifyResponse.ok) throw new Error("강사 인증 요청 목록을 불러오는 데 실패했습니다.");
        const certifyRequests = await certifyResponse.json();

        // 유저 목록 가져오기
        const userResponse = await fetch("http://localhost:8000/users/allUsers");
        if (!userResponse.ok) throw new Error("유저 목록을 불러오는 데 실패했습니다.");
        const users = await userResponse.json();

        // 인증 요청과 유저 정보 매칭
        const combinedData = certifyRequests.map((certify) => {
          const user = users.find((u) => u.email === certify.email);
          return {
            _id: certify._id,
            email: certify.email,
            name: user ? user.name : "이름 없음", // 💡 유저 이름 매칭
            isCertified: certify.isCertified,
          };
        });

        setCertifyList(combinedData);
      } catch (error) {
        console.error("데이터 불러오기 오류:", error);
      }
    };

    fetchCertifyList();
  }, []);

  // 인증 상태 업데이트 함수
  const handleAccept = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/certify/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCertified: true }),  // 인증 상태를 true로 변경
      });

      if (!response.ok) throw new Error("인증 상태 변경 실패");

      const updatedCertify = await response.json();
      console.log("인증 상태 업데이트 성공:", updatedCertify);

      // 인증 상태 업데이트 후 상태값 갱신
      setCertifyList((prevList) =>
        prevList.map((certify) =>
          certify._id === id ? { ...certify, isCertified: true } : certify
        )
      );
    } catch (error) {
      console.error("인증 상태 변경 중 오류 발생:", error);
    }
  };

  return (
    <div>
      <h2>강사 인증 요청 목록</h2>
      <table border="1" style={{ width: "100%", textAlign: "center", border: "1px solid #fff" }}>
        <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th>상태</th>
            <th>조치</th>
          </tr>
        </thead>
        <tbody>
          {certifyList.length > 0 ? (
            certifyList
              .map((certify, index) => (
                <tr key={index} style={{ border: "1px solid #fff" }}>
                  <td>{certify.name}</td> {/* 💡 유저의 이름 표시 */}
                  <td>{certify.email}</td>
                  <td>{certify.isCertified ? "완료" : "미완료"}</td>
                  <td>
                    {certify.isCertified ? (
                      <BasicButton size="medium" shape="small" variant="gray" color="white" disabled>
                        수락완료
                      </BasicButton>
                    ) : (
                      <BasicButton
                        size="medium"
                        shape="small"
                        variant="primary"
                        color="white"
                        onClick={() => handleAccept(certify._id)}
                      >
                        수락하기
                      </BasicButton>
                    )}
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan="4">강사 인증 요청이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
