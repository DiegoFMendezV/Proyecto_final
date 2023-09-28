import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Layouts/Header'
import Body from '../Components/Body'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'

const newVuelo = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [vuelo, setVuelo] = useState ({numero_vuelo: "", aerolinea: "", clase: "", origen: "", destino: "", fecha_hora_vuelo_partida: "", fecha_hora_vuelo_llegada: ""})
    const handleChange = ({target}) => {
        setVuelo({
            ...vuelo,
            [target.name]: target.value
        })
    }

    const URL = "http://localhost:3000/api/vuelos"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL, vuelo);
        if(response.status === 201){
            Swal.fire({
                icon: 'success',
                title: `El vuelo No. ${response.data.numero_vuelo} se ha creado correctamente`,  
              })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error',
                text: 'Intenta nuevamente'  
              })
        }
    }

    return (
        <>
            <Header/>
            <img className="image_banner" src="https://img1.wallspic.com/previews/4/6/2/3/13264/13264-ingenieria_aeroespacial-los_viajes_aereos-vuelo-aviacion-cuerpo_estrecho_de_aeronaves-x750.jpg" alt="" />
            <Container className='container_1'>
                <h2>Vuelos Registrados</h2>
                <Button id='crear' onClick={handleShow}>Crear Nuevo</Button>
                <Row>
                    <Body/>
                </Row>
            </Container>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crear Nuevo Vuelo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Número de Vuelo</Form.Label>
                            <Form.Control type="text" id='numero_vuelo' name='numero_vuelo' value={vuelo.numero_vuelo} onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Aerolínea</Form.Label>
                            <Form.Control type="text" id='aerolinea' name='aerolinea' value={vuelo.aerolinea} onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Clase</Form.Label>
                            <Form.Control type="text" id='clase' name='clase' value={vuelo.clase} onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Origen</Form.Label>
                            <Form.Control type="text" id='origen' name='origen' value={vuelo.origen} onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Destino</Form.Label>
                            <Form.Control type="text" id='destino' name='destino' value={vuelo.destino} onChange={handleChange} required/>
                        </Form.Group>
                        <div className='fechas'>
                            <Form.Group className="mb-3">
                                <Form.Label>Fecha de Partida</Form.Label>
                                <Form.Control type="text" id='fecha_hora_vuelo_partida' name='fecha_hora_vuelo_partida' value={vuelo.fecha_hora_vuelo_partida} onChange={handleChange} required placeholder='AAAA/MM/DD'/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Fecha de Llegada</Form.Label>
                                <Form.Control type="text" id='fecha_hora_vuelo_llegada' name='fecha_hora_vuelo_llegada' value={vuelo.fecha_hora_vuelo_llegada} onChange={handleChange} required placeholder='AAAA/MM/DD'/>
                            </Form.Group>
                        </div>
                        <Button type="submit" id="btn_ver">
                            Guardar
                        </Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
    
export default newVuelo 
    

    
