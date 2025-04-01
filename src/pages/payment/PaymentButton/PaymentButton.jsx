import React, { useState } from 'react';
import TossPayment from '../TossPayment';
import Button from './style';



const PaymentButton = ({...rest}) => {
  const [isTossPayment, setIsTossPayment] = useState(false);
  const toggleTossPayment = () => {
    setIsTossPayment(!isTossPayment)
  }

  return (
    <div>
      { isTossPayment && <TossPayment {...rest} /> }
      <Button 
      variant={"primary"} 
      shape={"big"}
      size={"medium"}
      border={"primary"}
      onClick={toggleTossPayment}>결 제</Button>
    </div>
  );
};

export default PaymentButton;