import React from 'react';
import "./webServices.css";
import ReactLogo from "../HomeComp/reactlogo.png";
import QuestionMark from "./questionmark.png";
import {Link} from "react-router-dom"

function WebServicesComp() {
    return (
        <div className="webMainDiv">
            <div className="mainWebDiv">
                <p className="webTitle">Our Web Services</p>
                <p className="webTitleUnderText">Creating you a powerful online presence is as important to you as it is to us</p>
            </div>
            <div className="whatWeDoDiv">
                <p className="whatWeDoTitle">What We Do</p>
                <div className="whatWeDoText">
                    <img className="questionLogo" src={QuestionMark} alt="questionMarkLogo"></img>
                    <p>Look no further, WebCanvas Development has your virtual back. Whether it's a simple single page website for a portfilio, or a long term mutli-page full stack website that needs a database, user authentication and payment methods, we have you covered. We will work with you throughout the entire development process, sending you weekly updates or updates upon request. Everything we create for you will be mobile responsive. What this means is, whether you are on a computer, laptop, Ipad or cell phone, your website will be fit to the screen size that it is being run on automatically thanks to our unmatched design skills.</p>
                    <p>We also offer, for a monthly fee, the choice to allow us to maintain your website so you never have to look at a single line of code. We can debug, update and add anything at anytime if you choose to join our maintenance program. WebCanvas specializes in HTML, CSS, JavaScript, Node.js MongoDB, MERN Stack, and of course React.Js.</p>
                    <p className="whatWeOffer">What We Offer</p>
                    <p>Unique Logo Design: Starting @ $100</p>
                    <p>FaceBook Advertising: Starting @ $200/month</p>
                    <p>Maintenance: Starting @ $300/month</p>
                    <p className="websiteEst">WebSites: <Link to="/contact">Get a FREE Estimate</Link></p>
                </div>
                <p className="whatWeDoTitle">What is React?</p>
                <div className="whatWeDoText">
                    <img className="webReactLogo" src={ReactLogo} alt="reactLogo"></img>
                    <p>React is an open-source JavaScript library developed by Facebook back in 2013 for creating user interfaces. The current updated version of React.js is 16.X, released in 2017. The framework is the best option for developers to design modern single-page applications of any scale and size. By using this technology, developers can easily manage data and content of any website. Fortune 500 companies are running their websites on React.js, such as Netflix, Facebook, Instagram, Uber, etc just to name a few.</p>
                    <p>According to a survey conducted by StackOverflow Developer Survey Results 2019 among the world’s top-notch software developers, React.js was ranked number 1 in ‘Most Loved and Wanted Web Frameworks.’ Based on the same survey results, React.js rated number 1 on awareness, interest, and satisfaction ratio in many experts.</p>
                </div>
                <p className="ourProcessTitle">Our Process</p>

            </div>
        </div>
    )
}

export default WebServicesComp
