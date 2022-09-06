import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ToDoList = ({ list }) => {
    return (
        <ul className='list-group '>
            {list.map(elem => (
                <li className='list-group-item list' key={elem.id}>
                    <div>
                        <strong>{elem.title} </strong>
                        <span>{new Date().toLocaleString()}</span>
                    </div>
                    <button type="button" class="btn btn-outline-danger btn-sm">delete</button>

                </li>
            ))}
        </ul>
    );
};

export default ToDoList;