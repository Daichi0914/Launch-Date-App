import React, { useState, useContext } from 'react';
import { AuthContext } from "./AuthService";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import { Link, Redirect } from "react-router-dom";

import firebase from "../CONFIG/firebase";

import 'semantic-ui-css/semantic.min.css'
import classes from "./SignIn.module.css";


const SignIn = ({ history }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(() => {
        history.push('/Launch-Date-App')
      })
      .catch(() => {
        alert('メールアドレスかパスワードが間違っています。')
      });
  };

  const user = useContext(AuthContext)

  if (user) {
    return <Redirect to="/Launch-Date-App" />
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
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                  value={email}
                />
                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  label='Password'
                  type='password'
                  placeholder='Password'
                  onChange={e => {
                    setPass(e.target.value)
                  }}
                  value={pass}
                />
                <Button content='Sign In' primary />
              </Form>
            </div>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <div className={classes.buttonWrapper}>
              <Link to='/SignUp'>
                <Button content='Sign up' icon='signup' size='big' />
              </Link>
            </div>
          </Grid.Column>
        </Grid>
        <Divider vertical className={classes.solid}>Or</Divider>
      </Segment>
    </div>
  )
}

export default SignIn;