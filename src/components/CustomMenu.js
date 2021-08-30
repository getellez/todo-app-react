// Dependencies
import React, { Component } from 'react'

// Components

// Assets
import './styles/CustomMenu.css'

export default class CustomMenu extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="Menu">
          <div className="Menu__container">
            <div className="Menu__container-item">
              Home
            </div>
            <div className="Menu__container-item">
              About
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}
