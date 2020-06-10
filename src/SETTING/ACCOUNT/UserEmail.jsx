import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

import firebase from "../../CONFIG/firebase";

const UserEmail = () => {
  const [nowEmail, setNowEmail] = useState('')
  const [email, setEmail] = useState('')

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setNowEmail(user.email)
    } else {
      console.log('error')
    }
  });

  const handleSubmit = () => {
    firebase.auth().currentUser.updateEmail(`${email}`)
      .catch(error => {
        console.log(error)
    })
  };

  return (
    <div style={{marginBottom: '20px'}}>
      <p style={{marginBottom: '10px'}}>User Email</p>
      <input
        type='Email'
        style={{marginBottom: '10px'}}
        placeholder={nowEmail}
        onChange={e => {
          setEmail(e.target.value)
        }}
        value={email}
      /><br />
      <Button positive onClick={() => {handleSubmit()}}>Save</Button>
    </div>
  );
};

export default UserEmail;