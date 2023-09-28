import Header from '../Layouts/Header'
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faLink, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contacto() {
    return[
        <>
        <Header/>
        <img className="image_banner" src="https://fondosmil.com/fondo/31173.jpg" alt="" />
        <Container className='container_1'>
            <div className='contacto'>
                <div>
                    <img className='imagen_foto' src="https://i.postimg.cc/XJg2bh0f/FOTO.jpg" alt="" />
                </div>
                <div className='datos'>
                    <h1>DIEGO FERNANDO MÉNDEZ VARGAS</h1>
                    <h4 className='job'>Desarrollador Junior</h4>
                    <p><FontAwesomeIcon icon={faPhone} />   3115913254</p>
                    <p><FontAwesomeIcon icon={faAt} />  diego.mendez7716@gmail.com</p>
                    <p><img className='icon' src="https://cdn-icons-png.flaticon.com/512/4401/4401412.png" alt="" /><a target='_blank' href="https://www.linkedin.com/in/diego-fernando-mendez-vargas/">    LinkendIn</a></p>
                    <br />
                    <p>CONOCIMIENTOS EN:</p>
                    <br />
                    <div className='iconos'>
                        <p><img className='icon_html' src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png" alt="" /></p>
                        <p><img className='icon_css' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="" /></p>
                        <p><img className='icon_js' src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png" alt="" /></p>
                        <p><img className='icon_3' src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png" alt="" /></p>
                    </div>
                    <div className='iconos'>
                        <p><img className='icon_2' src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" /></p>
                        <p><img className='icon_4' src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png" alt="" /></p>
                    </div>
                    <div className='iconos'>
                        <p><img className='icon_4' src="https://powerphrase.com/wp-content/uploads/2018/07/laravel-logo.png" alt="" /></p>
                        <p><img className='icon_3' src="https://ww2.freelogovectors.net/wp-content/uploads/2023/02/react-logo-freelogovectors.net_.png?lossy=1&w=2560&ssl=1" alt="" /></p>
                        <p><img className='icon_3' src="https://blog.amio.io/content/images/2018/06/vue.png" alt="" /></p>
                    </div>
                </div>
            </div>
            
        </Container>
            
            
        </>
    ]
}

export default Contacto