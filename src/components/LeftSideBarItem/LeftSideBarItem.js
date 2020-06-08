import React from 'react';
import NavigationItem from '../Navbar/NavigationItem/NavigationItem';
import classes from './LeftSideBarItem.module.scss';

const leftSideBarItem = (props) => {
    return (
        <div className={classes.LeftSideBarItem}>
            <NavigationItem link={props.link} >{props.children}</NavigationItem>
        </div>

    );
}

export default leftSideBarItem;