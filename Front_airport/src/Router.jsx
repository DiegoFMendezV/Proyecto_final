import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Home from './Pages/Home'
import Vuelo from './Pages/Vuelo'
 
function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<Vuelo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes