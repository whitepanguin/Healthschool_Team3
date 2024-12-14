import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton';
import MediaCard from '../../components/mediaCard/MediaCard';
import BasicTag from '../../components/tag/BasicTag';

const Payment = () => {
  return (  
    <div>
      <Link to={'/'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>메인</BasicButton>
      </Link>
      <S.Container>
      <S.Card>
      <MediaCard
          title="[근력운동] 간단하고 효과적인 근력운동으로 원하는 몸을 만들어봐요!"
          date="2024.12.17"
          description="과학적 접근과 간단한 근력운동으로 누구나 원하는 몸을 만들어 보세요."
          imageUrl="https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782722_1280.jpg"
          instructor="슬기로운 운동생활"
        /> 
        <S.ContentSection>
          <h3>[근력운동] 간단하고 효과적인 근력운동으로 원하는 몸을 만들어봐요!</h3>
          <p>
          근력운동은 근육을 강화하고 신체의 전반적인 건강을 증진시키는 운동 방식입니다. 이는 주로 웨이트 트레이닝, 저항 밴드 사용, 또는 자신의 체중을 활용한 운동으로 이루어집니다. 대표적인 근력운동에는 스쿼트, 푸쉬업, 데드리프트, 벤치프레스 등이 있습니다.
근력운동의 주요 목표는 근육량 증가, 근력 향상, 그리고 신진대사 활성화입니다. 꾸준한 근력운동은 체지방 감소와 함께 근육을 강화해 체형을 개선할 수 있습니다. 또한 관절과 뼈를 튼튼하게 만들어 부상 예방에도 큰 도움이 됩니다. 나아가 기초 대사량을 높여 체중 관리에도 유리한 효과를 제공합니다.
근력운동은 초보자부터 숙련자까지 모두 실천할 수 있는 운동입니다. 처음 시작할 때는 자신의 체력과 운동 경험에 맞는 적절한 무게와 강도를 선택하는 것이 중요합니다. 점진적으로 무게를 늘리거나 반복 횟수를 증가시켜야 근육이 지속적으로 성장할 수 있습니다. 운동 전후 스트레칭을 통해 부상을 예방하고 운동 효과를 극대화할 수 있습니다.
          </p>
          <div style={{ display: 'flex', gap: 2}}>
          <BasicTag tag={"600"}>#근력운동</BasicTag>
          <BasicTag tag={"600"}>#몸만들기</BasicTag>
          </div>
        </S.ContentSection>
        <S.PriceSection>
          <div>
            <p>추가 선택상품 금액</p>
            <p>+덤벨, 운동 매트</p>
            <p>+10,000원</p>
          </div>
          <div>
            <p>상품금액</p>
            <p>25,000원</p>
          </div>
          <S.Button>주문 수정</S.Button>
        </S.PriceSection>
      </S.Card>
    </S.Container>
    </div>
  );
};

export default Payment;