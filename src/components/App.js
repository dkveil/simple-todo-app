import React from "react";
import Tasklist from "./Tasklist";
import AddTask from "./AddTask";

function App() {
    const [tasks, setTasks] = React.useState([
        {
            id: 0,
            text: "first task",
            date: "2022-02-15",
            important: true,
            active: true,
            finishDate: null,
        },
        {
            id: 1,
            text: "second task",
            date: "2022-02-15",
            important: true,
            active: true,
            finishDate: null,
        },
        {
            id: 2,
            text: "third task",
            date: "2022-02-15",
            important: true,
            active: true,
            finishDate: null,
        },
    ]);

    const [taskCounter, setTaskCounter] = React.useState(tasks.length)


    const deleteTask = (id) => {

        const taskscopy = [...tasks];
        const index = tasks.findIndex(task => task.id === id)
        taskscopy.splice(index, 1)
        setTasks(taskscopy)

    };

    const changeStatusTask = (id) => {
        const taskscopy = [...tasks]
        taskscopy.forEach(task => {
            if(task.id === id){
                task.active = !task.active
                task.finishDate = new Date().getTime()
            }
        })
        setTasks(taskscopy)
    };

    const addTask = (newTask) => {
        const task = {
            id: taskCounter,
            text: newTask.name,
            date: newTask.date,
            important: newTask.important,
            active: true,
            finishDate: null
        }

        if(task.text){
            setTaskCounter(currentNumber => currentNumber + 1)

            setTasks(prev => ([
                ...prev,
                task
            ]))

            return true
        } else {
            alert('add task name')
        }
    }

    return (
        <div>
            TODO APP
            <AddTask
                addfn={addTask}
            />
            <Tasklist
                tasks={tasks}
                deletefn={deleteTask}
                changestatusfn={changeStatusTask}
            />
        </div>
    );
}

export default App;
