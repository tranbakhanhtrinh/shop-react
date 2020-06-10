import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import CMS from './CMS/CMS';
import Aux from '../../hoc/Aux/Aux'

class Admin extends Component {
    render() {
        return (
            <Aux>
                <Navbar />
                <CMS />
            </Aux>
        )
    }
}

export default Admin;