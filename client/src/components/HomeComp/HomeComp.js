import React, { useEffect } from 'react';
import "./homecomp.css";
import Logo from "./webCanvasLogo.png";
import ArtImg from "./artImg2.png";
import AdImg from "./adImg2.png";
import { Link, useLocation } from "react-router-dom";
import Hang from "./handout.png";
import Brain from "./brain.png";
import Weather from "./weather.png";
import AboutPhoto from "./aboutPhoto.jpg";
import LearnMore from "./learnmore.jpg";
import ReactLogo from "./reactlogo.png";
import Html from "./htmllogo.png";
import JS from "./jslogo.png";
import NodeLogo from "./nodelogo.png";
import MongoLogo from "./mongologo.png";
import CSSLogo from "./csslogo.png";
import emailjs from "emailjs-com";
import GC from "./gc.png"
import FBAD from "./fbad.png"
import FBIN from "./fbinsta.webp"



function HomeComp() {

    var { pathname } = useLocation()
    useEffect(() => {
        if (pathname = "/") window.scrollTo(0, 0)
    }, [])

    function handleBtn() {
        let first_name = document.getElementById("first_name")
        let last_name = document.getElementById("last_name")
        let email = document.getElementById("email")
        let phone = document.getElementById("phone_number")
        let description = document.getElementById("description")
        const buttonn = document.getElementById("sendEmailBtn")


        if (first_name.value && last_name.value && email.value && phone.value && description.value) {
            buttonn.disabled = false
        } else if (first_name.value || last_name.value || email.value || phone.value || description.value === null) {
            buttonn.disabled = true
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_ID1, process.env.REACT_APP_ID2, e.target, process.env.REACT_APP_ID3)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setTimeout(() => {
            window.location.href = "/thankyou"
        }, 500);
    }

    return (
        <div className="homeCompMainDiv">
            <div className="companyTitleDiv">
                <p><img className="homeLogo" src={Logo} alt="WCD"></img></p>
                <p className="companyTitle text-focus-in"><span className="firstLetter">Web</span>Canvas <span className="firstLetter">Development</span></p>
                <p className="companyUnderText tracking-in-contract-bck-bottom">
                    - Websites - Mobile Responsive Applications - Marketing -
                </p>
            </div>
            <div className="helpYou">
                <p className="helpYouP">We are here to help you succeed with our successful marketing techniques. We also design/develop websites catering to your exact requirements.</p>
            </div>
            <div className="whyEstimateBlock">
                <div className="card whyDiv">
                    <div className="card-body">
                        <h1><strong className="ourWhy">WebCanvas</strong></h1>
                        <p className="ourWhy">~</p>
                        <p className="believe">We believe that quality and design is a number one priority when making a difference. Our company was started based upon that belief, greatness is born by what sets you apart.</p>
                        <p className="ourWhy">~</p>
                    </div>
                </div>

                <div className="card whyDiv">
                    <div className="card-body">
                        <h2><strong>Importance</strong></h2>
                        <p>97% of all purchase decisions start with a simple search of your website. Without a fully functioning properly developed website to demonstrate your professionalism, you or your company is only relevant to 7% of the buying market.</p>
                    </div>
                </div>
                <div className="card whyDiv">
                    <div className="card-body">
                        <h2><strong>Marketing</strong></h2>
                        <p>Our marketing team can provide your business with the advertising you need. Using successful Facebook Marketing techniques proven by our clients we are able to increase your lead conversions which in turn will increase your sales and exposure. <Link to="/marketing">Learn More About Marketing</Link></p>
                    </div>
                </div>
                <form onSubmit={sendEmail} onChange={handleBtn}>
                    <div className="card estimate">
                        <div className="card-body">
                            <h3>Get a Free Estimate</h3>
                            <label className="required">First Name</label>
                            <input id="first_name" type="text" name="first_name" placeholder="First Name" required></input>
                            <label className="required">Last Name</label>
                            <input id="last_name" type="text" name="last_name" placeholder="Last Name" required></input>
                            <label className="required">Email</label>
                            <input id="email" type="email" name="email" placeholder="YourEmail@example.com" required></input>
                            <label>Company Name</label>
                            <input id="company" type="text" name="company" placeholder="Company Name"></input>
                            <label className="required">Phone Number</label>
                            <input id="phone_number" type="text" name="phone_number" placeholder="Phone Number" required></input>
                            <label className="required">Description</label>
                            <textarea id="description" type="text" name="description" placeholder="Brief Description of what you need us to provide. Website? Marketing? Logo? All of the above?" required></textarea>
                            <button id="sendEmailBtn" className="estimateBtn" type="submit">Submit</button>
                            <p>Your Data Will Never Be Shared or Public.</p>
                        </div>
                    </div>
                </form>
            </div>

            <div className="fbadMainDiv">
                <div className="fbadImgDiv">
                    <img className="fbad" src={FBAD} alt="fbad"></img>
                </div>
                <div className="fbadtextdiv">
                    <p className="fbadtextTitle">Social Media Marketing</p>
                    <br />
                    <p className="fbadtexttext">Accelerate your revenue with proven Facebook advertising strategies.</p>
                    <div className="unolist">
                        <p>o High Click Rates</p>
                        <p>o Heavy Traffic</p>
                        <p>o Amazing Conversions</p>
                        <p>o SALES</p>
                    </div>
                </div>
            </div>

            <div className="increase">
                <p> - </p>
                <p>Increase your success with the help of WebCanvas. We build you full websites, we build you landing pages, we advertise your business, we get you traffic, we get you leads, we are affordable and we get you SALES.</p>
                <p> - </p>
                <p>Everything you need to grow your business is within your grasp</p>
                <p> - </p>
                <p>We take advantage of Facebook Pixel so you can keep track of everything. <Link to="/contact"> Learn more about Pixel!</Link></p>
                <p> - </p>
            </div>

            <div>
                <img className="fbin" src={FBIN} alt="fbin"></img>
            </div>

            <div className="increase">
                <p> - </p>
                <p>Ready to start your dream project? What about that online business or a much needed update? Now is the time!</p>
                <p> - </p>
                <p>We can build anything and market it too.</p>
                <p> - </p>
                <p>Our goal is to get you to the point of sitting back watching your site and ads run themselves. We can and will get you there like we have done for our clients before!</p>
                <p> - </p>
            </div>

            <div className="card-body testimonials">
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="5000">
                            <div>
                                <img className="artImg" src={AdImg} alt="ad"></img>
                                <p className="testiText">"I recently worked on a project with Web Canvas Development. I have dealt with many web developers over the years, large companies, small companies, expensive and cheap. I had the pleasure of working with the founder, Anthony and was truly amazed at the speed and professionalism of him and the rest of his company. I had a very specific, niche, tedious job for him and they knocked it out of the park. What was originally assumed to be a short term project has very quickly turned into an ongoing collaboration for the foreseeable future. Anthony and his team helped me build a highly profitable web based strategy as well as an incredible website I couldn't be happier with.  I'd be happy to speak to anyone on the fence about working with Web Canvas Development, they have endless knowledge and ability and I see the value in what they do.  I would recommend it to anyone looking to upgrade their online presence or people just getting started".</p>
                                <p>- Roy J. Labaton</p>
                                <p>Senior Vice President</p>
                                <p>Abrahamsen Financial Group</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="5000">
                            <div>
                                <img className="artImg" src={GC} alt="ad"></img>
                                <p className="testiText">"I own an up and coming clothing line and with the help of WebCanvas Dev's success with marketing our brand and me personally for my graphic design work, we achieved a sales growth of over 300%!! in less than a few months. Needless to say we are sticking with this company for the foreseeable future".</p>
                                <p>- Gerard Carnevale</p>
                                <p>Founder GC Studios</p>
                                <p>Freelance Graphic Designer</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="5000">
                            <div>
                                <img className="artImg" src={ArtImg} alt="arts"></img>
                                <p className="testiText">"This company is the best! They created my entire art website for a very affordable price and it was everything I needed and more. I absolutely highly recommend WebCanvas development to anyone who needs a website big or small!</p>
                                <p>- Morgan Arts</p>
                                <p>Oil Painter</p>
                            </div>
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

            <div className="allCards">
                <div className="card aboutCar portCard">
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
                <div className="card aboutCar abootCard">
                    <div className="ourProjectsLink">
                        <Link to="/web-services">
                            Learn More
                    </Link>
                    </div>
                    <div className="card-body">
                        <img className="d-block w-100" src={LearnMore} alt="about"></img>
                    </div>
                </div>
            </div>
            <div className="stackLogos">
                <div>
                    <a href="https://reactjs.org/"><img className="reactImg" src={ReactLogo} alt="ReactLogo"></img></a>
                </div>
                <div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"><img className="htmlImg" src={Html} alt="Html"></img></a>
                </div>
                <div>
                    <a href="https://www.javascript.com/"><img className="jsImg" src={JS} alt="JS"></img></a>
                </div>
                <div>
                    <a href="https://www.w3schools.com/css/"><img className="cssImg" src={CSSLogo} alt="CSSLogo"></img></a>
                </div>
                <div>
                    <a href="https://nodejs.org/en/about/"><img src={NodeLogo} alt="NodeLogo"></img></a>
                </div>
                <div>
                    <a href="http://mongodb.github.io/node-mongodb-native/api-articles/nodekoarticle1.html"><img src={MongoLogo} alt="MongoLogo"></img></a>
                </div>
            </div>
        </div>
    )
}

export default HomeComp
