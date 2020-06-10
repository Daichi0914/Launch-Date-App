import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

import firebase from "../../CONFIG/firebase";

const UserName = () => {
  const [nowName, setNowName] = useState('')
  const [userName, setUserName] = useState('')

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setNowName(user.displayName)
    } else {
      console.log('error')
    }
  });

  const handleSubmit = () => {
    firebase.auth().currentUser.updateProfile({displayName: userName})
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <div style={{marginBottom: '20px'}}>
      <p style={{marginBottom: '10px'}}>User Name</p>
      <input
        type='text'
        style={{marginBottom: '10px'}}
        placeholder={nowName}
        onChange={e => {
          setUserName(e.target.value)
        }}
        value={userName}
      /><br />
      <Button positive onClick={() => {
        if (userName !== '') {
          handleSubmit()
        } else {
          alert('文字を入力してください')
        }
      }}>Save</Button>
    </div>
  );
};

export default UserName;