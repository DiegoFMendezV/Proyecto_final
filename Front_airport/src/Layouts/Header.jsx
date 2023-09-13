import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <header>
            <Navbar className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <img className="image" src="https://icons.iconarchive.com/icons/icons-land/points-of-interest/256/Airport-Blue-2-icon.png"/>
                    <Navbar.Brand className='Nav_item1'>DIEGO'S AIRPORT</Navbar.Brand>
                    <Link className='Nav_item' to="/">Inicio</Link>
                    <Link className='Nav_item' to="/">Aerolineas</Link>
                    <Link className='Nav_item' to="/">Contacto</Link>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header