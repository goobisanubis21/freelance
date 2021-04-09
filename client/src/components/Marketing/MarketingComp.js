import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./marketing.css";
import Gold from "./gold.png";
import Silver from "./silver.png";
import Bronze from "./bronze.png";

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
            <div className="world">
                <p className="connect">Connect Your Audience.</p>
                <p className="connWorld">Connect With The World.</p>
            </div>
            <div>
                <p className="marketingTitle">Our Strategy</p>
                <p className="marketingUnderTitle">Social Media Giant</p>
                <p className="marketingText">We use a monster of a company you may have heard of, the giant known as Facebook. Facebook with its over 2 billion users is an ocean of potential traffic and customers we can scoop up for you. Our marketing gurus use advanced tactics to pinpoint your audience and their interests to gain trust and eventually traffic. On average a person needs to see an ad 4 to 7 times before deciding to click or buy, our goal is to get your ads in front of as many people as possible as many times as possible. We take a lot of pride in our success with past and current clients when it comes to our advertising achievements and we would love to help you.<Link to="/contact"> Get a quote</Link></p>
            </div>
            <div className="moreInfoDivs">
                <div id="bronze" className="bronzeInfo">
                    <h2>Bronze Package</h2>
                    <p className="pageDeets">The bronze package is perfect if you have a small business or a quick venture that entails reaching the most amount of people for a smaller sized budget. It is our most afforable option. Starting at a low monthly fee we find the best daily spend that will suit your needs by using a guaranteed model that has created success with 100% of clients. For more information about the Bronze Package <Link to="/contact"> contact us</Link> today!</p>
                </div>
                <div id="silver" className="silverInfo">
                    <h2>Silver Package</h2>
                    <p className="pageDeets">The most popular option we offer is the Silver Package. Small, medium or large sized business will all benefit from the daily budgets of this strategy. You can expect a significant increase in daily traffic, leads and conversions for a balanced daily budget spread across muiltiple or a single AD set. For more information about the Silver Package<Link to="/contact"> contact us</Link> today!</p>
                </div>
                <div id="gold" className="goldInfo">
                    <h2>Gold Package</h2>
                    <p className="pageDeets">The gold package is a higher end, major increase concentrated strategy. There are virtually no limitations. You can expect to reach a guaranteed, thousands upon thousands of people per month taking full advange of compounding high budgets and expert level targetting concepts. We also offer a FREE landing page created entirely from scratch to suit the needs of your business saving you money and time. For more information about the Gold Package <Link to="/contact"> contact us</Link> today!</p>
                </div>
            </div>
        </div>
    )
}

export default MarketingComp
