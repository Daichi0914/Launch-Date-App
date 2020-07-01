import React, { useEffect } from 'react';
import Top from './TOP/Top';
import MyList from './MY_LIST/MyList';
import SettingsF from './SETTING/Settings';

import axios from 'axios';
import dotenv from 'dotenv';


// require('dotenv').config();
// if (typeof process.env.COMICSAPI_ACCESS_TOKEN == 'undefined') {
//   console.error('Error: "COMICSAPI_ACCESS_TOKEN" is not set.');
//   console.error('Please consider adding a .env file with COMICSAPI_ACCESS_TOKEN.');
//   process.exit(1);
// }
// console.log(process.env.COMICSAPI_ACCESS_TOKEN)

// const fs = require('fs')

const ACCESS_TOKEN = dotenv.config(process.env.COMICSAPI_ACCESS_TOKEN);
console.log(ACCESS_TOKEN)

const Contents = ({ menuClick }) => {
  useEffect(() => {
    axios.get(`https://script.google.com/macros/s/AKfycbwU1lZsS9ckgtN85Hl9OC6Wt9DJEdhf498EEva4LA7c3GAUK7w9/exec?access_token=${ACCESS_TOKEN}`, {
      params: {
        access_token: ACCESS_TOKEN
      }
    })
    .then((res) => {console.log(res.data.comics)})
    .catch(function (error) {
      console.log(error)
    })
  }, [])

  if (menuClick === 'Top') {
    return <Top />
  }
  if (menuClick === 'MyList') {
    return <MyList />
  }
  if (menuClick === 'Settings') {
    return <SettingsF />
  }
};

export default Contents;