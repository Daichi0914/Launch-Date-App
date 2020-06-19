import React from 'react';
import { Grid } from 'semantic-ui-react';
import ReleaseCard from '../TOP_LIST/ReleaseCard';

import classes from './list.module.css';

const ReleaseList = () => {
  return (
    <div className={classes.list}>
      <Grid columns={4}>
        {/* 以下mapを使う */}
        <Grid.Row>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ReleaseList;