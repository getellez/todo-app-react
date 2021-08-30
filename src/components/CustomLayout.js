// Dependencies
import React, { Component } from 'react'

// Components
import CustomMenu from './CustomMenu';

// Assets



export default class CustomLayout extends Component {
  render() {
    
    return (
      <React.Fragment>
        <CustomMenu />
        {this.props.children}
      </React.Fragment>
    )
  }
}
