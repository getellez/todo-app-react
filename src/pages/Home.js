// Dependencies
import React from 'react'

// Components
import TaskList from '../components/TaskList'
import { Col, Row } from 'antd';

// Assets
import './styles/Home.css'

export default function Home(props) {
  
  return (
    <React.Fragment>
      <div className="Home">
        <div className="Home__header">
          <h1 className="Home__header-title">To-Do App</h1>
          <p className="Home__header-description">You can add, edit, remove, update tasks that you need to do.</p>
        </div>
      </div>

      <Row>
        <Col lg={{span: 12, offset: 6}} md={{span: 24, offset: 0}} sm={{span: 24, offset: 0}} xs={{span: 24, offset: 0}}>
          <TaskList />
        </Col>
      </Row>
    </React.Fragment>

  )
}
