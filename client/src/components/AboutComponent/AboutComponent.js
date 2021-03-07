import React from 'react';
import "./aboutComp.css";
import Me from "./me.png"
import Linked from "./linked.png";
import GitHubLink from "./git.png";

function AboutComponent() {
    return (
        <div className="mainAboutDiv">
            <div className="aboutDiv">
                <p className="aboutTitle">About Us</p>
                <p className="aboutDescription">WebCanvas Development was founded in 2021 by Anthony Parrino, a Rutgers University Coding Bootcamp graduate. My coding journey began 3 years ago when I realized how bad I needed a website to sell my oil paintings. I tried a few of the no coding involved 3rd party sites to build my website with..but none of them felt as if i was using this power of the internet to its fullest potential. It was decent and close but not exactly what I wanted out of a true born web application to represent me and my art, so I decided to learn software development. </p>
                <img className="me" src={Me} alt="ceo"></img>
                <div className="gitLinkLinks">
                    <p><a href="https://github.com/goobisanubis21"><img className="git" src={GitHubLink} alt="Git"></img></a></p>
                    <p><a href="https://www.linkedin.com/in/anthony-parrino-887b391b3/"><img className="linked" src={Linked} alt="LinkedIn"></img></a></p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
