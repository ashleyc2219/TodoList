import { useState, useEffect } from 'react'
import '../src/styles/todolist.scss'

import InputForm from './components/InputForm'
import TodoItem from './components/TodoItem'
import Tabs from './components/Tabs'

function Todolist() {
  const [taskData, setTaskData] = useState([''])
  const [showTask, setShowTask] = useState('')
  const [activeTab, setActiveTab] = useState('待完成')
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todolist-task'))
    setTaskData(data)
  }, [])
  function renderTodo() {
    if (showTask && showTask !== '') {
      return showTask.map((value, index) => (
        <TodoItem
          key={index}
          taskInfo={value}
          taskData={taskData}
          setTaskData={setTaskData}
          activeTab={activeTab}
        />
      ))
    }
  }

  return (
    <>
      <div className="Todolist">
        <header className="Todolist_header">
          <h1 className="title">待辦事項</h1>
          <InputForm setTaskData={setTaskData} />
        </header>
        <main>
          <Tabs
            taskData={taskData}
            setTaskData={setTaskData}
            showTask={showTask}
            setShowTask={setShowTask}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="list-field">{renderTodo()}</div>
        </main>
      </div>
    </>
  )
}

export default Todolist
