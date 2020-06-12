import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import firebase from "../../CONFIG/firebase";
import 'semantic-ui-css/semantic.min.css'

const UserName = (props) => {
  const [currentName, setCurrentName] = useState('')
  const [userName, setUserName] = useState('')

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setCurrentName(user.displayName)
    } else {
      console.log('error')
    }
  });

  const handleSubmit = () => {
    firebase.auth().currentUser.updateProfile({displayName: userName})
      .then(() => {
        window.alert('ユーザーネームを保存しました。')
        props.history.push('/Settings')
      })
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <div style={{marginBottom: '20px'}}>
      <p style={{marginBottom: '10px'}}>User Name</p>
      <Form.Input
        icon='user'
        iconPosition='left'
        type='text'
        placeholder={currentName}
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

export default withRouter(UserName);