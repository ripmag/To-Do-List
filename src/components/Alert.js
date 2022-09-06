import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext)

    return (
        <CSSTransition
            in={alertContext.alert.visible}
            timeout={{
                enter: 1000,
                exit: 300
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alertContext.alert.type || 'warning'} alert-dismissible`}>
                <strong>Внимание!</strong> {alertContext.alert.message}
                <button onClick={alertContext.hide} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </CSSTransition>
    );
};

export default Alert;