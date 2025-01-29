import React from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';

const OftenQnA = ({label, uri}) => {

  const navigate = useNavigate();
    const onCLickToLink = () => {
        navigate(`${uri}`)
    }

  const qaList = [
    { question: "자주 물어보는 질문 1", date: "2024-06-10", views: 123 },
    { question: "자주 물어보는 질문 2", date: "2024-06-09", views: 234 },
    { question: "자주 물어보는 질문 3", date: "2024-06-08", views: 345 },
    { question: "자주 물어보는 질문 4", date: "2024-06-07", views: 456 },
    { question: "자주 물어보는 질문 5", date: "2024-06-06", views: 567 },
    { question: "자주 물어보는 질문 6", date: "2024-06-05", views: 678 },
    { question: "자주 물어보는 질문 7", date: "2024-06-04", views: 789 },
    { question: "자주 물어보는 질문 8", date: "2024-06-03", views: 890 }
  ];

  return (
    <div>
    <h2 onClick={onCLickToLink} style={{fontSize : 24, marginBottom : 60, cursor : "pointer"}}>{`${label} >`}</h2>
    <S.Container>
      {/* 왼쪽 컬럼 */}
      <S.Column>
        <S.Table>
          <tbody>
            {qaList.slice(0, 4).map((item, index) => (
              <S.TableRow key={index}>
                <S.NumberCell>{index + 1} .</S.NumberCell>
                <S.TableCell>{item.question}</S.TableCell>
                <S.DateCell>{item.date}</S.DateCell>
                <S.ViewsCell>{item.views}회</S.ViewsCell>
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>
      </S.Column>

      {/* 오른쪽 컬럼 */}
      <S.Column>
        <S.Table>
          <tbody>
            {qaList.slice(4, 8).map((item, index) => (
              <S.TableRow key={index + 4}>
                <S.NumberCell>{index + 5} .</S.NumberCell>
                <S.TableCell>{item.question}</S.TableCell>
                <S.DateCell>{item.date}</S.DateCell>
                <S.ViewsCell>{item.views}회</S.ViewsCell>
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>
      </S.Column>
    </S.Container>
  </div>
  );
};

export default OftenQnA;