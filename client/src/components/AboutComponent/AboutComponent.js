import React, {useEffect} from 'react';
import "./aboutComp.css";
import Me from "./me.png"
import Linked from "./linked.png";
import GitHubLink from "./git.png";
import { useLocation } from "react-router-dom";

function AboutComponent() {

    var { pathname } = useLocation()
    useEffect(() => {
        if (pathname = "/about")window.scrollTo(0,0)
    }, [])

    return (
        <div className="mainAboutDiv">
            <div className="aboutDiv">
                <p className="aboutTitle">About Us</p>
                <p className="aboutDescriptionTitle">WebCanvas Development was founded in 2021 by Anthony Parrino.</p>
                <br/>
                <p className="aboutDescription">My journey began years ago when I realized how bad I needed a website to sell my oil paintings. I tried a few of the no coding involved 3rd party sites to build it..but none of them felt as if I was using the power of the internet to its fullest potential. It was decent but not exactly what I wanted out of a true born web application to represent me and my art, so I decided to learn software development. Thousands of hours, high paced schooling and a few gray hairs later, I can offically say that I am now able to not only build that website, but ANY website for ANYone. </p>
                <p className="aboutDescription">At WebCanvas we focus on understanding who you are as our client and what your industry expects out of you so we can meet the needs of your client's user experience. Our goal is to help make sure that you are as equipped as possible with your online presence to ensure that your clients will choose you.</p>
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
