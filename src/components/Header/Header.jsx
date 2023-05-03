import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaBeer } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Chef</a></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Barurchi King
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Chef</a></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar" title={user.displayName}>
                            <div className="w-10 rounded-full">
                                <img src="https://randomuser.me/api/portraits/men/44.jpg" />
                            </div>
                        </label>
                    }
                    <a className="btn btn-ghost">Login</a>
                    <a className="btn btn-ghost">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Header;