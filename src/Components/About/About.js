import React from 'react';
import '../Css/About.css';

const About = () => {
    return (
        <section className="about py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Company</h4>
                            </div>
                            <div className="col-md-6">
                                <h4>Services</h4>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <h4>Recent Sermons</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;