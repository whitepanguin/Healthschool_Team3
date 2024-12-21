import React from 'react';
import { Outlet } from 'react-router-dom';
import { QuestionProvider } from './_components/PopularQuestion/QuestionContext';

const Help = () => {
  return (
    <div>
      <QuestionProvider> 
        <Outlet/>
      </QuestionProvider> 
    </div>
  );
};

export default Help;