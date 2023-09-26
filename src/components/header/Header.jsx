import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <Link to="/" className='logo'>
                <h1>TIK TOK</h1>
            </Link>


            
        </header>
    );
};

export default Header;