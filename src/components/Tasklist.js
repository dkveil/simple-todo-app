import React from "react";
import Task from "./Task";

const Tasklist = (props) => {

    const { tasks, deletefn, changestatusfn } = props;

    const activeTasks = tasks.filter((task) => task.active);
    const doneTasks = tasks.filter((task) => !task.active);

    if(doneTasks.length > 1){
        doneTasks.sort((a, b) => b.finishDate - a.finishDateb )
    }

    if(activeTasks.length > 1){
        activeTasks.sort((a,b) => {
            if (a.date.slice(0, 4) - b.date.slice(0, 4) === 0){
                if(a.date.slice(5,7) - b.date.slice(5,7) === 0){
                    return a.date.slice(8,10) - b.date.slice(8,10)
                } else {
                    return a.date.slice(5, 7) - b.date.slice(5, 7);
                }
            } else {
                return a.date.slice(0, 4) - b.date.slice(0, 4);
            }
        })
    }

    return (
        <>
            <div>
                <h2>Tasks to do ({activeTasks.length}): </h2>
            </div>
            {activeTasks.map((task) => {
                return(
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
            )})}
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
