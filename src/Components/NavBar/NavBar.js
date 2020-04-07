import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
        <section className='nav-bar'>
            <h1 className='site-heading'>Rancid Tomatillos</h1>
            <img  
            alt="icon-image"
            className="icon" 
            src="https://www.flaticon.com/authors/freepik"
            />
            <div className='nav-loggin-div'>
            <button className='nav-loggin-btton'>
                <p>login</p>
            </button>
            <h4>User Name</h4>
            </div>
        </section>

    )
}


export default NavBar;