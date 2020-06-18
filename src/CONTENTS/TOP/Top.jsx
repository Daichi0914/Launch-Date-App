import React, { useState } from 'react'
import TopMenu from './TopMenu';
import TopContents from './TopContents';

const Top = () => {
  const [contents, setContents] = useState('trend')

  return (
    <div style={{display: 'flex', height: '100vh', paddingTop: '91.97px'}}>
      <div style={{position: 'fixed'}}>
        <TopMenu setContents={setContents} />
      </div>
      <TopContents contents={contents} />
    </div>
  );
};

export default Top;