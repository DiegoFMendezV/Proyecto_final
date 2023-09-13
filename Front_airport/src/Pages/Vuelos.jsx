import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Header from '../Layouts/Header'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Vuelo() {
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
            <Container>
            <h3>Detalle del Vuelo</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Número de Vuelo</th>
                            <th>Aerolínea</th>
                            <th>Clase</th>
                            <th>Ciudad Origen</th>
                            <th>Ciudad Destino</th>
                            <th>Fecha y Hora Partida</th>
                            <th>Fecha y Hora Llegada</th>
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
                        </tr>
                    </tbody>
                </Table>
                <Link to={`/`}><Button variant="primary">Atrás</Button></Link>
            </Container>
        </>
    )
}

export default Vuelo