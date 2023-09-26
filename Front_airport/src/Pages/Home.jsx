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
        let numero_vuelo_input = document.getElementById('numero_vuelo').value
        let aerolinea_input = document.getElementById('aerolinea').value
        let clase_input = document.getElementById('clase').value
        let origen_input = document.getElementById('origen').value
        let destino_input = document.getElementById('destino').value
        let fecha_hora_vuelo_partida_input = document.getElementById('fecha_hora_vuelo_partida').value
        let fecha_hora_vuelo_llegada_input = document.getElementById('fecha_hora_vuelo_llegada').value
        axios.post('http://localhost:3000/api/vuelos', {
            numero_vuelo: numero_vuelo_input,
            aerolinea: aerolinea_input,
            clase: clase_input,
            origen: origen_input,
            destino: destino_input,
            fecha_hora_vuelo_partida: fecha_hora_vuelo_partida_input,
            fecha_hora_vuelo_llegada: fecha_hora_vuelo_llegada_input
        })
            .then((response) => {
            alert('Vuelo creado exitosamente')
        })
    }

    return (
        <>
            <Header/>
            <img className="image_banner" src="https://img1.wallspic.com/previews/4/6/2/3/13264/13264-ingenieria_aeroespacial-los_viajes_aereos-vuelo-aviacion-cuerpo_estrecho_de_aeronaves-x750.jpg" alt="" />
            <Container className='container_1'>
                <h2>Vuelos Registrados</h2>
                <Button id='crear' onClick={handleShow}>Crear Nuevo</Button>
                <Row>
                    <Body />
                </Row>
            </Container>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crear Nuevo Vuelo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Número de Vuelo</Form.Label>
                            <Form.Control type="text" id='numero_vuelo'/>
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
                            <Form.Control type="text" id='fecha_hora_vuelo_partida' placeholder='AAAA/MM/DD'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Fecha de Llegada</Form.Label>
                            <Form.Control type="text" id='fecha_hora_vuelo_llegada' placeholder='AAAA/MM/DD'/>
                        </Form.Group>
                        <Button id="btn_ver" onClick={crearVuelo}>
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