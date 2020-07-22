import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthService';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import firebase from '../CONFIG/firebase';

import 'semantic-ui-css/semantic.min.css';
import classes from './SignUp.module.css';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userName, setUserName] = useState('');

  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        firebase.auth().currentUser.updateProfile({ displayName: userName });
      })
      .then(() => {
        window.alert('登録が完了しました。');
        props.history.push('/SignIn');
      })
      .catch((error) => {
        console.log(error);
        if (user.email === email) {
          window.alert('このメールアドレスは既に登録されています。');
        } else {
          window.alert('必要な情報を入力して下さい。');
        }
      });
  };

  return (
    <div className={classes.allWrap}>
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form onSubmit={handleSubmit} className={classes.Form}>
              <h2 className={classes.logo}>Sign Up</h2>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='User Name'
                type='name'
                placeholder='User Name'
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={userName}
              />
              <Form.Input
                icon='envelope'
                iconPosition='left'
                label='E-mail'
                type='email'
                placeholder='E-mail'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
                placeholder='Password'
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                value={pass}
              />
              <Button content='Sign Up' primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <div className={classes.buttonWrapper}>
              <Link to='/SignIn'>
                <Button content='Sign In' icon='signup' size='big' />
              </Link>
            </div>
          </Grid.Column>
        </Grid>
        <Divider vertical className={classes.solid}>
          Or
        </Divider>
      </Segment>
    </div>
  );
};

export default withRouter(SignUp);
