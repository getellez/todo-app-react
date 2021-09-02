// Dependencies
import React from 'react'

// Components
import TaskList from '../components/TaskList'

// Assets
import './styles/Home.css'

export default function Home(props) {
  
  return (
    <div className="Home">
      <div className="Home__header">
        <h1 className="Home__header-title">To-Do App</h1>
        <p className="Home__header-description">You can add, edit, remove, update tasks that you need to do.</p>
      </div>

      <TaskList />

    </div>
  )
}
