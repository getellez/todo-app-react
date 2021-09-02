import { Col, Row } from 'antd'
import React from 'react'
import { Avatar } from 'antd';

import './styles/About.css'

export default function About(props) {
  
  return (
    <div>
      <Row>
        <Col offset={8} sm={8}>
          <div className="Header">
            <div className="Header__picture">
              <Avatar 
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 200,
                xl: 200,
                xxl: 200,
              }}
              src="https://avatars.githubusercontent.com/u/85968117?s=400&u=0fd103391c0d5f953421d3c864c8bedfc7289ff2&v=4"
              />
            </div>
            <div className="Header__info">
              <h1>Germán Téllez Vanegas</h1>
              <p>Software Engineer</p>
              <p>Cartagena, Colombia</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
