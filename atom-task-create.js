import React, {useState} from 'react';
import * as ReactDOM from 'react-dom/client';
import './atom-task-create.css'

//Alright, so I'm going to have to leave note here in order to help me remember how this works. -RK
//Dylan, if you're reading this feel free to add on to this. Consider it a teaching opportunity. -RK

function TaskItems({ task_name }) { //This function essentially does two things.
    
    let [isActive, setIsActive] = useState(false);
    let handleClick = event => { //1. Changes the class of the div and checkbox button when the onClick event handler has been triggered.
      setIsActive(current => !current);
    }

    // and 2. Creates a div with a check

    return (
      <div className="task_wrapper">
          <button className="task_check_box" onClick={handleClick}>
            {isActive ? '✓' : ''}
          </button>
          <p className={isActive ? 'task_closed' : 'task_open'}>{task_name}</p>
      </div>
    );
  } 

class TaskForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: '',
                      items: []
                    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event){
        event.preventDefault();
        let taskList = this.state.items.slice()
        let taskInput = document.getElementById('taskAddInput').value;
		document.getElementById('taskAddInput').value = '';
		taskList.push(taskInput);
		this.setState({items: taskList});
      }
    
      render() {
        let taskList = [];
        let items = this.state.items;
        items.forEach((item, i) => {
			item && taskList.unshift(<TaskItems task_name={item}/>)
		}
        );
        
        return (
            <div key="UniqueKey">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <input className="text_input_box" id="taskAddInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter task name."/>
                    </label>
                </form>
          {taskList}
          </div>
        );
      }
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<TaskForm />);

    export default TaskForm
    