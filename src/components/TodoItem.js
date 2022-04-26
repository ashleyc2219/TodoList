import React, { useState } from 'react'
import '../styles/todoItem.scss'
import Overlay from './Overlay'

const TodoItem = (props) => {
  const { taskInfo, taskData, setTaskData, activeTab } = props
  const [action, setAction] = useState('')
  const [modalShow, setModalShow] = useState(false)
  let tab = activeTab === '已完成' ? 'completed' : ''

  function completeTime() {
    const date = new Date(taskInfo.id)

    return (
      date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    )
  }

  return (
    <>
      <Overlay
        taskInfo={taskInfo}
        action={action}
        modalShow={modalShow}
        setModalShow={setModalShow}
        taskData={taskData}
        setTaskData={setTaskData}
      />
      <div className={'list_item ' + tab}>
        <div className="task-name">{taskInfo.content}</div>
        <button
          onClick={() => {
            setAction('remove')
            setModalShow(true)
          }}
        >
          移除
        </button>
        <button
          onClick={() => {
            setAction('complete')
            setModalShow(true)
          }}
        >
          完成
        </button>
        <div className="time">{completeTime()}</div>
      </div>
    </>
  )
}

export default TodoItem
