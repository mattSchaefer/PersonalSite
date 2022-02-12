import React from 'react';

export default function Footer(props){
    React.useEffect(() => {

    },[])
    return(
        <div className="footer-container">
            <div className="footer-container-inner">
                <h3>Reach out</h3>
                <form className="contact-form">
                    <span className="label-input-container">
                        <label>Name:</label>
                        <input className="contact-input"></input>
                    </span>
                    <span className="label-input-container">
                        <label>Email:</label>
                        <input className="contact-input"></input>
                    </span>
                    {/* <span className="label-input-container">
                        <label>Phone:</label>
                        <input className="contact-input"></input>
                    </span> */}
                    <span className="label-input-container">
                        <label>Message:</label>
                        <textarea className="contact-input"></textarea>
                    </span>
                </form>
                <button className="contact-submit-button">boop</button>
            </div>
        </div>
    )
}