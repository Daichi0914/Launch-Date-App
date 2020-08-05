import React, { useEffect, useState } from 'react';
import { Card, Icon, Image, Button, Dimmer, Loader, Segment } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import fakeData from '../../../API/fakeApi';

import 'semantic-ui-css/semantic.min.css';

const ReleaseCard = ({ item, index }) => {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    const photosApi = async () => {
      try {
        const photo = await fakeData.getPhotoById(index + 1); // idは1から
        setPhotoUrl(photo.data.url);
      } catch (error) {
        console.log(error);
      }
    };
    photosApi();
  }, [setPhotoUrl, index]);

  return (
    <Grid.Column style={{ minWidth: 190 }}>
      <Card style={{ marginTop: '20px' }}>
        <div style={{ width: '100%', minWidth: 140, height: 'auto' }}>
          {photoUrl ? (
            <Image src={photoUrl} wrapped ui={true} />
          ) : (
            <Segment style={{ width: '100%', height: 200, padding: 0, marginBottom: 0 }}>
              <Dimmer active>
                <Loader size='medium'>Loading</Loader>
              </Dimmer>
            </Segment>
          )}
        </div>
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>{item.username}</Card.Meta>
          <Card.Meta>{item.phone}</Card.Meta>
          <Card.Meta>{item.website}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button animated='fade' style={{ margin: '0 auto', width: '100%' }}>
            <Button.Content visible>My List に追加</Button.Content>
            <Button.Content hidden>
              <Icon name='plus' />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default ReleaseCard;
