import React from 'react';
import Donors from '../../images/donor.png'
import Volunteer from '../../images/volunteer.png'
import Reward from '../../images/reward.png'
import Coffee from '../../images/coffee.png'
import '../Css/Achievement.css';

const Achievements = () => {
    return (
        <section className="achievement">
            <div className="container-fluid">
                <div className="row text-center achieve-content-box">
                    <div className="col-md-3 p-0">
                        <div className="acv-box">
                            <img src={Donors} alt="" />
                            <h1 className='count'>10M<span className="plus">+</span></h1>
                            <p className='title'>DONORS</p>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="acv-box">
                            <img src={Volunteer} alt="" />
                            <h1 className='count'>6M<span className="plus">+</span></h1>
                            <p className='title'>VOLUNTEERS</p>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="acv-box">
                            <img src={Reward} alt="" />
                            <h1 className='count'>1M<span className="plus">+</span></h1>
                            <p className='title'>GET REWARDS</p>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="acv-box"> 
                            <img src={Coffee} alt="" />
                            <h1 className='count'>5M<span className="plus">+</span></h1>
                            <p className='title'>CUP COFFEE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;