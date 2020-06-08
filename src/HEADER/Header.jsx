import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Setting from "../SETTING/Setting";

import 'semantic-ui-css/semantic.min.css'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted style={{borderRadius: '0'}}>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='myPage'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='setting'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
            Component={Setting}
          />
        </Menu>
      </Segment>
    )
  }
};
