import React, { useState, useEffect } from 'react';
import { Grid, Dimmer, Loader, Segment } from 'semantic-ui-react';
import ReleaseCard from '../TOP_CARD/ReleaseCard';
import fakeData from '../../../API/fakeApi';

import classes from './list.module.css';

const ReleaseList = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const releaseApi = async () => {
      try {
        const items = await fakeData.users;
        setItems(items.data);
      } catch (error) {
        console.log(error);
      }
    };
    releaseApi();
  }, [setItems]);

  return (
    <div className={classes.list}>
      <Grid columns={4} style={{ width: '100%' }}>
        <Grid.Row>
          {items ? (
            items.map((item, index) => (
              <ReleaseCard item={item} index={index} key={index} />
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

export default ReleaseList;
