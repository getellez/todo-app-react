import React, { Component } from 'react'
import { Col, Row } from 'antd';

// Components
import ControlPanel from './ControlPanel';


// Assets
import './styles/TaskList.css'
import Task from './Task';



export default class TaskList extends Component {

  state =  {
    loading: false,
    tasks: []
  }

  handleAddNewTask = (tasks) => {
    this.setState({
      tasks: tasks
    })
  }

  componentDidMount = () => {
    // Read from local storage and update state
    const tasksList = localStorage.getItem('tasks_list');
    if (tasksList && tasksList.length > 0) {
      this.setState({
        tasks: JSON.parse(tasksList)
      })
    }
    

  }

  render() {
    return (
      <div className="List">
        <Row>
          <Col span={8} offset={8}>
            <div className="List__container">
              
              <ControlPanel updateTasksList={this.handleAddNewTask} />
              
              {
                this.state.tasks.length===0 ? <p className="empty">En estos momentos no hay tareas </p>
                : 
                this.state.tasks.map((task) => {
                  return <Task 
                  key={task.id}
                  status={task.completed}
                  date={task.date}
                  title={task.title} 
                  description={task.description} />
                })
              }

            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
