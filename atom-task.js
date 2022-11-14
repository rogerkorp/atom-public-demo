import React, {useState} from 'react';
import './atom-task.css'


function AtomTaskOpen({ task_name }) {

  let [isActive, setIsActive] = useState(false);
  let [isEditActive, setIsEditActive] = useState(false);

  let handleClick = event => {
    setIsActive(current => !current);
  }

  let handleEditClick = event => {
    setIsEditActive(current => !current);
  }

  return (
    <div className="task_wrapper">
        <button className="task_check_box" onClick={handleClick}>
          {isActive ? '✓' : ''}
        </button>
        <p className={isActive ? 'task_closed' : 'task_open'}>{task_name}</p>
        <button className="edit_task" onClick={handleEditClick}>
        {isEditActive ? 'Done' : 'Edit'}
        </button>
    </div>
  );
}



export default AtomTaskOpen;
