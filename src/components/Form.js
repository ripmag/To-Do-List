import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
            firebase.addNote(value.trim()).then( () => {alert.show('Дело добавлено в список', 'success')})
            .catch((e) => {alert.show('Непредвиденная ошибка в addNote. Error:'+e,'danger')})
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