import React, { useState } from 'react';
import S from "./style"
import SortComponent from './SortComponent';
const CompletSortComponent = ({style}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 표시 여부
    const [sortType, setSortType] = useState("좋아요순"); // 선택된 스트림 유형
    const selectSortType = (type) => {
        setSortType(type); // 선택된 유형 저장
        setIsDropdownOpen(false); // 드롭다운 닫기
      };
      const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev); // 드롭다운 열기/닫기
      };
    return (
        <S.SortWrapper>
          <input
            readOnly
            value={sortType}
            onClick={toggleDropdown}
          />    
          <img src={process.env.PUBLIC_URL + "/images/live/toggle.png"} alt="toggle" style={{position:'absolute', top:'13px', right:'10px', cursor:"pointer"}} onClick={toggleDropdown}  />
          {isDropdownOpen && (
        <div >
          <SortComponent
            type="좋아요순"
            onClick={() => selectSortType("좋아요순")}
          />
          <SortComponent
            type="최근순"
            onClick={() => selectSortType("최근순")}
          />
        </div>
      )} 
    </S.SortWrapper>
    );
};

export default CompletSortComponent;