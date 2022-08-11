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

    return (
        <div>
            TODO APP
            <AddTask />
            <Tasklist
                tasks={tasks}
                deletefn={deleteTask}
                changestatusfn={changeStatusTask}
            />
        </div>
    );
}

export default App;
