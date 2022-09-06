import React from 'react';

const Form = () => {
    return (
        <form>
            <div className='form-group'>
                <input 
                type="text"
                className='form-control'
                placeholder='введите текст названия дела'
                />
            </div>
        </form>
    );
};

export default Form;