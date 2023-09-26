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
        <div id='div_table'>
            <Table striped bordered hover id='table'>
                <thead>
                    <tr className='tabla'>
                        <th>N°. Vuelo</th>
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
                                    <td className='tabla'><Link to={`/${vuelo._id}`}><Button id="btn_ver">Ver Más</Button></Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Body