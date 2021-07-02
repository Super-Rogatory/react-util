import React from 'react';

function Task({ task }) {
    return (
        <div className='task'>
            <h3>{task.text}</h3>
        </div>
    )
}

export default Task;