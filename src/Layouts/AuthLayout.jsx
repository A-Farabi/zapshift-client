import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import authimg from '../assets/Mislenious/authImage.png'

function AuthLayout() {
    return (
        <div className='text-black'>
            <NavLink to="/">
                <a className="btn btn-ghost text-xl">
                    <img src="/src/assets/logo.png" alt="" /> ZapShift
                </a>
            </NavLink>
            <div className='grid grid-cols-2 min-h-screen grid md:grid-cols-2'>
                <div className='left-side'>
                    <Outlet></Outlet>
                </div>
                <div className='right-side'>
                    <img src={authimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
