import React from 'react'
import styled from 'styled-components'

const AddTask = () => {

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
        </div>
    );
}

export default AddTask;