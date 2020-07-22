import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import WorksCard from '../TOP_LIST/WorksCard';
import fakeData from '../../../API/fakeApi';

import classes from './list.module.css';

const WorksList = () => {
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
            ? users.map((user, index) => <WorksCard user={user} index={index} />)
            : 'loading...'}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default WorksList;
