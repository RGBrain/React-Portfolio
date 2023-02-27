import React from "react";
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

    const form = useRef();
    const [user_name, setUser_name] = useState('');
    const [user_email, setUser_Email] = useState('');
    const [message, setMessage] = useState('')

    const handleNameChange = (event) => {
        setUser_name(event.target.value);
    };

    const handleEmailChange = (event) => {
        setUser_Email(event.target.value);
    };

    const handleMsgChange = (event) => {
        setMessage(event.target.value);
    };

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o2fol9r', 'contact_form', form.current, 'EdfyCsZWNaGrPgZOe')
      .then((result) => {
          console.log(result.text);
          alert("Message sent.");
          // Clear input values after form submitted
          setUser_name('');
          setUser_Email('');
          setMessage('');
      }, (error) => {
          console.log(error.text);
          alert("We have encountered a problem", error);
      }
      );
  };

    return (
        // Contact form
        <section id="contact d-flex">
          <div className="container-lg">
            <div className="row justify-content-center text-white m-5">
                <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
                    <form ref={form} onSubmit={sendEmail} className="text-white p-3 pb-5 pt-5 bg-transparent">
                        <div className="text-center border rounded" style={{height: "70px"}} id="contact-heading">
                            <h2 className="text-white mt-3">Get in Touch</h2>
                        </div>
                        <input 
                            type="name" 
                            name="user_name" 
                            className="form-control mb-1 mt-3 text-white" 
                            style={{height: "40px"}} 
                            id="name" 
                            placeholder="Name"
                            value={user_name}
                            onChange={handleNameChange}
                        />

                        <input 
                            type="email" 
                            for="email" 
                            name="user_email" 
                            className="form-control mb-1 mt-3 text-white" 
                            id="email" 
                            placeholder="Email"
                            value={user_email}
                            onChange={handleEmailChange}
                        />
                        
                        <textarea 
                            id="query" 
                            for="email_body" 
                            name="message" 
                            placeholder="Message" 
                            value={message}
                            className="form-control mb-1 mt-3 text-white" 
                            style={{height: "140px"}}
                            onChange={handleMsgChange}>
                        </textarea>

                        <div className="text-center mb-4 mt-3 bg-transparent text-white ">
                            <button type="submit" className="btn btn-secondary glow-on-hover">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        </section>
    );
  }

  
  export default Contact;