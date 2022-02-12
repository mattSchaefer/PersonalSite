import React from 'react'
require('isomorphic-fetch')

export default class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            requestPending: 'no',
            requestComplete: 'no',
            requestResponse: {}
        }
    }
    componentDidMount(){

    }
    contactSubmit(){
        var error = false;
        if(!document.getElementById('name-input').value){
            document.getElementById('name-input').style.border = "2px solid #bb0000";
            error = true
        }else{
            document.getElementById('name-input').style.border = "2px solid grey";
        }
        if(!document.getElementById('email-input').value){
            document.getElementById('email-input').style.border = "2px solid #bb0000";
            error = true
        }else{
            document.getElementById('email-input').style.border = "2px solid grey";
        }
        if(!document.getElementById('message-input').value){
            document.getElementById('message-input').style.border = "2px solid #bb0000";
            error = true
        }else{
            document.getElementById('message-input').style.border = "2px solid grey";
        }
        if(!error){
            var url = "/create-contact"
            var csrf = document.querySelector('meta[name="csrf-token"]').content;
            var name = document.getElementById('name-input').value
            var email = document.getElementById('email-input').value
            var message = document.getElementById('message-input').value
            var body = JSON.stringify({
                name: name,
                email: email,
                message: message
            })
            console.log(body)
            var options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-Token': csrf
                },
                body: body

            }
            fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                this.setState({
                    requestComplete: 'yes',
                    requestPending: 'no',
                    requestResponse: json
                })
                document.getElementById('contact-done-verbiage').style.animation = "fadeIn linear .5s";
                document.getElementById('contact-done-verbiage').style.opacity = "1"
            })
            .catch((e) => console.log(e))
        }
    }
    render(){
        return(
            <div>
                
                {
                    this.state.requestComplete == 'no' && this.state.requestPending == 'no' &&
                    <form className="contact-form">
                         <h3>Reach out</h3>
                        <span className="label-input-container">
                            <label>Name:</label>
                            <input className="contact-input" id="name-input"></input>
                        </span>
                        <span className="label-input-container">
                            <label>Email:</label>
                            <input className="contact-input" id="email-input"></input>
                        </span>
                        <span className="label-input-container">
                            <label>Message:</label>
                            <textarea className="contact-input" id="message-input"></textarea>
                        </span>
                    </form>
                
                }
                {
                    this.state.requestComplete == 'no' && this.state.requestPending == 'no' &&
                    <button className="contact-submit-button" onClick={() => this.contactSubmit()}>boop</button>
                }
                {
                    this.state.requestComplete == 'yes' && this.state.requestResponse.status == 200 && 
                    <div id="contact-done-verbiage">
                        <h4>Thanks for reaching out!</h4>
                        <p>I'll review your message and get back to you soon.</p>
                    </div>
                }
            </div>
        )
    }
}