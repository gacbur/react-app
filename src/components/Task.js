import React from 'react';
import './Task.css'

const Task = (props) => {

    const { text, id } = props.task

    return (
        <>
            <div className="task">
                <p>{text}</p>
                <button
                    onClick={() => props.delete(id)}
                    className="delete-btn">x</button>
            </div>
        </>
    );
}

export default Task;