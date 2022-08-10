import Task from './Task';

const Tasklist = (props) => {

    const { tasks } = props

    return (
        <>
            <div>
                <h2>Tasks to do:</h2>
                {tasks.map((item, index) =>(
                    <Task
                        key={index}
                        text={item.text}
                        date={item.date}
                    />
                ))}
            </div>
            <hr />
            <div>
                <h2>Tasks done:</h2>
            </div>
        </>
    );
}

export default Tasklist;