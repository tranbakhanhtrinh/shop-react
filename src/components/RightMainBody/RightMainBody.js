import React from 'react';

const rightMainBody = props => {
    return (
        <div>
            <h4>{props.elePage}</h4>
            <textarea rows="4" value={props.value} onChange={props.changed} name={props.name}></textarea>
        </div>
    )
}

export default rightMainBody;