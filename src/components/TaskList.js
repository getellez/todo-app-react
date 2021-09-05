import React, { Component } from 'react'

// Components
import ControlPanel from './ControlPanel';


// Assets
import './styles/TaskList.css'
import Task from './Task';



export default class TaskList extends Component {

  constructor(props){
    super(props)
    this.state =  {
      loading: false,
      tasks: []
    }
  }

  updateVisibleTasks = (tasks) => {
    this.setState({
      tasks: tasks
    })
  }
  
  toggleCompleteTask = (taskId) => {
    const tasksList = JSON.parse(localStorage.getItem('tasks_list'))
    for (const task of tasksList) {
      if (task.id === taskId) {
        task.completed = !task.completed
      }
    }
    localStorage.setItem('tasks_list', JSON.stringify(tasksList))
    this.updateVisibleTasks(tasksList)

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
    console.log("Se acaba de renderizar la lista de tareas.")
    return (
      <div className="List">
            <div className="List__container">
              
              <ControlPanel updateTasksList={this.updateVisibleTasks} />
              
              {
                this.state.tasks.length===0 ? <p className="empty">En estos momentos no hay tareas </p>
                : 
                this.state.tasks.map((task) => {
                  return <Task 
                  key={task.id}
                  taskData={task}
                  updateVisibleTasks={this.updateVisibleTasks}
                  />
                })
              }

            </div>
      </div>
    )
  }
}
