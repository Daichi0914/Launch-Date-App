import React from 'react'
import Account from "./ACCOUNT/Account";
import Notice from "./NOTICE/Notice";

const SettingContents = ({ activeItem, handleSaveClick }) => {
  if (activeItem === 'Account') {
    return <Account handleSaveClick={handleSaveClick} />
  }
  if (activeItem === 'Notice') {
    return <Notice />
  }
}

export default SettingContents;