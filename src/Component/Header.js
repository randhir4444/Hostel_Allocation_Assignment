import React from 'react'
import Logo from '../Images/logo.png';

function Header() {
    return (
        <div style={{border:"1px solid black"}}>
            <img src={Logo} alt="" />                
        </div>
    )
}

export default Header;
