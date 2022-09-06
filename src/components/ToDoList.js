import React from 'react';



const ToDoList = ({ list, onRemove }) => (
    <ul className='list-group '>
        {list.map(elem => (
            <li className='list-group-item list' key={elem.id}>
                <div>
                    <strong>{elem.title} </strong>
                    <span>{elem.date}</span>
                </div>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onRemove(elem.id)} >delete</button>
            </li>
        ))}
    </ul>
)

export default ToDoList;