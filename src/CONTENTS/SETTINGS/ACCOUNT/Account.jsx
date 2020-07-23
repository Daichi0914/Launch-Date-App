import React from 'react';
import UserImg from "./UserImg";
import UserInfo from "./UserInfo";


const Account = ({ handleSaveClick }) => {
  return (
    <div style={{display: 'flex'}}>
      <UserInfo handleSaveClick={handleSaveClick} />
      <UserImg />
    </div>
  );
};

export default Account;