import React from 'react';
import BasicButton from '../../components/button/BasicButton';
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <div>
      {/* 자주 듣는 질문 페이지로 이동 */}
      <Link to={"spopularquestion"}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>자주는 듣는 질문페이지</BasicButton>
      </Link>
      
      {/* 공지사항 페이지로 이동 */}
      <Link to={"notice"}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>공지사항</BasicButton>
      </Link>
      
      {/* 서비스 소개 페이지로 이동 */}
      <Link to={"individualquestion"}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>서비스소개</BasicButton>
      </Link>
    </div>
  );
};

export default Help;