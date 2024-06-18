import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
            <div className='flex items-center'>
                
                <Link to="/" >
                <img className='m-1p-2 size-12' src="src/assets/kbalogo.png" alt="logo image" />
                </Link>
            </div>
            <div className='flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-5 md:space-x-10'>
                <Link to="/" className='hover:text-purple-700'>Home</Link>
                <Link to="/courses" className='hover:text-purple-700'>Courses</Link>
                <Link to="/contact" className='hover:text-purple-700'>Contact Us</Link>
            </div>
        </div>
    );
}

export default Navbar;
