import React from 'react'
import Task from './Task'
import './TaskList.css'

const TaskList = (props) => {

    const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} />)

    return (
        <>
            <div className="tasklist">
                {props.tasks.length > 0 ? tasks : <h3 className="listEmpty">The list is empty, write something to add a new task!</h3>}
            </div>
        </>
    );
}

export default TaskList;