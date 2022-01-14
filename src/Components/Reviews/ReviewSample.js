import React from 'react';
import Slider from 'react-slick';
import FreeBees from '../../images/freebees.png';
import Founder from '../../images/founder.png';
import Slide_2 from '../../images/prayer_2.png';
import Slide_3 from '../../images/prayer_3.png';
import '../Css/Review.css';

const ReviewSample = () => {
    const option = {
        dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
        <section className="container">
            <Slider  {...option}>
                <div className='container py-5 text-center justify-content-center'>
                    <div className="review-content py-5">
                        <img src={FreeBees} className="d-inline" alt="" />
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat uis aute irure dolor”</p>
                    </div>
                    <div className="review-pic py-2 align-content-center">
                        <img src={Founder} alt="" />
                    </div>
                    <h4 className="heading pt-2">Rosalina D. Pong</h4>
                    <span>FOUNDER, UIHUB</span>
                </div>
                
                <div className='container py-5 text-center justify-content-center'>
                    <div className="review-content py-5">
                        <img src={FreeBees} className="d-inline" alt="" />
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat uis aute irure dolor”</p>
                    </div>
                    <div className="review-pic py-2 align-content-center">
                        <img src={Founder} alt="" />
                    </div>
                    <h4 className="heading pt-2">Lasika D. King</h4>
                    <span>CEO, UIHUB</span>
                </div>
                
                <div className='container py-5 text-center justify-content-center'>
                    <div className="review-content py-5">
                        <img src={FreeBees} className="d-inline" alt="" />
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat uis aute irure dolor”</p>
                    </div>
                    <div className="review-pic py-2 align-content-center">
                        <img src={Founder} alt="" />
                    </div>
                    <h4 className="heading pt-2">Koyan D. John</h4>
                    <span>MD, UIHUB</span>
                </div>
            </Slider>
        </section>
    );
};

export default ReviewSample;