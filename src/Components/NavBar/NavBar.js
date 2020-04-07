import React from 'react';

const NavBar = () => {
    return (
        <section className='nav-bar'>
            <h1 className='site-heading'></h1>
            <img 
            alt="icon-image"
            className="icon" 
            src="https://www.flaticon.com/authors/freepik"
            />
            <div>
            <button>
                <p>login</p>
            </button>
            <h3>User Name</h3>
            </div>
        </section>

    )
}


export default NavBar;