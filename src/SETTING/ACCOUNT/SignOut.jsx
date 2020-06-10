import React, { useContext } from 'react'
import { AuthContext } from "../../AUTH/AuthService";
import { Button } from 'semantic-ui-react'

import firebase from "../../CONFIG/firebase";
import { Redirect } from 'react-router';


const SignOut = () => {
  const signOutSwitch = () => {
    firebase.auth().signOut().then(()=>{
      console.log("サインアウトしました");
    }).catch( (error)=>{
      console.log(`サインアウト時にエラーが発生しました (${error})`);
    });
  };

  const user = useContext(AuthContext)

  if (!user) {
    return <Redirect to='/SignIn' />
  }

  return (
    <div>
      <Button negative onClick={() => {signOutSwitch()}}>Sign Out</Button>
    </div>
  );
};

export default SignOut;