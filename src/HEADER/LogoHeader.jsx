import React from 'react';
import SignOut from '../HEADER/SignOut';

import classes from './LogoHeader.module.css';
// import { Link } from 'react-router-dom';

const LogoHeader = () => {
  return (
    <>
      <div className={classes.titleDiv}>
        {/* <Link to='/Launch-Date-App'> */}
          <h2 className={classes.title}>Launch Date App</h2>
        {/* </Link> */}
        <div className={classes.signOut}>
          <SignOut />
        </div>
      </div>
    </>
  );
};

export default LogoHeader;
