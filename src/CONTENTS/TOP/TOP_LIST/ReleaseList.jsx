import React, { useEffect, useState } from 'react';
import { Grid, Dimmer, Loader, Segment } from 'semantic-ui-react';
import Card from '../TOP_CARD/Card';
import rakutenApi from '../../../API/rakutenApi';
import InfiniteScroll from 'react-infinite-scroller';

import classes from './list.module.css';

const ReleaseList = () => {
  const [items, setItems] = useState([]);
  const [pageNum, setPageNum] = useState(100)
  const [copyItems, setCopyItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const releaseApi = async () => {
      try {
        const releaseItems = await rakutenApi.releaseComics(pageNum);
        setItems(releaseItems.data.Items);
        setCopyItems(releaseItems.data.Items.concat());
        setIsFetched(true);
      } catch (error) {
        console.log(error);
      }
    };
    releaseApi();
    return () => {
      setItems([]);
      setPageNum(1);
      setCopyItems([]);
      setCurrentItems([]);
      setHasMoreItems(true);
      setIsFetched(false);
    };
  }, []);

  const current_item_count = currentItems.length;
  const max_items = items.length;
  const page_item_size = 10;

  const loadItems = () => {
    if (current_item_count < max_items) {
      let deleteArr = copyItems.splice(0, page_item_size);

      setTimeout(() => {
        setCurrentItems(currentItems.concat(deleteArr));
      }, 500);
    } else {
      setHasMoreItems(false);
    }
  };

  const releaseItems = items ? (
    currentItems.map((item, index) => (
      <Card
        img={item.Item.largeImageUrl}
        title={item.Item.title}
        author={item.Item.author}
        publisherName={item.Item.publisherName}
        salesDate={item.Item.salesDate}
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
    <Loader active inline='centered' style={{ height: 80, marginTop: 50 }} key={2} />
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
          <Grid.Row>{releaseItems}</Grid.Row>
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default ReleaseList;
