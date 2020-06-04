import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './Navbar.module.scss';

const navBar = () => {
    return (
        <Navbar bg="light" expand="lg" className={classes.NavPos}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavigationItem link="/" exact>Dashboard</NavigationItem>
                    <NavigationItem link="/cms">CMS</NavigationItem>
                </Nav>
                <Nav className="ml-auto">
                    <NavigationItem link="/login" exact>Log out</NavigationItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navBar