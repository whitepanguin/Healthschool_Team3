import React from "react";
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
  uuid
}) => {
  return (
    <div>
      <S.Container>
        <S.Button>
          <BasicCheckBox />
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
              <div>
                <p>추가 선택상품 금액</p>
                <p>+{additionTitle}</p>
                <p>+{additionPrice}원</p>
              </div>
              <div>
                <p>상품금액</p>
                <p>{productPrice}원</p>
              </div>
              <Link to={"/payment/address"}>
                <BasicButton
                  size={"medium"}
                  shape={"small"}
                  variant={"primary"}
                  color={"white"}
                >
                  주문 수정
                </BasicButton>
              </Link>
            </S.PriceSection>
            <S.PriceTotal>
              <div>
                <p>Total Price</p>
                <p>{additionPrice+productPrice}원</p>
              </div>
            </S.PriceTotal>
          </S.Card>
        </S.Button>
      </S.Container>
    </div>
  );
};

export default Card;
