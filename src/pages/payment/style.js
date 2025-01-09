import styled from "styled-components";

const S = {};

S.Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    overflow: auto;
    width: 540px;
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    & #payment-method {
      width: 100%;
    }

    & .toss-button-wrap {
      width: 100%;
    }

    & .toss-button {
      width: 100%;
      padding: 11px 22px;
      border: none;
      border-radius:  8px;
      background-color: #f2f4f6;
      color: #4e5968;
      font-weight: 600;
      font-size: 17px;
      cursor: pointer;
      background-color: #3282f6;
      color: #f9fcff;
    }

`;

S.ModalBg = styled.div`
  position: fixed;
  width: 100dvw;
  height: 100dvh; //최근 브라우저들은 뷰포트 높이를 더 정확하게 계산할 수 있는 dvh(dynamic viewport height)
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 90;
`

export default S;