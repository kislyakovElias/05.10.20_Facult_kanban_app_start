import React, {useEffect, useState} from 'react';
import Column from './Column'
import 'bootstrap/dist/css/bootstrap.css'
import Controller from "./Controller";
import Edit from "./Edit";
import axios from "axios"


  const taskArray = [
    {id:Math.random(), name: 'Drink', status: 'todo', priority:1 },
    {id:Math.random(), name: 'Eat', status: 'todo', priority:1},
    {id:Math.random(), name: 'Sleep', status: 'todo', priority:1},
    {id:Math.random(), name: 'Workout', status: 'todo', priority:1},
    {id:Math.random(), name: 'Chill', status: 'todo', priority:1},
    {id:Math.random(), name: 'FE5', status: 'progress', priority:1},
    {id:Math.random(), name: 'Code', status: 'review', priority:1},
    {id:Math.random(), name: 'More code', status: 'review', priority:1},
    {id:Math.random(), name: 'Learn more', status: 'review', priority:1},
    {id:Math.random(), name: 'Even more', status: 'review', priority:1},
    {id:Math.random(), name: 'Sit and look in monitor', status: 'done', priority:1},
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

  useEffect( ()=>{
    axios.get('http://nazarov-kanban-server.herokuapp.com/card')
        .then(res => setTask(res.data))
        .catch(err => console.log(err))
  }, [])

  const createTask = (newName, newStatus) => {
    console.log(newName, newStatus);
    const newTask = [...task, { id: Math.random(), name: newName, status: newStatus, description: ''}];
    setTask(newTask)
  }

  const editTask = (id, nameInput, statusInput) =>{
    const newArr = task.map(el =>{
      if(el.id === id) return {task, id: Math.random(), name: nameInput, status: statusInput, priority: 1
      }
      return el
    })
  setTask(newArr)
  }


  const del=(taskId)=>{
    const newList = task.filter(el => el.id !== taskId)
    setTask(newList)
  }

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

 const changePriority = (id,value)=>{
    const newArr = task.map(el => {
      if (id === el.id) el.priority = el.priority + value;
      return el;
    })
   setTask(newArr)
 }


  console.log('tasks', task)

  const deleteTask = async (id) => {
   const result = await axios.delete(`http://nazarov-kanban-server.herokuapp.com/card/${id}` )
        .then(res => {
          return res
        })
       .catch(err => {
         return err
         console.log(err)
       })
    console.log(result)
    if (result.status === 200)
       await axios.get('http://nazarov-kanban-server.herokuapp.com/card')
              .then(res => {
                setTask(res.data)
                console.log(res)
              })
              .catch(err => {
                console.log(err)
              })
}

  return (
    <div className='container'>
    <div className='row'>{columnArray.map((el, index) => <Column  column={el}
                                                        tasks={task}
                                                        changeTaskStatus={changeTaskStatus}
                                                        index={index}
                                                        statuses={statuses}
                                                        del={del}
                                                        changePriority={changePriority}
                                                        editTask={editTask}
                                                        deleteTask={deleteTask}


    />)}
    <Controller createTask={createTask}/>

    </div>
    </div>
  );
}

export default App;
