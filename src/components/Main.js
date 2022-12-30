import { useEffect, useState } from 'react';

import Form from './Form/index.js'
import Tarefas from './Tarefas/index.js';

import './Main.css'

export default function Main() {
  const [ newTask, setNewTask ] = useState('');
  const [ index, setIndex ] = useState(-1);
  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if(!tarefas) return;

    setTasks(tarefas);
  }, [])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tasks));

  }, [tasks])

  const handleChange = (e) => {
      setNewTask(e.target.value);     
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if (tasks.indexOf(newTask) !== -1) return;

    if(index === -1) {
      setTasks([ ...tasks, newTask ]);
    } else {
      tasks[index] = newTask;
      setTasks([ ...tasks ]);
      setIndex(-1);
    }
    setNewTask('');
  }

  function handleDelete(index) {
    setTasks(
      tasks.filter((task, i, arr) => arr.indexOf(task) !== index)
    );
  }
 
  function handleEdit(ind) {
    setNewTask(tasks[ind]);
    setIndex(ind);
  }

  return (
    <div className="main">
      <h1>Task List</h1> 

      <Form 
        handleChange={handleChange} 
        handelSubmit={handelSubmit}
        handleValue={newTask}
      />

      <Tarefas 
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

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