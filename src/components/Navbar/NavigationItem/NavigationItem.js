import React from 'react';
import { NavLink } from 'react-router-dom';
import Item from 'react-bootstrap/Nav';

// import classes from './NavigationItem.module.scss';

const navigationItem = (props) => {
    return (
        <Item>
            <NavLink className="nav-link" to={props.link} activeClassName={props.activeClass} exact={props.exact}>{props.children}</NavLink>
        </Item>
    )
}

export default navigationItem;