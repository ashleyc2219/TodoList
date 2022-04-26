import '../styles/inputForm.scss'
import React, { useState, useEffect } from 'react'

const InputForm = (props) => {
  const { setTaskData } = props
  const [newTask, setNewTask] = useState('')
  const [check, setCheck] = useState('check')
  const [pass, setPass] = useState(false)
  const [errorSubmit, setErrorSubmit] = useState('')
  function getLocalstorage() {
    return JSON.parse(localStorage.getItem('todolist-task'))
  }

  async function checkForm() {
    if (newTask.length >= 1) {
      console.log('pass true')
      setPass(true)
    } else {
      console.log('pass false')
      setCheck('check')
      setPass(false)
    }
  }

  async function submit() {
    await checkForm()
    if (pass && newTask.length >= 1) {
      console.log('go submit')
      let data = getLocalstorage()
      data = data ? data : ''
      let newData = [
        ...data,
        {
          id: Date.now(),
          content: newTask,
          completed: false,
          completeTime: null,
        },
      ]
      localStorage.setItem('todolist-task', JSON.stringify(newData))
      setTaskData(newData)
      setCheck('off')
      // setPass(false)
      setNewTask('')
    } else {
      setErrorSubmit('error')
    }
  }
  useEffect(() => {
    if (check === 'check') {
      checkForm()
    }
  }, [newTask])

  return (
    <div className="input-form">
      <div className="label field">
        <label>項目</label>
      </div>
      <div className="form field">
        <input
          className={errorSubmit === 'error' && pass === false ? 'error' : ''}
          placeholder="請輸入待辦事項"
          onChange={(e) => {
            setNewTask(e.target.value)
          }}
          value={newTask}
        />
        <button
          onClick={() => {
            submit()
          }}
          disabled={errorSubmit === 'error' && pass === false ? 'disabled' : ''}
        >
          送出
        </button>
        <div
          className={
            errorSubmit === 'error' && pass === false
              ? 'errorMsg field error'
              : 'errorMsg field'
          }
        >
          不得為空值
        </div>
      </div>
    </div>
  )
}

export default InputForm
