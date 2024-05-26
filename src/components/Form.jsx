import React, { useState} from 'react'

const Form = ({submitTask}) => {
  const [userTask,setUserTask]=useState('');

  const formSubmitHanding=()=>{
    submitTask(userTask)
    setUserTask('')
  }

  return (
    <div>
        <div className="row">
            <div className="col-8 offset-2">
                <input value={userTask} onChange={e => setUserTask(e.target.value)} type='text'className='form-control' placeholder='Enter Tasks'/>
            </div>
            <div className="col-2">
                <button onClick={()=>formSubmitHanding()} type='button' className='btn btn-primary'><i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Form