import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { PlusCircleTwoTone, CheckCircleTwoTone, DeleteTwoTone, MinusCircleTwoTone, ContainerTwoTone } from '@ant-design/icons'
import { Input, Modal, Button } from 'antd';

import './styles/ControlPanel.css'

export default class ControlPanel extends Component {
  state = {
    isModalActive: false,
    task: {
      id: undefined,
      title: "",
      description: "",
      completed: false,
      date: new Date().toLocaleDateString('es-co')
    }
  }
  handleOpenModal = (e) => {
    this.setState({
      isModalActive: true,
      task: {
        ...this.state.task,
        title: '',
        description: ''
      }
    })
  }

  handleCloseModal = (e) => {
    this.setState({
      isModalActive: false
    })
  }
  handleChange = ({ target }) => {
    this.setState({
      task: {
        ...this.state.task,
        [target.name]: target.value
      }
    })
  }
  handleShowAllTasks = () => {
    const tasksList = JSON.parse(localStorage.getItem('tasks_list'))
    this.props.updateTasksList(tasksList)
  }
  handleShowCompletedTasks = () => {
    const tasksList = JSON.parse(localStorage.getItem('tasks_list'))
    const completedTasks = tasksList.filter(task => task.completed === true)
    this.props.updateTasksList(completedTasks)
  }
  handleShowPendingTasks = () => {
    const tasksList = JSON.parse(localStorage.getItem('tasks_list'))
    const pendingTasks = tasksList.filter(task => task.completed === false)
    this.props.updateTasksList(pendingTasks)
  }

  handleDeleteAll = () => {
    localStorage.removeItem('tasks_list')
    this.props.updateTasksList([])
  }

  handleAddNewTask= ({ target }) => {
    
    let tasksList = localStorage.getItem("tasks_list")
    
    const { task } = this.state;
    const newTask = {...task, id: uuidv4()}
    
    if (!tasksList) {
      localStorage.setItem("tasks_list", JSON.stringify([newTask]))
      this.props.updateTasksList([newTask])
      this.setState({ isModalActive: false })
    } else if (tasksList.length >= 0) {
      
      tasksList = JSON.parse(tasksList)
      tasksList.push(newTask)
      localStorage.setItem("tasks_list", JSON.stringify(tasksList))
      this.props.updateTasksList(tasksList)
      this.setState({ isModalActive: false })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="Control">
          <div className="Control__action" onClick={this.handleOpenModal}>
            <div>
              <PlusCircleTwoTone twoToneColor="#009fb7" />
            </div>
            <p className="Control__action-add">
              Add new task
            </p>
          </div>
          <div className="Control__action" onClick={this.handleShowCompletedTasks}>
            <div>
              <CheckCircleTwoTone /> 
            </div>
            <p>
              Completed
            </p>
          </div>
          <div className="Control__action" onClick={this.handleShowPendingTasks}>
            <div>
              <MinusCircleTwoTone />
            </div>
            <div>
              <p>
                Pending
              </p>
            </div>
          </div>
          <div className="Control__action" onClick={this.handleShowAllTasks}>
            <div>
              <ContainerTwoTone />
            </div>
            <div>
              <p>
                Show all
              </p>
            </div>
          </div>
          <div className="Control__action" onClick={this.handleDeleteAll}>
            <div>
              <DeleteTwoTone />
            </div>
            <div>
              <p>
                Delete all
              </p>
            </div>
          </div>
        </div>
        
        <Modal 
        title="Add new task" 
        visible={this.state.isModalActive} 
        onOk={this.handleAddNewTask} 
        onCancel={this.handleCloseModal} 
        footer={[
          <Button key="submit" type="primary" onClick={this.handleAddNewTask} form="ModalForm">
                Save
          </Button>
          ]
        }>
          
          <form id="ModalForm" onSubmit={this.handleAddNewTask} className="Modal" >
            <Input 
              name="title"
              className="Modal__input" 
              placeholder="Title" 
              value={this.state.task.title} 
              onChange={this.handleChange} />
            
            <Input.TextArea 
              name="description"
              rows={3} 
              className="Modal__input" 
              placeholder="Description" 
              value={this.state.task.description} 
              onChange={this.handleChange} />
          </form>

        </Modal>
      </React.Fragment>
    )
  }
}
