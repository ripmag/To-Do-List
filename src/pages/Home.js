import React, { Fragment, useContext, useEffect } from 'react';
import Form from '../components/Form';
import ToDoList from '../components/ToDoList';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Home = () => {
    const {loading, notes, fetchNotes} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
    }, [])
    return (
        <Fragment>
            <h1>Home page</h1>
            <Form/>
            <hr/>
            <ToDoList list={notes}/>
        </Fragment>
    );
};

export default Home;