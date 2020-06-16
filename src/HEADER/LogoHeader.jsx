import React from 'react';

import classes from './LogoHeader.module.css';

const LogoHeader = () => {
  return (
    <>
      <div className={classes.titleDiv}>
        <h2 className={classes.title}>Launch Date App</h2>
      </div>
    </>
  );
};

export default LogoHeader;