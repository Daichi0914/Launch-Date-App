import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import Settings from '../SETTING/Settings';
// import Home from "../HOME/Home";

import 'semantic-ui-css/semantic.min.css';

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted style={{borderRadius: '0'}}>
        <Menu inverted pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='myPage'
            active={activeItem === 'myPage'}
            onClick={this.handleItemClick}
          />
          <Link to='/Settings'>
            <Menu.Item
              name='setting'
              active={activeItem === 'setting'}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
      </Segment>
    );
  };
};