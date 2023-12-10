import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Appointment from './Appointment/Appointment'
import Doctors from './Doctors/Doctors'

export default function index() {
    return (
        <div>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='appointment' element={<Appointment />} />
                    <Route path='doctors-details' element={<Doctors />} />
                </Route>
            </Routes>
        </div>
    )
}
