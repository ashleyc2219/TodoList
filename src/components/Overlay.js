import '../styles/overlay.scss'

import React, { useState } from 'react'

const Overlay = (props) => {
  const { modalShow, setModalShow, taskInfo, action, taskData, setTaskData } =
    props
  function actionHandler(action) {
    const data = JSON.parse(localStorage.getItem('todolist-task'))
    if (action === 'remove') {
      let newData = data.filter((task) => task.id !== taskInfo.id)
      setTaskData(newData)
      localStorage.setItem('todolist-task', JSON.stringify(newData))
    }
    if (action === 'complete') {
      let newData = data.map(function (value, index) {
        if (value.id === taskInfo.id) {
          return { ...value, completed: true, completeTime: Date.now() }
        } else {
          return value
        }
      })
      setTaskData(newData)
      localStorage.setItem('todolist-task', JSON.stringify(newData))
    }
    setModalShow(false)
  }
  return (
    <div className={'Overlay ' + modalShow}>
      <div className="confirm-modal">
        <div className="confirm-modal_header">提示</div>
        <div className="confirm-modal_body">
          是否{action === 'remove' ? '移除' : '完成'} {taskInfo.content} ?
        </div>
        <div className="confirm-modal_footer">
          <button className="btn-decorated" onClick={() => setModalShow(false)}>
            取消
          </button>
          <button
            className="btn-decorated"
            onClick={() => actionHandler(action)}
          >
            確認
          </button>
        </div>
      </div>
    </div>
  )
}

export default Overlay
