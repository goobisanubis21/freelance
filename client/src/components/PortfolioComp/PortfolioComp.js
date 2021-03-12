import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import "./portfolioComp.css";
import ArtImg from "../HomeComp/artImg2.png";
import AdImg from "../HomeComp/adImg2.png";
import Hang from "../HomeComp/handout.png";
import Brain from "../HomeComp/brain.png";
import Weather from "../HomeComp/weather.png";
import ReactLogo from "../HomeComp/reactlogo.png";
import Html from "../HomeComp/htmllogo.png";
import JS from "../HomeComp/jslogo.png";
import NodeLogo from "../HomeComp/nodelogo.png";
import MongoLogo from "../HomeComp/mongologo.png";
import CSSLogo from "../HomeComp/csslogo.png";

function PortfolioComp() {

    var { pathname } = useLocation()
    useEffect(() => {
        if (pathname = "/portfolio")window.scrollTo(0,0)
    }, [])

    return (
        <div>
            <div className="mainPortfolioDiv">
                <div className="portfolioHeader">
                    <p>Portfolio</p>
                    <div className="portfolioHeaderText">Click On The Images To See Our Websites!</div>
                </div>
                <div className="cardRows">
                    <div className="card mainCard">
                        <div className="card-body">
                        <div className="logoImageDiv">
                                <img className="logoImages" src={ReactLogo} alt="react"></img>
                                <img className="logoImages" src={Html} alt="html"></img>
                                <img className="logoImages" src={JS} alt="js"></img>
                                <img className="logoImages" src={CSSLogo} alt="css"></img>
                                <img className="logoImages" src={NodeLogo} alt="node"></img>
                                <img className="logoImages" src={MongoLogo} alt="mongo"></img>
                            </div>
                            <p className="portfolioTitle">Artist E-Commerce</p>
                            <a href="https://morgs-art.herokuapp.com"><img src={ArtImg} alt="Art Img"></img></a>
                            <p className="projectDescription">Morgan Danton's amazing artwork will soon be displayed to the world thanks to WebCanvas's newly developed website created to specifically meet the upcoming artist's needs. Her site allows a user to view items, contact her via email and purchase any item on the website using the npm package known as stripe.</p><span className="launchingSoon">Launching soon!</span>
                            
                        </div>
                    </div>
                    <div className="card mainCard">
                        <div className="card-body">
                        <div className="logoImageDiv">
                                <img className="logoImages" src={ReactLogo} alt="react"></img>
                                <img className="logoImages" src={Html} alt="html"></img>
                                <img className="logoImages" src={JS} alt="js"></img>
                                <img className="logoImages" src={CSSLogo} alt="css"></img>
                            </div>
                            <p className="portfolioTitle">Annuity Ad</p>
                            <a href="https://frozen-badlands-43527.herokuapp.com/"><img src={AdImg} alt="Ad Img"></img></a>
                            <p className="projectDescription">The well known team in the Financial world known as Abrahamsen Financial Group trusted WebCanvas Development in the creation of their single page website. Used for ads, the first thing a potential client of theirs will be greeted with is the expert design and development of our clean and polished website to help ensure the success of closing a deal.</p>
                            
                        </div>
                    </div>
                </div>

                <div className="cardRows">
                    <div className="card mainCard">
                        <div className="card-body">
                        <div className="logoImageDiv">
                                <img className="logoImages" src={Html} alt="html"></img>
                                <img className="logoImages" src={JS} alt="js"></img>
                                <img className="logoImages" src={CSSLogo} alt="css"></img>
                                <img className="logoImages" src={NodeLogo} alt="node"></img>
                                <img className="logoImages" src={MongoLogo} alt="mongo"></img>
                            </div>
                            <p className="portfolioTitle">Hangd Out</p>
                            <a href="https://projectnumtwo2.herokuapp.com/login"><img src={Hang} alt="Hang Man"></img></a>
                            <p className="projectDescription">HANGDOUT is a revolutionary way to play, collaborate, and learn alongside your peers! We have implemented words derived from the Scholastic Aptitude Test in our hang man game which will allow the user to familiarize themselves with the word stack. All game scores will be stored in a leaderboard which they can keep track of. The leaderboards incorporate a ranking system that lets individuals compete. The vocabulary words have been strategically selected to engage our users of all age groups, especially those who are preparing to take their Scholastic Aptitude Test (SAT).</p>
                            
                        </div>
                    </div>
                    <div className="card mainCard">
                        <div className="card-body">
                        <div className="logoImageDiv">
                                <img className="logoImages" src={ReactLogo} alt="react"></img>
                                <img className="logoImages" src={Html} alt="html"></img>
                                <img className="logoImages" src={JS} alt="js"></img>
                                <img className="logoImages" src={CSSLogo} alt="css"></img>
                                <img className="logoImages" src={NodeLogo} alt="node"></img>
                                <img className="logoImages" src={MongoLogo} alt="mongo"></img>
                            </div>
                            <p className="portfolioTitle">Brain Fart</p>
                            <a href="https://rocky-lake-93888.herokuapp.com/"><img src={Brain} alt="Brain Fart"></img></a>
                            <p className="projectDescription">Brain Fart is a quiz application for users of all ages. Whether you are just looking to sharpen up the mind or studying for a test under certain topics, this website will help you attain that goal. It requires a user to sign up and log in, take a randomly generated quiz, or create your very own quiz for other users to take. Using MongoDB to store all of your data, this MERN application is something you can get stuck on for hours.</p>
                            
                        </div>
                    </div>
                </div>

                <div className="cardRows">
                    <div className="card mainCard">
                        <div className="card-body">
                        <div className="logoImageDiv">
                                <img className="logoImages" src={Html} alt="html"></img>
                                <img className="logoImages" src={JS} alt="js"></img>
                                <img className="logoImages" src={CSSLogo} alt="css"></img>
                                <img className="logoImages" src={NodeLogo} alt="node"></img>
                            </div>
                            <p className="portfolioTitle">Weathering the Storm</p>
                            <a href="https://goobisanubis21.github.io/weather/"><img src={Weather} alt="Weather App"></img></a>
                            <p className="projectDescription">Weathing the Storm was design to give a user friendly and simple experience to check the weather conditions in any searched area. Upon searching a certain area which gets displayed, the app allows a user to see the current date, temp in Fahrenheit, humidity, wind speed and UV index. It also allows user to see the 5 day forecast for the searched area. All searches are prepended into a search history list that appears beneath the search bar which allows a user to click on any old searches to quickly view all of the weather information.</p>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PortfolioComp
