
import './App.css';
import Form from './components/Form';
import List from './components/List';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react';
import {api} from "./api/apiResource"
import uuid from "react-uuid"

function App() {
  const[tasks,setTasks]=useState([]);

  const fetchdata= async()=>{
    const res=await api.get('/todolist')
    setTasks(res.data)
  }

  useEffect(()=>{
    fetchdata();
  },[tasks])

  const submitTask=async(userTask)=>{
    const data = {
      id: uuid(),
      task: userTask,
      complete : false
    }
    await api.post("todolist",data)
  };

  const deleteTask =async(task_id)=>{
    const res = await api.delete(`/todolist/${task_id}`)
  }

  const updateTask=async(task_id,complete)=>{
    await api.patch(`/todolist/${task_id}`,{complete})
  }

  return (
    <div className='mx-auto w-50'>
      <Form submitTask={submitTask}/>
      <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
  );
}

export default App;
