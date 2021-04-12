import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./marketing.css";
import Gold from "./gold.png";
import Silver from "./silver.png";
import Bronze from "./bronze.png";
import emailjs from "emailjs-com";
import Doc from "./doctordentist.jpg";
import Finance from "./finance.jpg";
import Gym from "./gym.jpg";
import Online from "./onlinebus.webp";
import Realtor from "./realtor.jpg";
import Rest from "./restaurant.jpg";
import SmallBus from "./smallbus.jpg";
import StartUp from "./startup.png";

function MarketingComp() {

    var { pathname } = useLocation()
    useEffect(() => {
        if (pathname = "/marketing") window.scrollTo(0, 0)
    }, [])

    function bronze() {
        document.getElementById('bronze').scrollIntoView();
    }

    function silver() {
        document.getElementById('silver').scrollIntoView();
    }

    function gold() {
        document.getElementById('gold').scrollIntoView();
    }

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
            window.location.href="/thankyou"
        }, 500);
    }

    return (
        <div className="marketMainDiv">
            <div className="marketHeader">
                <p className="marketHeaderTitle">Marketing Services</p>
                <p className="marketHeaderText">Proven Growth for your Business</p>
            </div>
            <div className="fbAdsDiv">
                <h2>The WebCanvas Marketing Packages</h2>
                <br />
                <img onClick={bronze} className="fbAdsImg bronze" src={Bronze} alt="bronze"></img>
                <img onClick={silver} className="fbAdsImg silver" src={Silver} alt="silver"></img>
                <img onClick={gold} className="fbAdsImg gold" src={Gold} alt="gold"></img>
            </div>
            <form onSubmit={sendEmail} onChange={handleBtn}>
                    <div className="card marketEstimate">
                        <div className="card-body">
                            <h1>Get A Quote</h1>
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
                            <textarea id="description" type="text" name="description" placeholder="Package of Interest/Questions" required></textarea>
                            <button id="sendEmailBtn" className="estimateBtn" type="submit">Submit</button>
                            <p>Your Data Will Never Be Shared or Public.</p>
                        </div>
                    </div>
                </form>
            <div className="world">
                <p className="connect">Connect With Your Audience.</p>
                <p className="connWorld">Connect With The World.</p>
            </div>
            <div>
                <p className="marketingTitle">Our Strategy</p>
                <p className="marketingUnderTitle">Social Media Giant</p>
                <p className="marketingText">We use a monster of a company you may have heard of, the giant known as Facebook. Facebook with its over 2 billion users is an ocean of potential traffic and customers we can scoop up for you. Our marketing gurus use advanced tactics to pinpoint your audience and their interests to gain trust and eventually traffic. On average a person needs to see an ad 4 to 7 times before deciding to click or buy, our goal is to get your ads in front of as many people as possible as many times as possible. We take a lot of pride in our success with past and current clients when it comes to our advertising achievements and we would love to help you. Get your free quote today.</p>
                <h4 style={{textAlign:'center', marginBottom:'50px'}}>10s of Thousands of Ad spend Managed</h4>
            </div>
            <div className="moreInfoDivs">
                <div id="bronze" className="bronzeInfo">
                    <h2>Bronze Package</h2>
                    <p className="pageDeets">The bronze package is perfect if you have a small business or a quick venture that entails reaching the most amount of people for a smaller sized budget. It is our most afforable option. Starting at a low monthly fee we find the best daily spend that will suit your needs by using a guaranteed model that has created success with 100% of clients. For more information about the Bronze Package.</p>
                </div>
                <div id="silver" className="silverInfo">
                    <h2>Silver Package</h2>
                    <p className="pageDeets">The most popular option we offer is the Silver Package. Small, medium or large sized business will all benefit from the daily budgets of this strategy. You can expect a significant increase in daily traffic, leads and conversions for a balanced daily budget spread across muiltiple or a single AD set. For more information about the Silver Package.</p>
                </div>
                <div id="gold" className="goldInfo">
                    <h2>Gold Package</h2>
                    <p className="pageDeets">The gold package is a higher end, major increase concentrated strategy. There are virtually no limitations. You can expect to reach a guaranteed, thousands upon thousands of people per month taking full advange of compounding high budgets and expert level targetting concepts. We also offer a FREE landing page created entirely from scratch to suit the needs of your business saving you money and time. For more information about the Gold Package.</p>
                </div>
            </div>
            <div className="special">
                <h3 style={{fontFamily:'apple', fontSize:'40px', paddingTop:'20px'}}>We Specialize In</h3>
                <br/>
                <div className="specialImgDiv">
                    <div>
                        <img className="specialImg" src={Doc} alt="doctor/dentist"></img>
                        <p>Doctors and Dental Offices</p>
                    </div>
                    <div>
                        <img className="specialImg" src={Finance} alt="finance"></img>
                        <p>Financial Agencies</p>
                    </div>
                </div>
                <div className="specialImgDiv">
                    <div>
                        <img className="specialImg" src={Gym} alt="gym"></img>
                        <p>Gyms and Fitness</p>
                    </div>
                    <div>
                        <img className="specialImg" src={Online} alt="online"></img>
                        <p>Online Businesses</p>
                    </div>
                </div>
                <div className="specialImgDiv">
                    <div>
                        <img className="specialImg" src={Realtor} alt="realtor"></img>
                        <p>Realtors</p>
                    </div>
                    <div>
                        <img className="specialImg" src={Rest} alt="restaurant"></img>
                        <p>Restaurants</p>
                    </div>
                </div>
                <div className="specialImgDiv">
                    <div>
                        <img className="specialImg" src={SmallBus} alt="smallbusiness"></img>
                        <p>Small Businesses</p>
                    </div>
                    <div>
                        <img className="specialImg" src={StartUp} alt="startup"></img>
                        <p>Start-Ups</p>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default MarketingComp