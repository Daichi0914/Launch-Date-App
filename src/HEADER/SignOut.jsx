import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import firebase from "../CONFIG/firebase";
import 'semantic-ui-css/semantic.min.css';


const SignOut = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const signOutButton = () => {
    firebase.auth().signOut().then(()=>{
      console.log("サインアウトしました");
      props.history.push('/SignIn');
    }).catch( (error)=>{
      console.log(`サインアウト時にエラーが発生しました (${error})`);
    });
  };

  return (
    <>
      <Button basic inverted color='red' onClick={() => {setIsOpen(true)}}>
        <Icon name='sign-out' />Sign Out
      </Button>

      <Modal size='mini' open={isOpen}>
        <Header
          icon='sign-out'
          content='Sign Out'
          style={{color: 'orange'}}
        />
        <Modal.Content>
          <p>Do you want to sign out?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='grey' onClick={() => {setIsOpen(false)}}>
            <Icon name='remove' /> No
          </Button>
          <Button color='red' onClick={() => {signOutButton()}}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default withRouter(SignOut);