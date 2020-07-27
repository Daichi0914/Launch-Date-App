import React, { Component } from 'react';
// import './App.css';
import InfiniteScroll from 'react-infinite-scroller';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      hasMoreItems: true,
    };

    this.loadItems = this.loadItems.bind(this);
  }

  loadItems() {
    const current_item_count = this.state.items.length;
    const max_items = 300;
    const page_item_size = 10;

    if (current_item_count < max_items) {
      const new_ids = Array.from(Array(page_item_size).keys()).map((num) => {
        return num + current_item_count;
      });
      const new_items = new_ids.map((id) => {
        return { id: id };
      });

      setTimeout(() => {
        this.setState({ items: this.state.items.concat(new_items) });
      }, 500); // add some delay for demo purpose
    } else {
      this.setState({ hasMoreItems: false });
    }
  }

  render() {
    const items = this.state.items.map((item) => {
      return <div>{item.id}</div>;
    });

    return (
      <div className='App'>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems}
          hasMore={this.state.hasMoreItems}
          loader={<div>Loading...</div>}
          initialLoad={true}
        >
          {items}
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
