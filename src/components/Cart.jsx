import React from 'react'

const Cart = ({tasks,deleteTask,updateTask}) => {
  

  return (
    <div>
        {
            tasks.map((task)=>(
        <div key={task.id} className={task.complete ?
            "list-group-item w-100 px-3 mt-3 bg-success text-decoration-line-through text-white" : 
            "list-group-item w-100 px-3 mt-3"}>
            <div className="row">
                <div className="col-10">
                  <input type="checkbox" className='me-2' onClick={()=>updateTask(task.id,!task.complete)} checked={task.complete}/>
                  {task.task}
                  </div>
                <div className="col-2">
                  <i onClick={()=>deleteTask(task.id)} className="fa-solid fa-xmark"></i>
                  </div>
            </div>
        </div>
        ))
        }
    </div>
  )
}

export default Cart