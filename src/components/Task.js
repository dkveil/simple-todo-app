import styled from "styled-components";

const TaskWrapper = styled.div`
    width: 280px;
    text-align: left;
    padding: .1rem 0;
    p{
        line-height: 1;
        strong{
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
        }
    }

    button{
        width: 40%;
        padding: 8px;
    }
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
        important,
        done
    } = props;

    if(finishdate){
        finish = new Date(finishdate).toLocaleDateString()
    }

    return (
        <TaskWrapper important={important}>
            <p>
                <strong>{text}{(important && !done)&& ' - important to do!'}</strong>
            </p>

            {!finish && <p>deadline - {date}</p>}
            {isactive ? (
                <button onClick={() => changestatusfn(id)}>done</button>
            ) : (
                <p>is done - {finish}</p>
            )}
            <button onClick={() => deletefn(id)}>delete</button>
        </TaskWrapper>
    );
};

export default Task;
