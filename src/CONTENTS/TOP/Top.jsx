import React, { useState } from 'react';
import TopMenu from './TopMenu';
import TopContents from './TopContents';

const Top = () => {
  const [contents, setContents] = useState('trend');

  return (
    <div style={{ display: 'flex', paddingTop: 91.97 }}>
      <div style={{ width: '25%', minWidth: 150 }}>
        <div style={{ width: '20%', minWidth: 150, position: 'fixed' }}>
          <TopMenu setContents={setContents} />
        </div>
      </div>
      <TopContents contents={contents} />
    </div>
  );
};

export default Top;
