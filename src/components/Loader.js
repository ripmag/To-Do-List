import React from 'react';

const Loader = (props) => (
    <div className="text-center">
        <button className="btn btn-primary" type="button" disabled>
            <div>Loading...</div>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </button>
    </div>
);

export default Loader;