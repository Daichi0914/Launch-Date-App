import React, { useEffect } from 'react';
import Top from './TOP/Top';
import MyList from './MY_LIST/MyList';
import Settings from './SETTING/Settings';

import axios from 'axios'

const Contents = ({ menuClick }) => {
  useEffect(() => {
    axios.get('https://script.google.com/macros/s/AKfycbwU1lZsS9ckgtN85Hl9OC6Wt9DJEdhf498EEva4LA7c3GAUK7w9/exec',{
      params: {
        access_token: 'eOiJKV1QiyJjdHkiOiJKCJhbGciOiJSUzI1NV1QiLCJ0eXAiL'
      }
    })
    .then((res) => {console.log(res.data.comics)})
  }, [])

  if (menuClick === 'Top') {
    return <Top />
  }
  if (menuClick === 'MyList') {
    return <MyList />
  }
  if (menuClick === 'Settings') {
    return <Settings />
  }
};

export default Contents;