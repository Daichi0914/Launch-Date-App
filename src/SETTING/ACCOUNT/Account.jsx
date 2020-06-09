import React from 'react';
import UserImg from "./UserImg";
import UserInfo from "./UserInfo";

const Account = () => {
  return (
    <div style={{display: 'flex'}}>
      <UserImg />
      <UserInfo />
    </div>
  );
};

export default Account;