import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import SettingContents from './SettingContents';

import 'semantic-ui-css/semantic.min.css';

export default class Settings extends Component {
  state = { activeItem: 'Account' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div style={{paddingTop: '91.97px'}}>
        <Grid style={{marginTop: '1px'}}>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular style={{height: '523px', minWidth: '120px'}}>
              <Menu.Item
                name='Account'
                active={activeItem === 'Account'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Notice'
                active={activeItem === 'Notice'}
                onClick={this.handleItemClick}
              />
              {/* <Menu.Item
                name='companies'
                active={activeItem === 'companies'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='links'
                active={activeItem === 'links'}
                onClick={this.handleItemClick}
              /> */}
            </Menu>
          </Grid.Column>
          <Grid.Column
            stretched
            width={12}
            style={{height: '550px'}}
          >
            <Segment style={{width: '95%', minWidth: '675px'}}>
              <SettingContents activeItem={activeItem} />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  };
};