import { useRef } from "react";
import S from "./style";

const TagSettings = ({tags,setTags}) => {
  const inputRef = useRef(null)
  const handleTagButton= ()=>{
    const newTag = inputRef.current.value.trim();
    // 빈 값 혹은 이미 3개이면 추가 막기
    if (!newTag) return;
    if (tags.length >= 3) {
      alert("태그는 최대 3개까지 입력할 수 있습니다.");
      return;
    }
    setTags([...tags, newTag]);
    inputRef.current.value = "";
  } 
  const handleRemoveTag = (index) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };
  return (
    <S.TagWrapper>
      <div style={{display:'flex'}}>
        <S.TagInput ref={inputRef} placeholder="태그를 입력하고 엔터를 눌러주세요"/>
        <S.TagButton onClick={handleTagButton}>태그 입력</S.TagButton>
      </div>
      <div style={{ marginTop: "10px" }}>
        {tags.map((tag, index) => (
          <S.TagItem key={index}>
            {tag}
            {/* 만약 삭제 기능을 원한다면 */}
            <S.CancelButton onClick={() => handleRemoveTag(index)}>x</S.CancelButton>
          </S.TagItem>
        ))}
      </div>
    </S.TagWrapper>
  );
};

export default TagSettings