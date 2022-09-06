import React, { Fragment, useContext, useEffect } from 'react';
import Form from '../components/Form';
import Loader from '../components/Loader';
import ToDoList from '../components/ToDoList';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Home = () => {
    const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <Fragment>
            <div><h1>Список дел на ближайшее будущее</h1></div>
            <Form />
            <hr />
            {loading ?
                <Loader />
                :
                <ToDoList list={notes} onRemove={removeNote} />
            }
        </Fragment>
    );
};

export default Home;