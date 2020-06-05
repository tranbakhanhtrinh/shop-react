import React from 'react';

import classes from './Spinner.module.scss';

const spinner = () => {
    return (
        <div className={classes.loader}>
            <div className={[classes.inner, classes.one].join(' ')}></div>
            <div className={[classes.inner, classes.two].join(' ')}></div >
            <div className={[classes.inner, classes.three].join(' ')}></div>
        </div >
    )
}
export default spinner;