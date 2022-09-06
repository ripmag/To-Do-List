import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
    <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="/">ToDo List</Navbar.Brand>
            <Nav className="me-auto">                                
                <NavLink to='/' className='nav-link'>Список дел </NavLink>
                <NavLink to='/about' className='nav-link'>О приложении</NavLink>
            </Nav>

        </Container>
    </Navbar>

);

export default NavBar;