import React from 'react';
import "./homecomp.css";

function HomeComp() {
    return (
        <div>
            <div className="companyTitleDiv">
                <p className="companyTitle">WebCanvas Development</p>
                <p className="companyUnderText">
                    Full Stack Web and Mobile Responsive Applications
                </p>
            </div>
            <div className="card whyDiv">
                <div className="card-body">
                    <h2><strong>Is a Website a Necessity?</strong></h2>
                    <p>97% of all purchase decisions start with a simple search of your website. Without a fully functioning properly developed website to demonstrate your professionalism, you or your company is only relevant to 7% of the buying market.</p>
                </div>
            </div>
            <div className="card whyDiv">
                <div className="card-body">
                    <h2><strong>Why WebCanvas</strong></h2>
                    <p>We provide an affordable Full Stack Web Application Service that is mobile responsive and worthy of representing you and your business. We are avaliable for you 24 hours a day, 7 days a week to meet the requirements that, according to the market, you desprately need to ensure success. WebCanvas Development will bring your vision into fruition.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeComp
