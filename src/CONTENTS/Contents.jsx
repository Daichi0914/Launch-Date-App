import React from 'react';
import Top from './TOP/Top';
import MyList from './MY_LIST/MyList';
import SettingsF from './SETTING/Settings';

const Contents = ({ menuClick }) => {
  if (menuClick === 'Top') {
    return <Top />;
  }
  if (menuClick === 'MyList') {
    return <MyList />;
  }
  if (menuClick === 'Settings') {
    return <SettingsF />;
  }
};

export default Contents;
