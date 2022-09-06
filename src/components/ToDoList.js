import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const ToDoList = ({ list, onRemove }) => {
    const alert = useContext(AlertContext)

    return (
        <TransitionGroup component='ul' className='list-group '>
            {list.map(elem => (
                <CSSTransition
                classNames={'list'}
                timeout={1000}>
                    <li className='list-group-item list' key={elem.id}>
                        <div>
                            <strong>{elem.title} </strong>
                            <span>{elem.date}</span>
                        </div>
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onRemove(elem.id).then(alert.show(`Дело ${elem.title} успешно удалено`))} >delete</button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

export default ToDoList;