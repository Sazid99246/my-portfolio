import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const navContent = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/home#projects'>Projects</Link></li>
        <li><Link to='/'>Contact Me</Link></li>
        <a href="https://drive.google.com/file/d/1FGB8yt5VLUZdY_tu_szFQsKqZnMqCDxI/view?usp=sharing" download target="_blank" rel="noreferrer">
            <button className="btn btn-primary">Download Resume</button>
        </a>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navContent}
                    </ul>
                </div>
                <button className="btn btn-ghost normal-case text-xl">Sheikh MD Sazidul Islam</button>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navContent}
                </ul>
            </div>
        </div>
    );
};

export default Header;