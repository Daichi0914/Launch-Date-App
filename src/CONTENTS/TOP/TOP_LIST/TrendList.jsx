import React, { useEffect, useState } from 'react';
import { Grid, Dimmer, Loader, Segment } from 'semantic-ui-react';
import TrendCard from '../TOP_CARD/TrendCard';
import fakeData from '../../../API/fakeApi';
import InfiniteScroll from 'react-infinite-scroller';

import classes from './list.module.css';

const TrendList = () => {
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState({});
  const [currentItems, setCurrentItems] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  useEffect(() => {
    const trendApi = async () => {
      try {
        const items = await fakeData.users;
        setItems(items.data);
      } catch (error) {
        console.log(error);
      }
    };
    trendApi();
  }, [setItems]);

  // APIからデータ取得 -> items
  // ページに表示するための新しい配列を作る -> currentItems
  // その配列の要素の数を指定したい
  // 新しい配列にitem.dataを入れたい
  // 最大表示数に達していない場合は一定数のitemを継続的に表示
  // concatで新しい配列を作成して更新していく

  const loadItems = () => {
    const current_item_count = currentItems.length;
    const max_items = 15;
    const page_item_size = 4;

    if (current_item_count < max_items) {
      const new_ids = Array.from(Array(page_item_size).keys()).map((num) => {
        return num + current_item_count;
      });
      console.log(new_ids)

      const new_items = new_ids.map((id) => {
        return { id: id };
      });
      console.log(new_items)

      setTimeout(() => {
        setCurrentItems(currentItems.concat(new_items));
      }, 500);
      console.log(currentItems)
    } else {
      setHasMoreItems(false);
    }
  };

  console.log(items)

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

  return (
    <div className={classes.list}>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => loadItems()}
        hasMore={hasMoreItems}
        loader={pageLoader()}
        initialLoad={true}
      >
        <Grid columns={4} style={{ width: '100%' }}>
          <Grid.Row>{trendItems}</Grid.Row>
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default TrendList;
