import React, { useEffect, useState } from 'react';
import { Grid, Dimmer, Loader, Segment } from 'semantic-ui-react';
import ReleaseCard from '../TOP_CARD/ReleaseCard';
// import rakutenApi from '../../../API/rakutenApi';
import fakeApi from '../../../API/fakeApi';
import InfiniteScroll from 'react-infinite-scroller';

import classes from './list.module.css';

const ReleaseList = () => {
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const releasedApi = async () => {
      try {
        const items = await fakeApi.comics;
        setItems(items.data);
        setIsFetched(true);
      } catch (error) {
        console.log(error);
      }
    };
    releasedApi();
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
      let deleteArr = items.splice(0, page_item_size);

      setTimeout(() => {
        setCurrentItems(currentItems.concat(deleteArr));
      }, 500);
    } else {
      setHasMoreItems(false);
    }
  };

  const releaseItems = items ? (
    currentItems.map((item, index) => <ReleaseCard item={item} index={index} key={index} />)
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
        loadMore={() => loadItems()}
        hasMore={hasMoreItems}
        loader={pageLoader()}
      >
        <Grid columns={4} style={{ width: '100%' }}>
          <Grid.Row>{releaseItems}</Grid.Row>
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default ReleaseList;
