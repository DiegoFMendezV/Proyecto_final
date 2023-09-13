import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Body() {
    const [vuelos, setVuelos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/vuelos').then((response) => {
            setVuelos(response.data)
            // console.log(response.data)
        })
    }, [vuelos])
    
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Número de Vuelo</th>
                        <th>Aerolínea</th>
                        <th>Detalle</th>
                    </tr>
                </thead>
                <tbody>                              
                    {
                        vuelos?.map((vuelo) => {
                            return (  
                                <tr key={vuelo._id}>
                                    <td>{vuelo.numero_vuelo}</td>
                                    <td>{vuelo.aerolinea}</td>
                                    <td><Link to={`/${vuelo._id}`}><Button variant="primary">Ver Más</Button></Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Body