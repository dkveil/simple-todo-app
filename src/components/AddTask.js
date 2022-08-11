import React from 'react'
import styled from 'styled-components'

const AddTask = (props) => {

    const { addfn } = props

    const minDate = new Date().toISOString().slice(0, 10);

    const [task, setTask] = React.useState({
        name: '',
        important: false,
        date: new Date().toISOString().slice(0,10)
    })

    const handleChange = e => {
        if(e.target.type === 'checkbox'){
            setTask(prev => ({
                ...prev,
                [e.target.name]: e.target.checked
            }))
        } else {
            setTask(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
        }
    }

    const handleClick = () => {
        const added = addfn(task)

        if(added){
            setTask({
                name: '',
                important: false,
                date: new Date().toISOString().slice(0, 10),
            });
        }
    }

    return (
        <div>
            <div>
                <input
                    name="name"
                    type="text"
                    placeholder="Add task name"
                    value={task.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="important">is important?</label>
                <input
                    name="important"
                    type="checkbox"
                    checked={task.important}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="date">deadline:</label>
                <input
                    name="date"
                    value={task.date}
                    type="date"
                    min={minDate}
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleClick}>Add task</button>
        </div>
    );
}

export default AddTask;