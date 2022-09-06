import React, { Fragment } from 'react';
import Form from '../components/Form';
import ToDoList from '../components/ToDoList';

const Home = () => {
    let l = new Array(3)
    .fill('')
    .map((_,i) => ({id:i,title: `LIST ${i+1}` }))
    return (
        <Fragment>
            <h1>Home page</h1>
            <Form/>
            <hr/>
            <ToDoList list={l}/>
        </Fragment>
    );
};

export default Home;