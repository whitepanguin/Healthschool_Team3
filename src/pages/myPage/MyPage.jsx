import React from 'react';
import { Outlet } from 'react-router-dom';

const MyPage = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default MyPage;