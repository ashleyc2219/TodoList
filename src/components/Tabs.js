import React, { useState, useEffect } from 'react'
import '../styles/tabs.scss'

const Tabs = (props) => {
  const {
    taskData,
    setTaskData,
    showTask,
    setShowTask,
    activeTab,
    setActiveTab,
  } = props

  const tabsData = ['待完成', '已完成']
  function clickHandler(tab = '待完成') {
    let data = JSON.parse(localStorage.getItem('todolist-task'))
    data = data ? data : ''
    setActiveTab(tab)
    if (data.length >= 1) {
      if (tab === '待完成') {
        let newData = data.filter((value) => value.completed === false)
        setShowTask(newData)
      } else {
        let newData = data.filter((value) => value.completed === true)
        setShowTask(newData)
      }
    }
  }
  function renderTabs() {
    return tabsData.map((value, index) => (
      <div
        className={value === activeTab ? 'tab active' : 'tab'}
        key={index}
        onClick={() => {
          clickHandler(value)
        }}
      >
        {value}
      </div>
    ))
  }
  useEffect(() => {
    clickHandler()
  }, [taskData])

  return <div className="tabs-field">{renderTabs()}</div>
}

export default Tabs
