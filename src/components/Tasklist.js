import React from "react";
import Task from "./Task";

const Tasklist = (props) => {

    const { tasks, deletefn, changestatusfn } = props;

    const activeTasks = tasks.filter((task) => task.active);
    const doneTasks = tasks.filter((task) => !task.active);

    return (
        <>
            <div>
                <h2>Tasks to do ({activeTasks.length}): </h2>
            </div>
            {activeTasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    isactive={task.active}
                    text={task.text}
                    date={task.date}
                    important={task.important}
                    deletefn={deletefn}
                    changestatusfn={changestatusfn}
                />
            ))}
            <hr />
            <div>
                <h2>Tasks done ({doneTasks.length}):</h2>
                {doneTasks.length > 5 && (
                    <span>last 5 items are displayed</span>
                )}
                {doneTasks.slice(0, 5).map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        isactive={task.active}
                        text={task.text}
                        date={task.date}
                        finishdate={task.finishDate}
                        important={task.important}
                        deletefn={deletefn}
                        changestatusfn={changestatusfn}
                    />
                ))}
            </div>
        </>
    );
};

export default Tasklist;
