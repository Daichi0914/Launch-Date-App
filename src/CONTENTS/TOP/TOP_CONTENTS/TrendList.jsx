import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import TrendCard from '../TOP_LIST/TrendCard';
import fakeData from '../../../API/fakeApi';

import classes from './list.module.css';

const TrendList = () => {
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
            ? users.map((user, index) => <TrendCard user={user} index={index} />)
            : 'loading...'}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default TrendList;
