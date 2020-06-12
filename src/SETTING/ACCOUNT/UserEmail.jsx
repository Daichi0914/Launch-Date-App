import React, { useState, useContext } from 'react';
import { AuthContext } from "../../AUTH/AuthService";
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';

import firebase from "../../CONFIG/firebase";
import classes from './UserPass.module.css';
import 'semantic-ui-css/semantic.min.css';

const UserEmail = () => {
  const [currentEmail, setCurrentEmail] = useState('')
  const [email, setEmail] = useState('')
  const [currentPass, setCurrentPass] = useState('')
  const [isOpen, setIsOpen] = useState(false)


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setCurrentEmail(user.email)
    } else {
      console.log('error')
    }
  });

  const user = useContext(AuthContext)

  const handleSignIn = () => {
    // e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(user.email, currentPass)
      .then(() => {
        handleSubmit()
      })
      .catch(() => {
        alert('パスワードが間違っています。')
      });
  };

  const handleSubmit = () => {
    firebase.auth().currentUser.updateEmail(`${email}`)
      .then(() => {
        window.alert('メールアドレスを保存しました。')
      }).then(() => {setIsOpen(false)})
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <>
      <div style={{marginBottom: '20px'}}>
        <p style={{marginBottom: '10px'}}>User Email</p>
        <Form.Input
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
            setIsOpen(true)
          } else {
            window.alert('メールアドレスを入れて下さい。')
          }
        }}>OK</Button>
      </div>
      <Modal size='mini' open={isOpen}>
        <Header
          content='User Password'
          className={classes.modalTitle}
        />
        <Modal.Content>
          <div className={classes.modalBody}>
            <Form.Input
              type='password'
              icon='lock'
              iconPosition='left'
              onChange={e => {
                setCurrentPass(e.target.value)
              }}
              value={currentPass}
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
    </>
  );
};

export default UserEmail;