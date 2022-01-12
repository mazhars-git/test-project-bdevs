import React from 'react';
import FreeBees from '../../images/freebees.png';
import '../Css/Review.css';
import Founder from '../../images/founder.png';
import Co from '../../images/co.jpg';
import Md from '../../images/md.jpg';

const Reviews = () => {
    return (
        <section className="review">
            <div className='container py-5 text-center'>
                <div className="review-content py-5">
                    <img src={FreeBees} alt="" />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat uis aute irure dolor”</p>
                </div>
                <div className="review-pic py-2">
                    <img src={Founder} alt="" />
                    <img src={Co} alt="" />
                    <img src={Md} alt="" />
                </div>
                <h4 className="heading pt-2">Rosalina D. Pong</h4>
                <span>FOUNDER, UIHUB</span>
                
            </div>
        </section>
    );
};

export default Reviews;