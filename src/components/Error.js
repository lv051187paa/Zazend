import React from 'react';

import './error.scss';

const Error = props => {
    return(
        <p className="error">
            {props.textError}
        </p>
    )
}

export default Error;