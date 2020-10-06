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
    <>

      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
        Launch static backdrop modal
      </button>


      <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1"
           aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              .
              .
              .
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>

    </>
    </div>
  );
}

export default App;
