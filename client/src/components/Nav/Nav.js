import React from 'react';
import "./nav.css";
import { Link } from "react-router-dom";
import Logo from "./webCanvasLogo.png"

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navMainDiv">
                <Link to="/"><div className="navbar-brand"><img className="logo" src={Logo} alt="WCD"></img></div></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav navBarLinks">
                        <Link to="/"><div className="nav-link" title="Home Page">Home</div></Link>
                        <Link to="/web-services"><div className="nav-link" title="What We Offer">Web Services</div></Link>
                        <Link to ="/marketing"><div className="nav-link" title="Advertising">Marketing Services</div></Link>
                        <Link to="/portfolio"><div className="nav-link" title="Our Projects">Portfolio</div></Link>
                        <Link to="/about"><div className="nav-link" title="About Us">About</div></Link>
                        <Link to="/contact"><div className="nav-link" title="Contact Us">Contact</div></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
