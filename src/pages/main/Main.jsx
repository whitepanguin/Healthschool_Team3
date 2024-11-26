import React from 'react';
import { Link } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton';

const Main = () => {
  return (
    <div className='wrapper'>
      <Link to={'/components'}>
        <BasicButton size={'medium'} shape={'small'} variant={'primary'} color={'white'}>컴포넌트</BasicButton>
      </Link>
    </div>
  );
};

export default Main;