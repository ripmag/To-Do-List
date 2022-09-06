import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';


const ToDoList = ({ list, onRemove }) => {
    const alert=useContext(AlertContext)
    
return (       
    <ul className='list-group '>
        {list.map(elem => (
            <li className='list-group-item list' key={elem.id}>
                <div>
                    <strong>{elem.title} </strong>
                    <span>{elem.date}</span>
                </div>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onRemove(elem.id).then(alert.show(`Дело ${elem.title} успешно удалено`))} >delete</button>
            </li>
        ))}
    </ul>
)}

export default ToDoList;