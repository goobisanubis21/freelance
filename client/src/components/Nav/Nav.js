import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to ="/"><div className="navbar-brand" href="#">Company Name</div></Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to ="/"><div className="nav-link">Home</div></Link>
                        <Link to="/about"><div className="nav-link">About</div></Link>
                        <Link to="/web-services"><div className="nav-link">Web Services</div></Link>
                        <Link to="/portfolio"><div className="nav-link">Portfolio</div></Link>
                        <Link to="/contact"><div className="nav-link">Contact</div></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
