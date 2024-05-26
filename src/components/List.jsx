import React from 'react'
import Cart from './Cart'

const List = ({tasks,deleteTask,updateTask}) => {
  return (
    <div>
        <Cart tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
  )
}

export default List