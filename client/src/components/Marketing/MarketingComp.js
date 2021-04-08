import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./marketing.css";
import Gold from "./gold.png";
import Silver from "./silver.png";
import Bronze from "./bronze.png";

function MarketingComp() {

    var { pathname } = useLocation()
    useEffect(() => {
        if (pathname = "/web-services") window.scrollTo(0, 0)
    }, [])

    return (
        <div className="marketMainDiv">
            <div className="marketHeader">
                <p className="marketHeaderTitle">Marketing Services</p>
                <p className="marketHeaderText">Proven Growth for your Business</p>
            </div>
            <div className="fbAdsDiv">
                <h2>The WebCanvas Marketing Packages</h2>
                <br/>
                <img className="fbAdsImg" src={Bronze} alt="bronze"></img>
                <img className="fbAdsImg" src={Silver} alt="silver"></img>
                <img className="fbAdsImg" src={Gold} alt="gold"></img>
            </div>
        </div>
    )
}

export default MarketingComp
