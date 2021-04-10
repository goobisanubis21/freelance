import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import "./contactComp.css";
import emailjs from "emailjs-com";

function ContactComp() {

    var { pathname } = useLocation()
    useEffect(() => {
        if (pathname = "/contact")window.scrollTo(0,0)
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
        } else if ( first_name.value || last_name.value || email.value || phone.value || description.value === null) {
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
        <div className="mainContactDiv">
            <form onSubmit={sendEmail} onChange={handleBtn}>
                <div className="card contactEstimate">
                    <div className="card-body">
                        <h3>Get a Free Quote</h3>
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
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactComp
