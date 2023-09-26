import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Header from '../Layouts/Header'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function EditarVuelo() {

    const params = useParams()
    const [vuelo, setVuelo] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3000/api/vuelos/${params.id}`).then((response) => {
            setVuelo(response.data)
        })
    }, [])
    
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
                            <th></th>
                            <th></th>
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
                            <td className='tabla'><Button variant="success">Editar</Button></td>
                            <td className='tabla'><Button variant="danger">Eliminar</Button></td>
                        </tr>
                    </tbody>
                </Table>
                <Link to={`/`}><Button id='crear'>Atrás</Button></Link>
            </Container>
           
        </>
    )
}

export default EditarVuelo