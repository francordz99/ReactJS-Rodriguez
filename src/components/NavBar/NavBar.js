import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget.js"
import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3 className="Title">Turbo Center</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/intercooler`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Intercoolers</NavLink>
                <NavLink to={`/category/inyeccion`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Inyeccion</NavLink>
                <NavLink to={`/category/turbo`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Turbos</NavLink>
                <NavLink to={`/category/instruments`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Instrumentos</NavLink>
                <NavLink to={`/category/kits`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Kits</NavLink>
                <NavLink to={`/category/tires`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cubiertas</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
