import React from 'react';
import Button from './style';


// variant, shape, size, border, color, font,
const BasicButton = ({children, ...rest}) => {
  return (
    <Button {...rest}>{children}</Button>
  );
};

export default BasicButton;