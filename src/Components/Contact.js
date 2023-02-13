import React from "react";

function Contact() {
    return (
        // Contact form
        <section id="contact">
          <div className="container-lg">
            <div className="text-center">
                <h2>Get in Touch</h2>
                <p className="lead">Please get in touch to contact me</p>
            </div>

            <div className="row justify-content-center my-5 text-white m-2">
                <div className="col-lg-6">
                    <form className="">
                        <label for="name" className="form-label mb-1 mt-3">Name:</label>
                        <input type="text" class="form-control" id="name" placeholder="e.g. Salvador"/>

                        <label for="email" className="form-label mb-1 mt-3">Email Address:</label>
                        <input type="email" class="form-control" id="email" placeholder="e.g. salvador@maliwan.com" />
                        
                        <label for="query" className="form-label mb-1 mt-3">Your query:</label>
                        <textarea id="query" className="form-control text-white" style={{height: "140px"}}></textarea>

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