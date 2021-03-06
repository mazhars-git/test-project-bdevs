import React from 'react';
import '../Css/About.css';

const About = () => {
    return (
        <section className="about py-5" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pb-2">
                        <div className="about-content">
                            <h4 className="about-heading">About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        
                    </div>
                    <div className="col-md-4 pb-2">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="about-heading">Company</h4>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Customers</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h4 className="about-heading">Services</h4>
                                <ul>
                                    <li><a href="#">Donation</a></li>
                                    <li><a href="#">Medical Service</a></li>
                                    <li><a href="#">Adotion</a></li>
                                    <li><a href="#">Charity</a></li>
                                    <li><a href="#">Humanity</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="recent-sm">
                            <h4 className="about-heading pb-3">Recent Sermons</h4>

                            <span>19 HOURS AGO</span>
                            <p>Lorem ipsum is a dummy <br/> Content is read</p>

                            <span>19 HOURS AGO</span>
                            <p>Lorem ipsum is a dummy <br/> Content is read</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;