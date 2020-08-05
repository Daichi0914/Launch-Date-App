import React, { useEffect, useState } from 'react';
import { Grid, Dimmer, Loader, Segment } from 'semantic-ui-react';
import Card from '../TOP_CARD/Card';
import rakutenApi from '../../../API/rakutenApi';
import InfiniteScroll from 'react-infinite-scroller';

import classes from './list.module.css';

const ReleaseList = () => {
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const worksApi = async () => {
      try {
        const items = await rakutenApi.comics;
        setItems(items.data.Items);
        setIsFetched(true);
      } catch (error) {
        console.log(error);
      }
    };
    worksApi();
    return () => {
      setItems([]);
      setCurrentItems([]);
      setHasMoreItems(true);
      setIsFetched(false);
    };
  }, []);

  const current_item_count = currentItems.length;
  const max_items = 10;
  const page_item_size = 4;

  const loadItems = () => {
    if (current_item_count < max_items) {
      let deleteArr = items.splice(0, page_item_size); // deleteArrにはデリートした方の配列が入る

      setTimeout(() => {
        setCurrentItems(currentItems.concat(deleteArr));
      }, 500);
    } else {
      setHasMoreItems(false);
    }
  };

  const worksItems = items ? (
    currentItems.map((item, index) => (
      <Card
        img={item.Item.largeImageUrl}
        title={item.Item.title}
        author={item.Item.author}
        publisherName={item.Item.publisherName}
        isbn={item.Item.isbn}
        index={index}
        key={index}
      />
    ))
  ) : (
    <Segment className={classes.loading}>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>
    </Segment>
  );

  const pageLoader = () => (
    <Loader active inline='centered' style={{ height: 80, marginTop: 50 }} />
  );

  if (!isFetched) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.list}>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadItems}
        hasMore={hasMoreItems}
        loader={pageLoader()}
      >
        <Grid columns={4} style={{ width: '100%' }}>
          <Grid.Row>{worksItems}</Grid.Row>
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default ReleaseList;
