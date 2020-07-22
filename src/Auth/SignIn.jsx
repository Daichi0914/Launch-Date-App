import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthService';
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react';
import { Link, Redirect, withRouter } from 'react-router-dom';

import firebase from '../CONFIG/firebase';

import 'semantic-ui-css/semantic.min.css';
import classes from './SignIn.module.css';

const SignIn = ({ history }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        history.push('/Launch-Date-App');
        console.log('サインイン完了');
      })
      .catch(() => {
        alert('メールアドレスかパスワードが間違っています。');
      });
  };

  const user = useContext(AuthContext);

  const handleReset = () => {
    if (currentEmail === user.email) {
      firebase
        .auth()
        .sendPasswordResetEmail(user.email)
        .then(function () {
          window.alert('パスワードリセット用メールを送信しました。');
          history.push('/SignIn');
        })
        .catch(function (error) {
          window.alert(error);
        });
    } else {
      window.alert('このメールアドレスは登録されておりません。');
    }
  };

  if (user) {
    return <Redirect to='/Launch-Date-App' />;
  }

  return (
    <div className={classes.allWrap}>
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <div className={classes.signInForm}>
              <h2 className={classes.logo}>Sign In</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Input
                  icon='envelope'
                  iconPosition='left'
                  label='E-mail'
                  placeholder='E-mail'
                  type='email'
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
                <Button content='Sign In' primary />
              </Form>
            </div>

            <div className={classes.ForgetDiv}>
              <p
                className={classes.Forget}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <Icon name='hand point right outline' />
                Forget Password?
              </p>
            </div>
            <Modal size='small' open={isOpen}>
              <Header
                content='Registered E-mail'
                className={classes.modalTitle}
              />
              <Modal.Content>
                <div className={classes.modalBody}>
                  <Form.Input
                    type='email'
                    icon='envelope'
                    iconPosition='left'
                    onChange={(e) => {
                      setCurrentEmail(e.target.value);
                    }}
                    value={currentEmail}
                  />
                  <br />
                </div>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  color='red'
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Icon name='remove' /> Cancel
                </Button>
                <Button
                  color='green'
                  onClick={() => {
                    handleReset();
                  }}
                >
                  <Icon name='telegram plane' /> Send an E-Mail
                </Button>
              </Modal.Actions>
            </Modal>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <div className={classes.buttonWrapper}>
              <Link to='/SignUp'>
                <Button content='Sign up' icon='signup' size='big' />
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

export default withRouter(SignIn);
