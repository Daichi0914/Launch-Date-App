import React from 'react';
import { Grid } from 'semantic-ui-react';
import WorksCard from '../TOP_LIST/WorksCard';

import classes from './list.module.css';

const WorksList = () => {
  return (
    <div className={classes.list}>
      <Grid columns={4}>
        {/* 以下mapを使う */}
        <Grid.Row>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default WorksList;