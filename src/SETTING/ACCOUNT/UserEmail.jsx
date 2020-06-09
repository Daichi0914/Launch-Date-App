import React from 'react'
import { Button } from 'semantic-ui-react'

const UserEmail = () => {
  return (
    <div style={{marginBottom: '20px'}}>
      <label>User Email</label><br />
      <input type='Email' style={{marginBottom: '10px'}}></input><br />
      <Button positive>Save</Button>
    </div>
  );
};

export default UserEmail;