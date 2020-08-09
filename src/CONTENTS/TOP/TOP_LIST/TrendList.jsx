import React, { useEffect, useState } from 'react';
import { Grid, Dimmer, Loader, Segment } from 'semantic-ui-react';
import Card from '../TOP_CARD/Card';
import rakutenApi from '../../../API/rakutenApi';
import InfiniteScroll from 'react-infinite-scroller';

import classes from './list.module.css';

const TrendList = () => {
  const [items, setItems] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [copyItems, setCopyItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const trendApi = async () => {
      try {
        const trendItems = await rakutenApi.trendComics(pageNum);
        setItems(items.concat(trendItems.data.Items));
        setCopyItems(copyItems.concat(trendItems.data.Items));
        setIsFetched(true);
      } catch (error) {
        console.log(error);
      }
    };
    trendApi();
    return () => {
      // setItems([]);
      // setPageNum(1);
      // setCopyItems([]);
      // setCurrentItems([]);
      setHasMoreItems(true);
      setIsFetched(false);
    };
  }, [pageNum]);

  const current_item_count = currentItems.length;
  const max_items = items.length;
  const page_item_size = 30;

  const loadItems = () => {
    if (pageNum < 11) {
      let deleteArr = copyItems.splice(0, page_item_size); // deleteArrにはデリートした方の配列が入る

      if (!copyItems.length) {
        setTimeout(() => {
          setCurrentItems(currentItems.concat(deleteArr));
          setPageNum(pageNum + 1)
        }, 500);
      } else {
        setTimeout(() => {
          setCurrentItems(currentItems.concat(deleteArr));
        }, 500);
      }
    } else {
      setHasMoreItems(false);
    }
  };

  console.log("pageNum", pageNum);
  console.log("items", items);
  console.log("copyItems", copyItems);
  console.log("currentItems",currentItems);

  const trendItems = items ? (
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
    <Loader active inline='centered' style={{ height: 80, marginTop: 50 }} key={1} />
  );

  if (!isFetched) {
    return <Loader active inline='centered' style={{ height: 80, marginTop: 50 }} />;
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
