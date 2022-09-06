import React from 'react';

const Alert = ({alert}) => {
    if(!alert) {return null}
    return (
        <div class={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
  <strong>Внимание!</strong> {alert.message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    );
};

export default Alert;