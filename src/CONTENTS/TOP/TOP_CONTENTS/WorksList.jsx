import React from 'react';
import { Grid } from 'semantic-ui-react';
import WorksCard from '../TOP_LIST/WorksCard';

const WorksList = () => {
  return (
    <div style={{
      height: '100%',
      padding: '25px 25px 0 280px',
    }}>
      <Grid columns={5} divided>
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
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <WorksCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default WorksList;