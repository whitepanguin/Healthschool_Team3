import React, { useState } from 'react';
import TossPayment from '../TossPayment';


const PaymentButton = ({...rest}) => {
  const [isTossPayment, setIsTossPayment] = useState(false);
  const toggleTossPayment = () => {
    setIsTossPayment(!isTossPayment)
  }

  return (
    <div>
      { isTossPayment && <TossPayment {...rest} /> }
      <button onClick={toggleTossPayment}>결제하기</button>
    </div>
  );
};

export default PaymentButton;