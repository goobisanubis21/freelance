import React from 'react';
import "./homecomp.css";
import Logo from "./webCanvasLogo.png";
import ArtImg from "./artImg2.png";
import AdImg from "./adImg2.png";
import { Link } from "react-router-dom";
import Hang from "./handout.png";
import Brain from "./brain.png";
import Weather from "./weather.png";
import AboutPhoto from "./aboutPhoto.jpg"

function HomeComp() {
    return (
        <div className="homeCompMainDiv">
            <div className="companyTitleDiv">
                <p><img className="homeLogo" src={Logo} alt="WCD"></img></p>
                <p className="companyTitle text-focus-in"><span className="firstLetter">Web</span>Canvas <span className="firstLetter">Development</span></p>
                <p className="companyUnderText tracking-in-contract-bck-bottom">
                    Full Stack Web and Mobile Responsive Applications
                </p>
            </div>
            <div className="whyEstimateBlock">
                <div className="card whyDiv">
                    <div className="card-body">
                        <h2><strong>Is a Website a Necessity?</strong></h2>
                        <p>97% of all purchase decisions start with a simple search of your website. Without a fully functioning properly developed website to demonstrate your professionalism, you or your company is only relevant to 7% of the buying market.</p>
                    </div>
                </div>
                <div className="card whyDiv">
                    <div className="card-body">
                        <h2><strong>Why WebCanvas</strong></h2>
                        <p>We provide an affordable Full Stack Web Application Development Service that is mobile responsive and worthy of representing you and your business. We are avaliable for you 24 hours a day, 7 days a week to meet the requirements that, according to the market, you desprately need to ensure you stay on the path of success. WebCanvas Development will bring your vision into fruition.</p>
                    </div>
                </div>
                <form>
                    <div className="card estimate">
                        <div className="card-body">
                            <h5>Get a Free Estimate</h5>
                            <label className="required">First Name</label>
                            <input type="text" name="first_name" placeholder="First Name" required></input>
                            <label className="required">Last Name</label>
                            <input type="text" name="last_name" placeholder="Last Name" required></input>
                            <label className="required">Email</label>
                            <input type="email" name="email" placeholder="YourEmail@example.com" required></input>
                            <label>Company Name</label>
                            <input type="text" name="company" placeholder="Company Name"></input>
                            <label className="required">Phone Number</label>
                            <input type="text" name="phone_number" placeholder="Phone Number" required></input>
                            <label className="required">Description</label>
                            <textarea type="text" name="description" placeholder="Brief Description of your Website" required></textarea>
                            <button className="estimateBtn" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="newJersey">
                <p>Located in Belmar Beach and we service anywhere in The Garden State</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/New_Jersey_Counties.svg/1200px-New_Jersey_Counties.svg.png" alt="New Jersey"></img>
            </div>
            <div className="testimonials">
                <div>
                    <img className="artImg" src={ArtImg} alt="arts"></img>
                    <p>"This company is the best! They created my entire art website for a very affordable price and it was everything I needed and more. I absolutely highly recommend WebCanvas development to anyone who needs a website big or small!</p>
                    <p>- Morgan Arts</p>
                </div>
                <div>
                    <img className="artImg" src={AdImg} alt="ad"></img>
                    <p>"I recently worked on a project with Web Canvas Development. I have dealt with many web developers over the years, large companies, small companies, expensive and cheap. I had the pleasure of working with the founder, Anthony and was truly amazed at the speed and professionalism of him and the rest of his company. I had a very specific, niche, tedious job for him and they knocked it out of the park. What was originally assumed to be a short term project has very quickly turned into an ongoing collaboration for the foreseeable future. Anthony and his team helped me build a highly profitable web based strategy as well as an incredible website I couldn't be happier with.  I'd be happy to speak to anyone on the fence about working with Web Canvas Development, they have endless knowledge and ability and I see the value in what they do.  I would recommend it to anyone looking to upgrade their online presence or people just getting started".</p>
                    <p>- Roy J. Labaton</p>
                    <p>Senior Vice President</p>
                    <p>Abrahamsen Financial Group</p>
                </div>
            </div>
            <div className="allCards">
                <div className="card aboutCar">
                <div className="ourProjectsLink">
                        <Link to="/about">
                            About Us
                    </Link>
                    </div>
                    <div className="card-body">
                        <img className="d-block w-100" src={AboutPhoto} alt="about"></img>
                    </div>
                </div>
                <div className="card projectCar">
                    <div className="ourProjectsLink">
                        <Link to="/portfolio">
                            See Our Projects
                    </Link>
                    </div>
                    <div className="card-body">
                        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval="5000">
                                    <img src={ArtImg} className="d-block w-100" alt="Art"></img>
                                </div>
                                <div className="carousel-item" data-interval="5000">
                                    <img src={AdImg} className="d-block w-100" alt="Ad"></img>
                                </div>
                                <div className="carousel-item" data-interval="5000">
                                    <img src={Hang} className="d-block w-100" alt="Hang"></img>
                                </div>
                                <div className="carousel-item" data-interval="5000">
                                    <img src={Brain} className="d-block w-100" alt="Brain"></img>
                                </div>
                                <div className="carousel-item" data-interval="5000">
                                    <img src={Weather} className="d-block w-100" alt="Weather"></img>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card webCar">
                    <div className="card-body">
                        web
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp
