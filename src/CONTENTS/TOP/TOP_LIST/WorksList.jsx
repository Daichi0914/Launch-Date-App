import React, { useEffect, useState } from 'react';
import { Grid, Dimmer, Loader, Segment } from 'semantic-ui-react';
import WorksCard from '../TOP_CARD/WorksCard';
import fakeData from '../../../API/fakeApi';

import classes from './list.module.css';

const WorksList = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const worksApi = async () => {
      try {
        const items = await fakeData.items;
        setItems(items.data);
      } catch (error) {
        console.log(error);
      }
    };
    worksApi();
  }, [setItems]);

  return (
    <div className={classes.list}>
      <Grid columns={4} style={{ width: '100%' }}>
        <Grid.Row>
          {items ? (
            items.map((user, index) => (
              <WorksCard user={user} index={index} key={index} />
            ))
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
