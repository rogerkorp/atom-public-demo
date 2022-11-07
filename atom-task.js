import React, {useState} from 'react';
import './atom-task.css'


function AtomTaskOpen({ task_name }) {

  let [isActive, setIsActive] = useState(false);

  let handleClick = event => {
    setIsActive(current => !current);
  }

  return (
    <div className="task_wrapper">
        <button className="task_check_box" onClick={handleClick}>
          {isActive ? '✓' : ''}
        </button>
        <p className={isActive ? 'task_closed' : 'task_open'}>{task_name}</p>
    </div>
  );
}



export default AtomTaskOpen;
