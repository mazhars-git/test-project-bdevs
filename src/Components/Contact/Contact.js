import React from 'react';
import '../Css/Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container py-5">
                <p className="semi-heading pt-5">Join With Us</p>
                <h1 className="heading pb-3 text-center text-white">Get Involve With Us <br/>
                    & Made A Beautiful Globe
                </h1>
                <form className="row contact-form">
                    <div class="col-md-6">
                        <label for="firstName" class="form-label">YOUR FIRST NAME <span>**</span></label>
                        <input type="text" class="form-control" id="firstName" placeholder='Enter Your First Name....'/>
                    </div>
                    <div class="col-md-6">
                        <label for="lastName" class="form-label">YOUR LAST NAME <span>**</span></label>
                        <input type="text" class="form-control" id="lastName" placeholder='Enter Your Last Name....' />
                    </div>
                    <div class="col-md-6">
                        <label for="email" class="form-label">EMAIL <span>**</span></label>
                        <input type="email" class="form-control" id="email" placeholder='Enter Your Email...' />
                    </div>
                    <div class="col-md-6">
                        <label for="phone" class="form-label">YOUR PHONE NUMBER <span>**</span></label>
                        <input type="tel" class="form-control" id="phone" placeholder='+(880)' />
                    </div>
                    <div class="col-md-6">
                        <label for="religion" class="form-label">RELIGION <span>**</span></label>
                        <select id="religion" class="form-select select">
                        <option selected>Select Religion</option>
                        <option>Islam</option>
                        <option>Christian</option>
                        <option>Hindu</option>
                        <option>Buddha</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">SELECT LOCATION <span>**</span></label>
                        <select id="inputState" class="form-select select">
                        <option selected>Country</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>LONDON</option>
                        </select>
                    </div>
                    <div class="col-md-2 mt-3">
                        <label for="inputState" class="form-label"></label>
                        <select id="inputState" class="form-select select">
                        <option selected>State</option>
                        <option>Texas</option>
                        <option>Florida</option>
                        <option>Ohio</option>
                        </select>
                    </div>
                   
                    <div class="col-12 text-center py-5">
                        <button type="submit" class="btn btn-brand">Join Right Now</button>
                    </div>
                    
                </form>
            </div>            
        </section>
    );
};

export default Contact;