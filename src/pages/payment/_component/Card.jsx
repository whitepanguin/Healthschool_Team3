import React, { useEffect, useState } from "react";
import S from "./style";
import MediaCard from "../../../components/mediaCard/MediaCard";
import BasicCheckBox from "../../../components/checkbox/BasicCheckBox";
import { Link } from "react-router-dom";
import BasicButton from "../../../components/button/BasicButton";

const Card = ({
  title,
  subtitle,
  detail,
  productName,
  email,
  description,
  additionTitle,
  productPrice,
  additionPrice,
  uploadDate,
  PayDate, 
  tags, 
  imageUrl,
  uuid,
  checked,
  onCheckboxChange
}) => {
  // State to manage checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCheckboxChange()
    checked();
  };


  // Calculate the total price based on checkbox state
  const totalPrice = isChecked ? additionPrice + productPrice : productPrice;

  return (
    <div>
      <S.Container>
        <S.Button>
          <S.Card>
            <MediaCard
              title={title}
              date={uploadDate}
              description={description}
              imageUrl={imageUrl}
              instructor={subtitle}
              tags={tags}
            />
            <S.ContentSection>
              <h3>
              {title}
              </h3>
              <p>
                {detail}
              </p>
            </S.ContentSection>
            <S.PriceSection>
              <S.Addit>
                <p className={isChecked ? "active" : ""}>추가 선택상품 금액</p>
                <p className={isChecked ? "active" : ""}>+{additionTitle}</p>
                <p className={isChecked ? "active" : ""}>+{additionPrice.toLocaleString('ko-KR')}원</p>
                <BasicCheckBox 
                  label="추가 상품 선택" 
                  checked={isChecked} 
                  onChange={handleCheckboxChange} 
                />
              </S.Addit>
              <div>
                <p>상품금액</p>
                <p>{productPrice.toLocaleString('ko-KR')}원</p>
              </div>
            </S.PriceSection>
            <S.PriceTotal>
              <S.Addit>
                <p className={isChecked ? "active" : ""}>Total Price</p>
                <p className={isChecked ? "active" : ""}>{totalPrice.toLocaleString('ko-KR')}원</p>
              </S.Addit>
            </S.PriceTotal>
          </S.Card>
        </S.Button>
      </S.Container>
    </div>
  );
};

export default Card;
