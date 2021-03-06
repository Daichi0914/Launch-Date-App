import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import LogoHeader from './LogoHeader';

import 'semantic-ui-css/semantic.min.css';

export default class Header extends Component {
  state = { activeItem: 'Top' };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.setMenuClick(name);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ position: 'fixed', width: '100%', height: '91.97px', zIndex: '100' }}>
        <LogoHeader />
        <Segment
          inverted
          style={{ borderRadius: '0', marginTop: '0', padding: '0 14px', backgroundColor: '#2d2d2d' }}
        >
          <Menu inverted pointing secondary>
            <Menu.Item
              name='Top'
              icon='home'
              active={activeItem === 'Top'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='MyList'
              icon='file alternate outline'
              active={activeItem === 'MyList'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Settings'
              icon='setting'
              active={activeItem === 'Settings'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>
      </div>
    );
  }
}
