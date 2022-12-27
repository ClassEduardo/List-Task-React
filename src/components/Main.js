import { useState } from 'react';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css'

export default function Main() {
  const [ newTask, setNewTask ] = useState('');
  const [ tasks, setTasks ] = useState([
      'Fazer café',
      'Beber água',
      'Estudar'
    ]
  );

  
  const handleChange = (e) => {
      setNewTask(e.target.value);     
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if (tasks.indexOf(newTask) !== -1) return;
    setTasks([ ...tasks, newTask ]);
    setNewTask('');
  }

  function handleDelete(index) {
    setTasks(
      tasks.filter((task, i, arr) => arr.indexOf(task) !== index)
    );
  }


  function handleEdit(e, index) {
    console.log('Edit' + index)
  }

  return (
    <div className="main">
      <h1>Task List</h1> 

      <form onSubmit={handelSubmit} action="#" className="form">
        <input
          onChange={handleChange}
          type="text"
          value={newTask}
        />

        <button type="submit">
          <FaPlus />
        </button>
      </form>

      <ul className="tasks">
        {tasks.map((task, index) => (
          <li key={task}>
            {task}
            <span>
              <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
              <FaWindowClose className="delete" onClick={() => handleDelete(index)} />
            </span>
          </li>
        ))}
      </ul>

    </div>
  )
}




/*import { Component } from "react";

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css'

export default class Main extends Component{
  state = {
    newTask: '',
    tasks: [
      'Fazer café',
      'Beber água',
      'Estudar'
    ],
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  handelSubmit = (e) => {
    e.preventDefault();
    console.log(newTask)
  }

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Task List</h1> 

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={newTask}
          />

          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}*/