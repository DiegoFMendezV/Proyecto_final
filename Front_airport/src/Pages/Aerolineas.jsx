import Header from '../Layouts/Header'
import Container from 'react-bootstrap/Container';

function Aerolineas() {
    return[
        <>
        <Header/>
        <img className="image_banner" src="https://img.freepik.com/fotos-premium/cielo-nubes-colores-blanco-negro_38700-422.jpg" alt="" />
        <Container className='container_1'>
                <h1>NUESTROS ALIADOS</h1>
                <div>
                    <img className='aerolineas' src="https://www.avianca.com/content/dam/avianca_new/contenido/equipaje/aerolineas_codigos_compartidos.png" alt="" />
                </div>
                
            
        </Container>
            
            
        </>
    ]
}

export default Aerolineas