import styled from "styled-components";

const TaskWrapper = styled.div`
    ${(props) => {
        if (props.important) {
            return `
                color: red;
            `;
        } else {
            return `
                color: black;
            `;
        }
    }}
`;

const Task = (props) => {

    let finish;

    const {
        id,
        text,
        date,
        finishdate,
        deletefn,
        changestatusfn,
        isactive,
        important } = props;

    if(finishdate){
        finish = new Date(finishdate).toDateString()
    }

    return (
        <TaskWrapper important={important}>
            <p>
                <strong>{text}</strong> {!finish && `- ${date}`}
            </p>
            {isactive ? "active " : null}
            {isactive ? (
                <button onClick={() => changestatusfn(id)}>done</button>
            ) : (
                "is done - "
            )}
            {finish && finish}
            <button onClick={() => deletefn(id)}>delete</button>
        </TaskWrapper>
    );
};

export default Task;
