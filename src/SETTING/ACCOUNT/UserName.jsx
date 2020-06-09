import React from 'react'
import { Button } from 'semantic-ui-react'

const UserName = () => {
  return (
    <div style={{marginBottom: '20px'}}>
      <label>User Name</label><br />
      <input type='name' style={{marginBottom: '10px'}}></input><br />
      <Button positive>Save</Button>
    </div>
  );
};

export default UserName;