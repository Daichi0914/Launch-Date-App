import React, { useEffect, useState } from 'react';
import { Grid, Dimmer, Loader, Segment } from 'semantic-ui-react';
import WorksCard from '../TOP_CARD/WorksCard';
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
          {users ? (
            users.map((user, index) => <WorksCard user={user} index={index} />)
          ) : (
            <Segment className={classes.loading}>
              <Dimmer active inverted>
                <Loader inverted content='Loading' />
              </Dimmer>
            </Segment>
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default WorksList;
