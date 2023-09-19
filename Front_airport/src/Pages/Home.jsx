import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Layouts/Header'
import Body from '../Components/Body'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let crearVuelo = () => {
        let number_vuelo_input = document.getElementById('number_vuelo').value
        let aerolinea_input = document.getElementById('aerolinea').value
        let clase_input = document.getElementById('clase').value
        let origen_input = document.getElementById('origen').value
        let destino_input = document.getElementById('destino').value
        let fecha_partida_input = document.getElementById('fecha_partida').value
        let fecha_llegada_input = document.getElementById('fecha_llegada').value
        axios.post('http://localhost:3000/api/vuelos', {
            number_vuelo: number_vuelo_input,
            aerolinea: aerolinea_input,
            clase: clase_input,
            origen: origen_input,
            destino: destino_input,
            fecha_partida: fecha_partida_input,
            fecha_llegada: fecha_llegada_input
        })
            .then((response) => {
            alert('Vuelo creado exitosamente')
        })
    }

    return (
        <>
            <Header />
            <Container>
                <h3>Vuelos Registrados</h3>
                <Button variant="primary" id='crear' onClick={handleShow}>Crear Nuevo</Button>
                <Row>
                    <Body />
                </Row>
            </Container>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
                >
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crear Nuevo Vuelo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Número de Vuelo</Form.Label>
                            <Form.Control type="text" id='number_vuelo'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Aerolínea</Form.Label>
                            <Form.Control type="text" id='aerolinea'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Clase</Form.Label>
                            <Form.Control type="text" id='clase'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Origen</Form.Label>
                            <Form.Control type="text" id='origen'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Destino</Form.Label>
                            <Form.Control type="text" id='destino'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Fecha de Partida</Form.Label>
                            <Form.Control type="date" id='fecha_partida'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Fecha de Llegada</Form.Label>
                            <Form.Control type="date" id='fecha_llegada'/>
                        </Form.Group>
                        <Button variant="primary" onClick={crearVuelo}>
                            Guardar
                        </Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default Home