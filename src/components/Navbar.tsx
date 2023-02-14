import React from 'react'
import '../style/navbar.scss';

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className="navbar__title">Where in the world?</div>
            <button className='navbar__theme'>White Mode</button>
        </div>
    )
}

export default Navbar;
