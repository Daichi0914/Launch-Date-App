import React, { useState, useContext } from 'react'
import { AuthContext } from "../../../AUTH/AuthService";
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';

import firebase from "../../../CONFIG/firebase";
import classes from './UserPass.module.css';
import 'semantic-ui-css/semantic.min.css';


const UserPass = () => {
  const [currentPass, setCurrentPass] = useState('')
  const [firstPass, setFirstPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [isOpen, setIsOpen] = useState(false)


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('good')
    } else {
      console.log('error')
    }
  });

  const user = useContext(AuthContext)

  const handleSignIn = () => {
    // e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(user.email, currentPass)
      .then(() => {
        if (firstPass === newPass && newPass !== '') {
          handleSubmit()
        } else if (firstPass !== newPass) {
          alert('パスワードが一致しません。もう一度入力してください。')
        } else {
          window.alert('パスワードを入力してください。')
        }
      })
      .catch(() => {
        alert('現在のパスワードが間違っています。')
      });
  };

  const signOutSwitch = () => {
    firebase.auth().signOut().then(()=>{
      console.log("サインアウトしました");
    }).catch( (error)=>{
      console.log(`サインアウト時にエラーが発生しました (${error})`);
    });
  };

  const handleSubmit = () => {
    firebase.auth().currentUser.updatePassword(newPass)
      .then(() => {
        window.alert('パスワードを保存しました。再度ログインして下さい。')
        signOutSwitch()
      })
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <div style={{width: '170px', margin: '0 auto'}}>
      <p className={classes.underline} onClick={() => {setIsOpen(true)}}>
        <Icon name='hand point right outline' />User Password
      </p>
      <Modal size='tiny' open={isOpen}>
        <Header
          content='User Password'
          className={classes.modalTitle}
        />
        <Modal.Content>
          <div className={classes.modalBody}>
            <label>Current Password</label><br/>
            <Form.Input
              type='password'
              icon='lock'
              iconPosition='left'
              onChange={e => {
                setCurrentPass(e.target.value)
              }}
              value={currentPass}
            /><br/>
            <label>New Password</label><br/>
            <Form.Input
              type='password'
              icon='lock'
              iconPosition='left'
              onChange={e => {
                setFirstPass(e.target.value)
              }}
              value={firstPass}
            /><br/>
            <label>New Password Again</label><br/>
            <Form.Input
              type='password'
              icon='lock'
              iconPosition='left'
              onChange={e => {
                setNewPass(e.target.value)
              }}
              value={newPass}
            /><br/>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => {setIsOpen(false)}}>
            <Icon name='remove' /> Cancel
          </Button>
          <Button color='green' onClick={() => {handleSignIn()}}>
            <Icon name='checkmark' /> Save
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default UserPass;