import React from "react";
import UserName from "./UserName";
import UserEmail from "./UserEmail";
import UserPass from "./UserPass";

import classes from "./UserInfo.module.css";


const UserInfo = () => {
  return (
    <div className={classes.info}>
      <UserName />
      <UserEmail />
      <UserPass />
    </div>
  );
};

export default UserInfo;
