import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';

export default class TopMenu extends Component {
  state = { activeItem: 'trend' };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.setContents(name);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        size='large'
        vertical
        style={{
          width: '100%',
          height: '100vh',
          borderRadius: '0',
          borderBottom: 'solid 1px rgba(34,36,38,.15)',
          zIndex: '100',
        }}
      >
        <Menu.Item>
          <Input icon='search' placeholder='Search ...' />
        </Menu.Item>
        <Menu.Item
          name='trend'
          active={activeItem === 'trend'}
          onClick={this.handleItemClick}
        >
          月間トレンド
        </Menu.Item>

        <Menu.Item
          name='release'
          active={activeItem === 'release'}
          onClick={this.handleItemClick}
        >
          今月の作品
        </Menu.Item>

        <Menu.Item
          name='works'
          style={{
            borderBottom: 'solid 1px rgba(34,36,38,.15)',
            borderRadius: '0',
          }}
          active={activeItem === 'works'}
          onClick={this.handleItemClick}
        >
          作品一覧
        </Menu.Item>
      </Menu>
    );
  }
}
