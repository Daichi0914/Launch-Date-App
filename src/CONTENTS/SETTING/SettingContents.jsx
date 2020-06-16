import React from 'react'
import Account from "./ACCOUNT/Account";
import Notice from "./NOTICE/Notice";

const SettingContents = ({ activeItem }) => {
  console.log(activeItem)
  if (activeItem === 'Account') {
    return <Account />
  }
  if (activeItem === 'Notice') {
    return <Notice />
  }
}

export default SettingContents;