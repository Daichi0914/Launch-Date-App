import React from 'react';
import { Grid } from 'semantic-ui-react';
import TrendCard from '../TOP_LIST/TrendCard';

import classes from './list.module.css';

const TrendList = () => {
  return (
    <div className={classes.list}>
      <Grid columns={4}>
        {/* 以下mapを使う */}
        <Grid.Row>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default TrendList;