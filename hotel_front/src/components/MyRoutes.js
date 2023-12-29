import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Ville } from './Ville';

export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Ville />} />
            <Route path="/villes" element={<Ville />} />
        </Routes>
    )
}
