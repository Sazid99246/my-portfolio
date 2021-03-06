import React from 'react';
const Header = () => {
    const navContent = <>
        <li><a href='home#projects'>Projects</a></li>
        <li><a href='home#contact'>Contact Me</a></li>
        <a href="https://drive.google.com/file/d/1FGB8yt5VLUZdY_tu_szFQsKqZnMqCDxI/view?usp=sharing" download target="_blank" rel="noreferrer">
            <button className="btn btn-primary">Download Resume</button>
        </a>
    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navContent}
                    </ul>
                </div>
                <a href="#home" className="btn btn-ghost normal-case text-xl">Sheikh MD Sazidul Islam</a>
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