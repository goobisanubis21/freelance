import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import "./contactComp.css";

function ContactComp() {

    var { pathname } = useLocation()
    useEffect(() => {
        if (pathname = "/contact")window.scrollTo(0,0)
    }, [])

    return (
        <div className="mainContactDiv">
            <form>
                <div className="card contactEstimate">
                    <div className="card-body">
                        <h3>Get a Free Estimate</h3>
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
    )
}

export default ContactComp
