// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../config'

// Components

// Assets
import './styles/CustomMenu.css'

const { home, about } = routes

export default function CustomMenu(props) {
  
  return (
    <React.Fragment>
      <div className="Menu">
        <div className="Menu__container">
          <div className="Menu__container-item">
            <Link to={home}>Home</Link>
          </div>
          <div className="Menu__container-item">
            <Link to={about}>About</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
