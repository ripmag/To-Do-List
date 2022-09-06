import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = event =>{
        event.preventDefault()
        if (value.trim()) {
            alert.show('Дело добавлено в список', 'success')
            setValue('')
        }
        else {
            alert.show('Введите название дела для добавления его в список дел!')
        }    
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input
                    type="text"
                    className='form-control'
                    placeholder='введите текст названия дела'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    );
};

export default Form;