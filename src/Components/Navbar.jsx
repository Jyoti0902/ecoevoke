import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsBagHeart } from "react-icons/bs";
import '../ComponentsCSS/Navbar.css'
import logo from '../Assests/logo-white.png'


const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <div className="nav-options">
                    <div className="nav-option">HOME<RiArrowDropDownLine /></div>
                    <div className="nav-option">SHOP<RiArrowDropDownLine /></div>
                    <div className="nav-option">PRODUCT<RiArrowDropDownLine /></div>
                    <div className="nav-option">BLOG<RiArrowDropDownLine /></div>
                    <div className="nav-option">PAGE<RiArrowDropDownLine /></div>
                </div>
                <div className="main-logo-container">
                    <img className='main-logo' src={logo} alt="logo" />
                    </div>
                <div className="nav-icons">
                    <FaSearch className='navicon' />
                    <FaRegUser className='navicon' />
                    <FaRegHeart className='navicon' />
                    <BsBagHeart className='navicon' />
                </div>
            </div>
        </>
    )
}

export default Navbar