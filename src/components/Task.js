const Task = (props) => {

    const { text, date } = props

    return (
        <div>
            <p>
                <strong>{text}</strong> - {date}
            </p>
            <button onClick={() => console.log("is done")}>done</button>
            <button onClick={() => console.log("delete")}>delete</button>
        </div>
    );
}

export default Task;