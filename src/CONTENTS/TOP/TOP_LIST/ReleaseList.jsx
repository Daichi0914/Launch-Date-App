import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import ReleaseCard from '../TOP_CARD/ReleaseCard';
import fakeData from '../../../API/fakeApi';

import classes from './list.module.css';

const ReleaseList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const releaseApi = async () => {
      try {
        const users = await fakeData.users;
        setUsers(users.data);
      } catch (error) {
        console.log(error);
      }
    };
    releaseApi();
  }, [setUsers]);

  return (
    <div className={classes.list}>
      <Grid columns={4} style={{ width: '100%' }}>
        <Grid.Row>
          {users
            ? users.map((user, index) => <ReleaseCard user={user} index={index} />)
            : 'loading...'}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ReleaseList;
