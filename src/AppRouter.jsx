import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './Add'
import App from './App'
import Edit from './Edit'

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/create' element={<Add />} />
                    <Route path='/update/:id' element={<Edit />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
