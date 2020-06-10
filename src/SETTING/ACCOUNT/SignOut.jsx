import React from 'react'
import { Button } from 'semantic-ui-react'

import firebase from "../../CONFIG/firebase";

const SignOut = () => {
  const signOutSwitch = () => {
    firebase.auth().signOut().then(()=>{
      console.log("ログアウトしました");
    })
    .catch( (error)=>{
      console.log(`ログアウト時にエラーが発生しました (${error})`);
    });
  };

  return (
    <div>
      <Button negative onClick={() => {signOutSwitch()}}>Sign Out</Button>
    </div>
  );
};

export default SignOut;