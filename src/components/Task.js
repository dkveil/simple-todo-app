const Task = (props) => {

    const {
        id,
        text,
        date,
        deletefn,
        changestatusfn,
        isactive
    } = props;

    return (
        <div>
            <p>
                <strong>{text}</strong> - {date}
            </p>
            {isactive ? 'active' : 'not active'}
            <button onClick={() => changestatusfn(id)}>done</button>
            <button onClick={() => deletefn(id)}>delete</button>
        </div>
    );
}

export default Task;