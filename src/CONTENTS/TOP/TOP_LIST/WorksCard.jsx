import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

import faker from 'faker';
import 'semantic-ui-css/semantic.min.css';

const WorksList = () => (
  <Card>
    <Image src={faker.image.avatar()} wrapped ui={false} />
    <Card.Content>
      <Card.Header>作品名</Card.Header>
      <Card.Meta>全＊＊巻</Card.Meta>
      <Card.Meta>出版社</Card.Meta>
      <Card.Meta>連載中・完結済</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Button animated='fade' style={{margin: '0 auto', width: '100%'}}>
        <Button.Content visible>My List に追加</Button.Content>
        <Button.Content hidden>
          <Icon name='plus' />
        </Button.Content>
      </Button>
    </Card.Content>
  </Card>
)

export default WorksList;