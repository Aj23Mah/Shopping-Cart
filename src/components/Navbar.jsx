import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/"> Shop </Link>
            <Link to="/cart"> <AiOutlineShoppingCart /> </Link>
        </div>
    </div>
  )
}