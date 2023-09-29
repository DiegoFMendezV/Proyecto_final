import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Header from '../Layouts/Header'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'

export default function Vuelo() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const URL = "http://localhost:3000/api/vuelos"

    const params = useParams()
    const [vuelo, setVuelo] = useState({})
    useEffect(() => {
        axios.get(URL+`/${params.id}`).then((response) => {
            setVuelo(response.data)
        })
    }, [])  

    const handleDelete = async () => {
        Swal.fire({
            title: `Estás seguro de querer eliminar el vuelo No. ${vuelo.numero_vuelo}?`,
            text: "No se podrá revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(URL+`/${params.id}`).then((response) => {
                    if(response.status === 200){
                        Swal.fire({
                            icon: 'error',
                            title: 'Ha ocurrido un error',
                            text: 'Intenta nuevamente'  
                          })
                    }else{
                        Swal.fire({
                            icon: 'success',
                            title: `El vuelo No. ${response.data.numero_vuelo} se ha eliminado correctamente`,  
                          })
                          navigate("/");
                    }
                })  
            }
        })
    }

    return (
        <>
            <Header/>
            <img className="image_banner" src="https://fotografias.lasexta.com/clipping/cmsimages01/2022/05/11/ACDA3A95-7595-4334-AD35-01D411AD4CE6/mascarilla-sera-obligatoria-aviones-partir-semana-que-viene_98.jpg?crop=3131,1762,x0,y295&width=1900&height=1069&optimize=low&format=webply" alt="" />
            <Container className='container_1'>
            <h3>Detalle del Vuelo</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr className='tabla'>
                            <th>N°. Vuelo</th>
                            <th>Aerolínea</th>
                            <th>Clase</th>
                            <th>Ciudad Origen</th>
                            <th>Ciudad Destino</th>
                            <th>Fecha Partida</th>
                            <th>Fecha Llegada</th>
                            <th colSpan={2}>Acciones</th>

                        </tr>
                    </thead>
                    <tbody>                          
                        <tr>
                            <td>{vuelo.numero_vuelo}</td>
                            <td>{vuelo.aerolinea}</td>
                            <td>{vuelo.clase}</td>
                            <td>{vuelo.origen}</td>
                            <td>{vuelo.destino}</td>
                            <td>{vuelo.fecha_hora_vuelo_partida}</td>
                            <td>{vuelo.fecha_hora_vuelo_llegada}</td>
                            <td className='tabla'><Button variant="success" onClick={handleShow}>Editar</Button></td>
                            <td className='tabla'><Button variant="danger" onClick={handleDelete}>Eliminar</Button></td>
                            
                        </tr>
                    </tbody>
                </Table>
                <Link to={`/`}><Button id='crear'>Atrás</Button></Link>
            </Container>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Vuelo No. {vuelo.numero_vuelo}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Aerolínea</Form.Label>
                            <Form.Control type="text" id='aerolinea' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Clase</Form.Label>
                            <Form.Control type="text" id='clase' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Origen</Form.Label>
                            <Form.Control type="text" id='origen' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Destino</Form.Label>
                            <Form.Control type="text" id='destino' />
                        </Form.Group>
                        <div className='fechas'>
                            <Form.Group className="mb-3">
                                <Form.Label>Fecha de Partida</Form.Label>
                                <Form.Control type="text" id='fecha_hora_vuelo_partida'  placeholder='AAAA/MM/DD'/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Fecha de Llegada</Form.Label>
                                <Form.Control type="text" id='fecha_hora_vuelo_llegada' placeholder='AAAA/MM/DD'/>
                            </Form.Group>
                        </div>
                        <Button id="btn_ver" onClick={updateVuelo}>
                            Guardar
                        </Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
