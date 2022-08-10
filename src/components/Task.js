const Task = (props) => {

    const {
        id,
        text,
        date,
        deletefn,
        changestatusfn
    } = props;

    return (
        <div>
            <p>
                <strong>{text}</strong> - {date}
            </p>
            <button onClick={() => deletefn(id)}>done</button>
            <button onClick={() => changestatusfn(id)}>delete</button>
        </div>
    );
}

export default Task;