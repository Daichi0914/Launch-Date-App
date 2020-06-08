import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import firebase from "../CONFIG/firebase";

import 'semantic-ui-css/semantic.min.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
  e.preventDefault()
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .catch(error => {
      console.log(error)
    });
};

  return (
    <Segment placeholder style={
      {
        width: '300px',
        height: '400px',
        margin: '0 auto',
      }
    }>
      <h2 style={{textAlign: 'center'}}>Sign Up</h2>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              icon='user'
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
              type='password'
              onChange={e => {
                setPass(e.target.value)
              }}
              value={pass}
            />
            {/* <Form.Input
              icon='lock'
              iconPosition='left'
              label='Password Confirmation'
              type='password'
              placeholder='Password'
              type='password'
              onChange={e => {
                setPass(e.target.value)
              }}
              value={pass}
            /> */}

            <Button content='Sign Up' primary />
          </Form>
        </Grid.Column>

        <Grid.Column verticalAlign='middle'>
          <Link to='/SignIn'>
            <Button content='Sign In' icon='signup' size='big' />
          </Link>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default SignUp;