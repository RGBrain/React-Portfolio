import React from "react";

function Contact() {
    return (
        // Contact form
        <section id="contact d-flex">
          <div className="container-lg">

            <div className="row justify-content-center text-white m-5">
                <div className="col-lg-6">
                    <form className="text-white p-3 pb-5 pt-5 bg-transparent">
                        <div className="text-center border rounded" style={{height: "70px"}} id="contact-heading">
                            <h2 className="text-white mt-3">Get in Touch</h2>
                        </div>
                        <input type="text" class="form-control mb-1 mt-3 text-white" style={{height: "40px"}} id="name" placeholder="Name"/>

                        <input type="email" class="form-control mb-1 mt-3 text-white" id="email" placeholder="Email" />
                        
                        <textarea id="query" placeholder="Message" className="form-control mb-1 mt-3 text-white" style={{height: "140px"}}></textarea>

                        <div className="text-center mb-4 mt-3">
                            <button type="submit" className="btn btn-secondary">Submit</button>

                        </div>

                    </form>
                </div>

            </div>

          </div>
        </section>
    );
  }

  
  export default Contact;