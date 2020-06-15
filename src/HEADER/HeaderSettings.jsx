import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import Settings from '../SETTING/Settings';
// import Home from "../HOME/Home";

import 'semantic-ui-css/semantic.min.css';

export default class Header extends Component {
  state = { activeItem: 'Settings' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted style={{borderRadius: '0'}}>
        <Menu inverted pointing secondary>
          <Link to='/Launch-Date-App'>
            <object>
              <Menu.Item
                name='Top'
                icon='home'
                active={activeItem === 'Top'}
                onClick={this.handleItemClick}
              />
            </object>
          </Link>
          <Menu.Item
            name='Messages'
            active={activeItem === 'Messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='MyPage'
            active={activeItem === 'MyPage'}
            onClick={this.handleItemClick}
          />
          <Link to='/Settings'>
            <object>
              <Menu.Item
                name='Settings'
                icon='setting'
                active={activeItem === 'Settings'}
                onClick={this.handleItemClick}
              />
            </object>
          </Link>
        </Menu>
      </Segment>
    );
  };
};