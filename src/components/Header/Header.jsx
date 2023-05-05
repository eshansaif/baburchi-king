import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaBeer, FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const location = useLocation();

    // console.log(user);

    const handleLogout = () => {
        logout()
            .then((result) => {
                console.log("Logged out successfully");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                            <li><Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link></li>

                            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Baburchi King
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link></li>

                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <label tabIndex={0} className="btn btn-ghost btn-circle avatar" title={user?.displayName}>
                            <div className="w-10 rounded-full">

                                <img src={user?.photoURL} alt="" />

                            </div>
                        </label> :
                            <h1></h1>
                    }
                    {
                        user ? <button onClick={handleLogout} className="btn btn-ghost">Logout</button> : <Link to="/login" className="btn btn-ghost">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;