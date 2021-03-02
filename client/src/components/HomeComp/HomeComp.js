import React from 'react';
import "./homecomp.css";

function HomeComp() {
    return (
        <div className="homeCompMainDiv">
            <div className="companyTitleDiv">
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
                            <input type="text" name="phone_number" placeholder="Phone Number"required></input>
                            <label className="required">Description</label>
                            <textarea type="text" name="description" placeholder="Brief Description of your Website" required></textarea>
                            <button className="estimateBtn" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="newJersey">
                <p>Located on the coast and we service anywhere in The Garden State</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/New_Jersey_Counties.svg/1200px-New_Jersey_Counties.svg.png" alt="New Jersey"></img>
            </div>
        </div>
    )
}

export default HomeComp
