import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <header>
            <Navbar className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <img className="image" src="https://icones.pro/wp-content/uploads/2021/08/icone-d-avion-orange.png"/>
                    <Navbar.Brand className='Nav_item1'>DIEGO'S AIRPORT</Navbar.Brand>
                    <Link className='Nav_item' to="/">Inicio</Link>
                    <Link className='Nav_item' to="/aerolineas">Aerolineas</Link>
                    <Link className='Nav_item' to="/contacto">Contacto</Link>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header