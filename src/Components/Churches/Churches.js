import React from 'react';
import Church_pic from '../../images/temple.png';
import Church_logo from '../../images/temple_logo.png';
import '../Css/Churches.css';

const Churches = () => {
    return (
        <section id="prayers">
            <div className='container py-5'>
                <div className='row py-5'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={Church_pic} alt="" />
                    </div>
                    <div className='col-md-6 church-content'>
                        <div className="ms-4">
                            <img className='img-fluid' src={Church_logo} alt="" />
                            <h1 className='heading pt-4 mb-3'>
                                About Our
                                <br/>
                                AmericanChurches
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                                <br/>
                                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen.
                            </p>
                            <div className="church-btn">
                                <a href="#">Get Involved</a>
                                <a href="#">Get Directions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Churches;