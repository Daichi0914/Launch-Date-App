import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

import firebase from "../../CONFIG/firebase";
import 'semantic-ui-css/semantic.min.css';

const UserEmail = () => {
  const [currentEmail, setCurrentEmail] = useState('')
  const [email, setEmail] = useState('')

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setCurrentEmail(user.email)
    } else {
      console.log('error')
    }
  });

  const handleSubmit = () => {
    firebase.auth().currentUser.updateEmail(`${email}`)
      .then(() => {
        window.alert('メールアドレスを保存しました。')
      })
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <div style={{marginBottom: '20px'}}>
      <p style={{marginBottom: '10px'}}>User Email</p>
      <Form.Input
        id='emailForm'
        icon='envelope'
        iconPosition='left'
        type='email'
        placeholder={currentEmail}
        onChange={e => {
          setEmail(e.target.value)
        }}
        value={email}
      /><br />
      <Button positive onClick={() => {
        if (email !== '') {
          handleSubmit()
        } else {
          alert('メールアドレスを入力してください')
        }
      }}>Save</Button>
    </div>
  );
};

export default UserEmail;