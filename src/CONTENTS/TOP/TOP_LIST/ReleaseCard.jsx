import React, { useEffect, useState } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import fakeData from '../../../API/fakeApi';

import 'semantic-ui-css/semantic.min.css';

const ReleaseCard = ({ user, index }) => {
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
    <Grid.Column>
      <Card style={{ marginTop: '20px' }}>
        {photoUrl ? <Image src={photoUrl} wrapped ui={false} /> : 'loading...'}
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>{user.username}</Card.Meta>
          <Card.Meta>{user.phone}</Card.Meta>
          <Card.Meta>{user.website}</Card.Meta>
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
