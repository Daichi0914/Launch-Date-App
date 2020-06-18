import React from 'react';
import { Grid } from 'semantic-ui-react';
import ReleaseCard from '../TOP_LIST/ReleaseCard';

const ReleaseList = () => {
  return (
    <div style={{
      height: '100%',
      padding: '25px 25px 0 280px',
    }}>
      <Grid columns={5} divided>
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
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <ReleaseCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ReleaseList;