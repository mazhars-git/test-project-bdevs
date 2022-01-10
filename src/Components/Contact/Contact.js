import React from 'react';

const Contact = () => {
    return (
        <section>
            <div className="container py-5">
                <p>Join With Us</p>
                <h1>Get Involve With Us <br/>
                    & Made A Beautiful Globe
                </h1>
                <form className="row">
                    <div class="col-md-6">
                        <label for="firstName" class="form-label">YOUR FIRST NAME</label>
                        <input type="text" class="form-control" id="firstName" />
                    </div>
                    <div class="col-md-6">
                        <label for="lastName" class="form-label">YOUR LAST NAME</label>
                        <input type="text" class="form-control" id="lastName" />
                    </div>
                    <div class="col-md-6">
                        <label for="email" class="form-label">EMAIL</label>
                        <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="col-md-6">
                        <label for="phone" class="form-label">YOUR PHONE NUMBER</label>
                        <input type="tel" class="form-control" id="phone" />
                    </div>
                    <div class="col-md-6">
                        <label for="religion" class="form-label">RELIGION</label>
                        <select id="religion" class="form-select">
                        <option selected>Select Religion</option>
                        <option>Islam</option>
                        <option>Hindu</option>
                        <option>Buddha</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">SELECT LOCATION</label>
                        <select id="inputState" class="form-select">
                        <option selected>Country</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>LONDON</option>
                        </select>
                    </div>
                    <div class="col-md-2 mt-2">
                        <label for="inputState" class="form-label"></label>
                        <select id="inputState" class="form-select">
                        <option selected>State</option>
                        <option>New York</option>
                        <option>UK</option>
                        <option>LONDON</option>
                        </select>
                    </div>
                   
                    <div class="col-12 text-center pt-5">
                        <button type="submit" class="btn btn-primary">Join Right Now</button>
                    </div>
                    
                </form>
            </div>            
        </section>
    );
};

export default Contact;