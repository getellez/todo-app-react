import React, { Component } from 'react'

import { Card, Avatar, Typography } from 'antd';
import { EditOutlined, CheckOutlined, DeleteOutlined, StopOutlined } from '@ant-design/icons';
import { Input, Modal, Button } from 'antd';


import './styles/Task.css'
import iconLoading from '../assets/icon-loading.png'
import iconCompleted from '../assets/icon-verified.png'

export default class Task extends Component {
  constructor(props){
    super(props)
    this.state = {
        data: {
          id: undefined,
          completed: false,
          date: undefined,
          title: '',
          description: ''
        },
        isModalVisible: false
    }
  }

  componentDidMount = ()  => {
    this.setState({ data: this.props.taskData })
  }

  toggleCompleteTask = () => {
    const tasksList = JSON.parse(localStorage.getItem('tasks_list'))
    for (const task of tasksList) {
      if (task.id === this.state.data.id) {
        task.completed = !task.completed
      }
    }
    localStorage.setItem('tasks_list', JSON.stringify(tasksList))
    this.setState({
      data: {
        ...this.state.data,
        completed: !this.state.data.completed
      }
    })
  }

  handleEditTask = () => {
    try {
      this.setState({ isModalVisible: true })
    } catch (error) {
      
    }
  }

  handleOpenModal = () => {
    this.setState({ isModalVisible: true })
  }

  handleCloseModal = () => {
    this.setState({ isModalVisible: false })
  }
  
  handleChange = ({ target }) => {
    this.setState({
      data: {
        ...this.state.data,
        [target.name]: target.value
      }
    })
  }

  handleSubmitEditForm = () => {
    const tasksList = JSON.parse(localStorage.getItem('tasks_list'))
    for (const task of tasksList) {
      if (task.id === this.state.data.id) {
        task.title = this.state.data.title
        task.description = this.state.data.description
      }
    }
    localStorage.setItem('tasks_list', JSON.stringify(tasksList))
    this.setState({ isModalVisible: false })
  }

  render() {
    const { Meta } = Card;
    const { Text } = Typography
    const metaStyle = { marginTop: '5px' }
    const avatar = this.state.data.completed? iconCompleted:iconLoading
    let statusIcon;
    if (!this.state.data.status) {
      statusIcon = <CheckOutlined key="complete" onClick={this.toggleCompleteTask} />
    } else {
      statusIcon = <StopOutlined key="complete" onClick={this.toggleCompleteTask}/>
    }

    return (
      <React.Fragment>
        <Card
          className="Task"
          actions={[
            statusIcon,
            <EditOutlined key="edit" onClick={this.handleEditTask} />,
            <DeleteOutlined key="delete" />,
          ]}>

          <div>
            <Text type="secondary">
              <p>
                <small>
                  Status: {this.state.data.completed?'completed':'pending'}
                </small> 
              </p>
            </Text>
            <Text type="secondary">
              <small>
                Created: {this.state.data.date}
              </small> 
            </Text>
          </div>
          <Meta
            style={metaStyle}
            avatar={<Avatar src={avatar} />}
            title={this.state.data.title}
            description={this.state.data.description}
          />
        </Card>
        
        <Modal 
        title="Basic Modal" 
        visible={this.state.isModalVisible} 
        onOk={this.handleOpenModal} 
        onCancel={this.handleCloseModal}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleSubmitEditForm} form="ModalForm">
                Save
          </Button>
        ]}
        >
          <form>
          <Input 
              name="title"
              className="Modal__input" 
              placeholder="Title" 
              value={this.state.data.title} 
              onChange={this.handleChange} />
            
            <Input.TextArea 
              name="description"
              rows={3} 
              className="Modal__input" 
              placeholder="Description" 
              value={this.state.data.description} 
              onChange={this.handleChange} />
          </form>
        </Modal>

      </React.Fragment>
    )
  }
}
