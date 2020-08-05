import React, { useEffect, useState } from 'react';
import { Grid, Dimmer, Loader, Segment } from 'semantic-ui-react';
import TrendCard from '../TOP_CARD/TrendCard';
// import rakutenApi from '../../../API/rakutenApi';
import fakeApi from '../../../API/fakeApi';
import InfiniteScroll from 'react-infinite-scroller';

import classes from './list.module.css';

const TrendList = () => {
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const trendApi = async () => {
      try {
        let items = await fakeApi.users;
        setItems(items.data);
        setIsFetched(true);
      } catch (error) {
        console.log(error);
      }
    };
    trendApi();
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
      setHasMoreItems(false); // レンダリング時に
    }
  };

  const trendItems = items ? (
    currentItems.map((item, index) => <TrendCard item={item} index={index} key={index} />)
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
          <Grid.Row>{trendItems}</Grid.Row>
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default TrendList;
