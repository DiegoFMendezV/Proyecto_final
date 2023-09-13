import React, { useState, useEffect } from 'react'
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


    return (
        <>
            <Header />
            <Container>
                <h3>Vuelos Registrados</h3>
                <Button variant="primary" onClick={handleShow}>Crear Nuevo</Button>
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
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Aerolínea</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Clase</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Origen</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Destino</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Fecha de Partida</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Fecha de Llegada</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default Home