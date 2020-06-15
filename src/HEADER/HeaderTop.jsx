import React, { Component } from 'react';
import { Menu, Segment, Grid } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import Top from "../TOP/Top";
import Settings from '../SETTING/Settings';

import 'semantic-ui-css/semantic.min.css';

export default class Header extends Component {
  state = { activeItem: 'Top' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const menu = () => {
      if (activeItem === 'Top') {
        return <Top />
      }
      if (activeItem === 'Settings') {
        return <Settings />
      }
    }

    return (
      <div>
        <Segment inverted style={{borderRadius: '0'}}>
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
              Component={Settings}
            />
          </Menu>
        </Segment>
        <Grid
            stretched
            // width={12}
            // style={{height: '550px'}}
          >
            <Segment style={{width: '95%', minWidth: '675px'}}>
              {/* {menu()} */}
            </Segment>
        </Grid>
      </div>
    );
  };
};