import React from 'react'
import TopMenu from './TopMenu';
import TopContents from './TopContents';

const Top = () => {
  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <TopMenu />
      <TopContents />
    </div>
  );
};

export default Top;