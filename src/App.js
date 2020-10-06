import React, {useState} from 'react';
import Column from './Column'
import 'bootstrap/dist/css/bootstrap.css'

  const taskArray = [
    {id:Math.random(), name: 'Drink', status: 'todo'},
    {id:Math.random(), name: 'Eat', status: 'todo'},
    {id:Math.random(), name: 'Sleep', status: 'todo'},
    {id:Math.random(), name: 'Workout', status: 'todo'},
    {id:Math.random(), name: 'Chill', status: 'todo'},
    {id:Math.random(), name: 'FE5', status: 'progress'},
    {id:Math.random(), name: 'Code', status: 'review'},
    {id:Math.random(), name: 'More code', status: 'review'},
    {id:Math.random(), name: 'Learn more', status: 'review'},
    {id:Math.random(), name: 'Even more', status: 'review'},
    {id:Math.random(), name: 'Sit and look in monitor', status: 'done'},
  ];

  const columnArray = [
    {id: Math.random(), title: "To do", status: 'todo'},
    {id: Math.random(), title: "Progress", status: 'progress'},
    {id: Math.random(), title: "Review", status: 'review'},
    {id: Math.random(), title: "Done", status: 'done'},
  ];

  const statuses = ["todo", "progress", "review", "done"];

function App() {

  const [task, setTask] = useState(taskArray);

  const changeTaskStatus = (taskId, direction) => {
    const newTasks = task.map(el => {
      if(el.id === taskId){
        if(direction === "right") el.status = statuses[statuses.indexOf(el.status) + 1];
        if(direction === "left") el.status = statuses[statuses.indexOf(el.status) - 1];
      }
return el
    })
setTask(newTasks)
  }

  console.log('tasks', task)

  return (
    <div className='container'>
    <div className='row'>{columnArray.map((el, index) => <Column column={el}
                                                        tasks={task}
                                                        changeTaskStatus={changeTaskStatus}
                                                        index={index}
                                                        statuses={statuses}


    />)}
    </div>

    </div>
  );
}

export default App;
