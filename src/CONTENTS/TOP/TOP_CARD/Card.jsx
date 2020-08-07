import React, { useContext } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { AuthContext } from '../../../AUTH/AuthService';
import firebase from '../../../CONFIG/firebase';

import 'semantic-ui-css/semantic.min.css';

const TrendCard = ({ img, title, author, publisherName, salesDate, isbn }) => {
  const user = useContext(AuthContext);

  const handleAddList = () => {
    console.log(user.uid);
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('comics')
      .add({
        isbn: isbn,
      })
      .catch(err => console.log(err));
  };

  return (
    <Grid.Column style={{ minWidth: 190 }}>
      <Card style={{ marginTop: '20px' }}>
        <div style={{ width: '100%', minWidth: 140, height: 'auto', backgroundColor: '#1f1f1f', justifyContent: 'center', display: 'flex' }}>
          <Image src={img} wrapped ui={true} />
        </div>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{author}</Card.Meta>
          <Card.Meta>{publisherName}</Card.Meta>
          <Card.Meta>{salesDate}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button
            animated='fade'
            style={{ margin: '0 auto', width: '100%' }}
            onClick={handleAddList}
          >
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

export default TrendCard;
