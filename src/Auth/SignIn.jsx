import React, { useState, useContext } from 'react';
import { AuthContext } from "./AuthService";
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { Link, Redirect } from "react-router-dom";

import firebase from "../CONFIG/firebase";

import 'semantic-ui-css/semantic.min.css'


const SignIn = ({ history }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(() => {
        history.push('/')
      })
      .catch(() => {
        alert('メールアドレスかパスワードが間違っています。')
      });
  };

  const user = useContext(AuthContext)

  if (user) {
    return <Redirect to="/" />
  }

  return (
    <Segment placeholder style={
      {
        width: '300px',
        height: '400px',
        margin: '0 auto',
      }
    }>
      <h2 style={{textAlign: 'center'}}>Sign In</h2>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
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
        </Grid.Column>

        <Grid.Column verticalAlign='middle'>
          <Link to='/SignUp'>
            <Button content='Sign up' icon='signup' size='big' />
          </Link>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default SignIn;