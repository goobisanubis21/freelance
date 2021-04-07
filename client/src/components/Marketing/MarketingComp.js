import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./marketing.css";

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
        </div>
    )
}

export default MarketingComp
