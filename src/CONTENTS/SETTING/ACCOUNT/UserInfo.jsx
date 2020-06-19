import React from "react";
import UserName from "./UserName";
import UserEmail from "./UserEmail";
import UserPass from "./UserPass";

import classes from "./UserInfo.module.css";


const UserInfo = ({ handleSaveClick }) => {
  return (
    <div className={classes.info}>
      <UserName handleSaveClick={handleSaveClick} />
      <UserEmail />
      <UserPass />
    </div>
  );
};

export default UserInfo;