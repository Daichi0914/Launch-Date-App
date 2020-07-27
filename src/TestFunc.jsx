import React, { useState } from 'react';
// import './App.css';
import InfiniteScroll from 'react-infinite-scroller';

const App = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const loadItems = () => {
    const current_item_count = currentItems.length;
    const max_items = 100;
    const page_item_size = 10;

    if (current_item_count < max_items) {
      const new_ids = Array.from(Array(page_item_size).keys()).map((num) => {
        return num + current_item_count;
      });
      const new_items = new_ids.map((id) => {
        return { id: id };
      });

      setTimeout(() => {
        setCurrentItems(currentItems.concat(new_items));
      }, 500);
    } else {
      setHasMoreItems(false);
    }
  }

  const items = currentItems.map((item) => {
    return <div>{item.id}</div>;
  });

  return (
    <div className='App'>
      <p className='App-intro'>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>

      <InfiniteScroll
        pageStart={0}
        loadMore={() => loadItems()}
        hasMore={hasMoreItems}
        loader={<div>Loading...</div>}
        initialLoad={true}
      >
        {items}
      </InfiniteScroll>
    </div>
  );
};

export default App;
