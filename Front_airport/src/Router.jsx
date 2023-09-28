import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Home from './Pages/Home'
import Vuelo from './Pages/Vuelo'
import Contacto from './Pages/Contacto'
import Aerolineas from './Pages/Aerolineas'
 
function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<Vuelo />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/aerolineas' element={<Aerolineas />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes