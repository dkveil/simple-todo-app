import React from 'react'
import styled from 'styled-components'

const AddTaskWrapper = styled.div`
    text-align: center;
    padding: 1.5rem 0;
    div {
        display: flex;
        align-items: center;
        text-align: left;
        padding: 8px 0;
        width: 230px;
        margin: auto;
        input {
            padding: 1px 10px;
            height: 25px;
            border: 1px solid gray;
        }
        input[type="text"] {
            border-radius: 3px;
            height: 30px;
            width: 100%;
        }

        input[type="date"] {
            margin-left: 10px;
            border-radius: 3px;
        }
    }

    button{
        margin: 12px auto;
        width: 230px;
        padding: 8px 0;
    }
`;

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
        <AddTaskWrapper>
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
        </AddTaskWrapper>
    );
}

export default AddTask;