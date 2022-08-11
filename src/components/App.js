import React from "react";
import Tasklist from "./Tasklist";
import AddTask from "./AddTask";

function App() {
    const [tasks, setTasks] = React.useState([
        {
            text: "first task",
            date: "2022-02-15",
            important: true,
            active: true,
            finishDate: null,
        },
        {
            text: "second task",
            date: "2022-02-15",
            important: true,
            active: true,
            finishDate: null,
        },
        {
            text: "third task",
            date: "2022-02-15",
            important: true,
            active: true,
            finishDate: null,
        },
    ]);

    const deleteTask = (id) => {

        const taskscopy = [...tasks];
        taskscopy.splice(id, 1)
        setTasks(taskscopy)

    };

    const changeStatusTask = (id) => {
        const taskscopy = [...tasks]
        taskscopy[id].active = !taskscopy[id].active;
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
