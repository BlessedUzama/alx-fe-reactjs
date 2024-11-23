import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

function App() {

  return (
    <>
      <TodoList />
      <AddTodoForm />
    </>
  )
}

export default App
