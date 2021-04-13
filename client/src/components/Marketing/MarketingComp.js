import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./marketing.css";
import Gold from "./gold.png";
import Silver from "./silver.png";
import Bronze from "./bronze.png";
import emailjs from "emailjs-com";
import Doc from "./doctordentist.png";
import Finance from "./finance.png";
import Gym from "./gym.png";
import Online from "./onlinebus.png";
import Realtor from "./realtor.png";
import Rest from "./restaurant.png";
import SmallBus from "./smallbus.jpg";
import StartUp from "./startup.png";
import SilverSmall from "./silverSmall.png";
import BronzeSmall from "./bronzeSmall.png";
import GoldSmall from "./goldSmall.png";

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
            window.location.href = "/thankyou"
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
                        <h3>Get A Quote</h3>
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
            </div>
            <div className="moreInfoDivs">
                <div id="bronze" className="bronzeInfo">
                    {/* <h2>Bronze Package</h2> */}
                    <img src={BronzeSmall} alt="bronzeSmall"></img>
                    <p className="pageDeets">The bronze package is perfect if you have a small business or a quick venture that entails reaching the most amount of people for a smaller budget. Starting at a low monthly fee we find the best daily spend that will suit your needs by using a guaranteed model that has created success with 100% of clients.</p>
                </div>
                <div id="silver" className="silverInfo">
                    {/* <h2>Silver Package</h2> */}
                    <img src={SilverSmall} alt="SilverSmall"></img>
                    <p className="pageDeets">Our most popular option is the Silver Package. Businesses of all sizes will benefit from this marketing strategy. You can expect a significant increase in daily traffic, leads and conversions using a balanced daily budget spread across muiltiple ad sets.</p>
                </div>
                <div id="gold" className="goldInfo">
                    {/* <h2>Gold Package</h2> */}
                    <img src={GoldSmall} alt="GoldSmall"></img>
                    <p className="pageDeets">The gold package is a higher end option using an increasingly concentrated strategy. You can expect to reach a guaranteed, thousands upon thousands of people per month taking full advange of compounding high budgets and expert level targeting concepts.</p>
                    <p>We offer a FREE landing page custom created to suit the needs of your business, saving you time and money.</p>
                </div>
            </div>
            <div className="special">
                <h3 style={{ fontFamily: 'Helvetica', fontSize: '40px', paddingTop: '20px', paddingBottom:'50px', fontWeight: '800' }}>We Specialize In</h3>
                <br />
                <div className="specialImgDiv">
                    <div>
                        <div>
                            <p>Financial Agencies</p>
                            <img className="specialImg" src={Finance} alt="finance"></img>
                        </div>
                        <div>
                            <p>Doctors and Dental Offices</p>
                            <img className="specialImg" src={Doc} alt="doctor/dentist"></img>
                        </div>
                        <div>
                            <p>Realtors</p>
                            <img className="specialImg" src={Realtor} alt="realtor"></img>
                        </div>
                    </div>
                </div>
                <div className="specialImgDiv">
                    <div>
                        <div>
                            <p>Online Businesses</p>
                            <img className="specialImg" src={Online} alt="online"></img>
                        </div>
                        <div>
                            <p>Gyms and Fitness</p>
                            <img className="specialImg" src={Gym} alt="gym"></img>
                        </div>
                        <div>
                            <p>Restaurants</p>
                            <img className="specialImg" src={Rest} alt="restaurant"></img>
                        </div>
                    </div>
                </div>
                <div className="specialImgDiv">
                    <div>
                        <div>
                            <p>Small Businesses</p>
                            <img className="specialImg" src={SmallBus} alt="smallbusiness"></img>
                        </div>
                        <div>
                            <p>Start-Ups</p>
                            <img className="specialImg" src={StartUp} alt="startup"></img>
                        </div>
                        <div>
                            <h3 style={{fontWeight:'800'}}>And More!</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketingComp