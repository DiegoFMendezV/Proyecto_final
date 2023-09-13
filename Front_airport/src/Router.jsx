import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Home from './Pages/Home'
import Vuelos from './Pages/Vuelos'
 
function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<Vuelos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes