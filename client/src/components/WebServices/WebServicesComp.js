import React, { useEffect } from 'react';
import "./webServices.css";
import ReactLogo from "../HomeComp/reactlogo.png";
import QuestionMark from "./questionmark.png";
import { Link, useLocation } from "react-router-dom";
import Diss from "./diss.png";
import Layout from "./layout.png";
import Approval from "./approval.png";
import CodingImg from "./coding.png";
import Review from "./review.png";
import Debug from "./debug.png";
import Launch from "./launch.png";

function WebServicesComp() {

    var { pathname } = useLocation()
    useEffect(() => {
        if (pathname = "/web-services") window.scrollTo(0, 0)
    }, [])

    return (
        <div className="webMainDiv">
            <div className="mainWebDiv">
                <p className="webTitle">Web Services</p>
                <p className="webTitleUnderText">Creating you a powerful online presence is as important to you as it is to us</p>
            </div>
            <div className="whatWeDoDiv">
                <p className="whatWeDoTitle">What We Do</p>
                <div className="whatWeDoText">
                    <img className="questionLogo" src={QuestionMark} alt="questionMarkLogo"></img>
                    <p className="whatWeDoTitle">Websites</p>
                    <p>A good developer is hard to come by, thats just a plain old life fact.. but you landed here so look no further, WebCanvas Development has your virtual back. Whether it's a simple single page website for a portfilio, or a long term mutli-page full stack website that needs a database, user authentication and payment methods, we have you covered. We will work with you throughout the entire development process, sending you weekly updates or updates upon request. Everything we create for you will be mobile responsive. What this means is, whether you are on a computer, laptop, Ipad or cell phone, your website will be fit to the screen size that it is being run on automatically thanks to our unmatched design skills.</p>
                    <p>We also offer, for a monthly fee, the choice to allow us to maintain your website so you never have to look at a single line of code. We can debug, update and add anything at anytime if you choose to join our maintenance program. WebCanvas specializes in HTML, CSS, JavaScript, Node.js MongoDB, MERN Stack, and of course React.Js.<Link to="/contact"> Get a quote</Link></p>
                    <p className="whatWeDoTitle1">Marketing</p>
                    <p>So say you already have a website.. or maybe we designed one for you and now you need some high quality expert marketing to get your name out there. Well we specialize in just that. We use a monster of a company you may have heard of, the giant known as Facebook. Facebook with its over 2 billion users is an ocean of potential traffic and customers we can scoop up for you. Our marketing gurus use advanced tactics to pinpoint your audience and their interests to gain trust and eventually traffic. On average a person needs to see an ad 4 to 7 times before deciding to click or buy, our goal is to get your ads in front of as many people as possible as many times as possible. We take a lot of pride in our success with past and current clients when it comes to our advertising achievements and we would love to help you.<Link to="/contact"> Get a quote</Link></p>
                    <br/>
                    <div className="whatWeOfferDiv">
                        <p className="whatWeOffer">What We Offer</p>
                        <p className="whatWeOfferText">- Unique Logo Design -</p>
                        <p className="whatWeOfferText">- FaceBook Advertising -</p>
                        <p className="whatWeOfferText">- Website Maintenance -</p>
                        <p className="whatWeOfferText">- WebSite Design -</p>
                        <p className="websiteEst"><Link to="/contact">Get a FREE Estimate</Link></p>
                    </div>
                </div>
                <p className="whatWeDoTitle">What is React?</p>
                <div className="whatWeDoText">
                    <img className="webReactLogo" src={ReactLogo} alt="reactLogo"></img>
                    <p>React is an open-source JavaScript library developed by Facebook back in 2013 for creating user interfaces. The current updated version of React.js is 16.X, released in 2017. The framework is the best option for developers to design modern single-page applications of any scale and size. By using this technology, developers can easily manage data and content of any website. Fortune 500 companies are running their websites on React.js, such as Netflix, Facebook, Instagram, Uber, etc just to name a few.</p>
                    <p>According to a survey conducted by StackOverflow Developer Survey Results 2019 among the world’s top-notch software developers, React.js was ranked number 1 in ‘Most Loved and Wanted Web Frameworks.’ Based on the same survey results, React.js rated number 1 on awareness, interest, and satisfaction ratio in many experts.</p>
                </div>
                <p className="ourProcessTitle">Our Process</p>
                <div className="ourProcessInfo">
                    <div className="whatWeDoTitle">
                        <p>Discussion</p>
                        <img className="diss" src={Diss} alt="diss"></img>
                        <p className="ourProcessText">Detailed talk whether in person or on the phone about what you are looking for.</p>
                    </div>
                    <div className="whatWeDoTitle">
                        <p>Layout</p>
                        <img className="layoutImg" src={Layout} alt="layout"></img>
                        <p className="ourProcessText">Our expert designers with a combined 15+ years of experience in Art will create a unique layout for your website.</p>
                    </div>
                    <div className="whatWeDoTitle">
                        <p>Approval</p>
                        <img className="approvalImg" src={Approval} alt="approval"></img>
                        <p className="ourProcessText">We then present you with your layout for approval or any changes you would like us to make.</p>
                    </div>
                </div>
                <div className="ourProcessInfo">
                    <div className="whatWeDoTitle">
                        <p>Coding</p>
                        <img className="codingImg" src={CodingImg} alt="CodingImg"></img>
                        <p className="ourProcessText">Once the layout is exactly up to par, this is where the magic happens and we code your entire website in React JavaScript from scratch.</p>
                    </div>
                    <div className="whatWeDoTitle">
                        <p>Review</p>
                        <img className="reviewImg" src={Review} alt="Review"></img>
                        <p className="ourProcessText">After the coding process is complete we go over in detail the functionality of the website and assure that it is ready for testing.</p>
                    </div>
                    <div className="whatWeDoTitle">
                        <p>Debug</p>
                        <img className="debugImg" src={Debug} alt="Debug"></img>
                        <p className="ourProcessText">We test every aspect of your website and solve any issues that may occur in high stress environments.</p>
                    </div>
                </div>
                <div className="whatWeDoTitle">
                    <p>Launch</p>
                    <img className="launchImg" src={Launch} alt="Launch"></img>
                    <p className="ourProcessText">Finally, your personal website is polished and ready for launch. If you do not have a server of your own, we can provide you with a trusted high speed and reliable server that we use for our own webistes for a flat rate of only $10/month. This is then where marketing would come into play and the real fun starts!</p><p><Link to="/contact"> Get a quote</Link></p>
                </div>
                <br />
            </div>
        </div>
    )
}

export default WebServicesComp
