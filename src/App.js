import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [tasks,setTasks] = useState([]);
  const [filter,setFilter] = useState('all');

  // chargement depuis le localstorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  },[]);

  // Mise à jour du localstorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks]);

    const addTask = (task) => {
      setTasks([...tasks,task]);
    }

    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    }

    const toggleTask = (id) => {
      setTasks(tasks.map(task => task.id === id ? { ...tasks, completed: !task.completed} : task));
    }

    const updateTask = (updateTask) => {
      setTasks(tasks.map(task => task.id === updateTask.id ? updateTask : task));
    };

  return (
    <div className="app">
     <h1>To-Do List Advanced</h1>
     <TaskForm addTask={addTask} />
     <Filter setFilter ={setFilter} />
     <TaskList
        tasks={tasks}
        filter={filter}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
