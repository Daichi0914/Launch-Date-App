import React, { Component } from 'react';
import { Menu, Segment, Button, Icon } from 'semantic-ui-react';
import LogoHeader from './LogoHeader';

import 'semantic-ui-css/semantic.min.css';

export default class Header extends Component {
  state = { activeItem: 'Top' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.setMenuClick(name)
  }

  render() {
    const { activeItem } = this.state

    // const { setMenuClick } = this.props

    return (
      <div>
        <LogoHeader />
        <Segment inverted style={{borderRadius: '0', marginTop: '0', padding: '0 14px'}}>
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
            <div style={{width: '118px', paddingTop: '1px', position: 'absolute', right: '0', marginRight: '15px'}}>
              <Button basic inverted color='red'>
                <Icon name='sign-out' />Sign Out
              </Button>
            </div>
          </Menu>
        </Segment>
      </div>
    );
  };
};