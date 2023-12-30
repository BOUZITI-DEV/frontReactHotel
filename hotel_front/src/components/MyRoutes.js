import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Ville } from './Ville';
import { Hotel } from './Hotel';
import { Chambre } from './Chambre';
import { Reservation } from './Reservation';

export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Reservation />} />
            <Route path="/villes" element={<Ville />} />
            <Route path="/hotels" element={<Hotel />} />
            <Route path="/chambres" element={<Chambre />} />
            <Route path="/reservations" element={<Reservation />} />
        </Routes>
    )
}
