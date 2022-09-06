import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext)
    if(!alertContext.alert.visible) {return null}
    return (
        <div class={`alert alert-${alertContext.alert.type || 'warning'} alert-dismissible`}>
  <strong>Внимание!</strong> {alertContext.alert.message}
  <button onClick={alertContext.hide} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    );
};

export default Alert;