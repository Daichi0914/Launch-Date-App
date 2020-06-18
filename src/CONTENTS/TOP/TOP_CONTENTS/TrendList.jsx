import React from 'react';
import { Grid } from 'semantic-ui-react';
import TrendCard from '../TOP_LIST/TrendCard';

const TrendList = () => {
  return (
    <div style={{
      height: '100%',
      padding: '25px 25px 0 280px',
    }}>
      <Grid columns={5} divided>
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
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <TrendCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default TrendList;