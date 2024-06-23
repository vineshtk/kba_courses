
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const linkStyle = ({ isActive }) => isActive ? 'bg-purple-400 border-b p-1 rounded-md text-purple-950' : ' border-b p-1 rounded-md hover:text-purple-600'
    
    return (
        <div className='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
            <div className='flex items-center'>

                <Link to="/" >
                    <img className='m-1p-2 size-12' src="/src/assets/kbalogo.png" alt="logo" />
                </Link>
            </div>
            <div className='flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-5 md:space-x-10'>
                <NavLink to="/" className={linkStyle}>Home</NavLink>
                <NavLink to="/courses" className={linkStyle}>Courses</NavLink>
                <NavLink to="/contact" className={linkStyle}>Contact Us</NavLink>
                <NavLink to="/add-course" className={linkStyle}>Add Course</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
