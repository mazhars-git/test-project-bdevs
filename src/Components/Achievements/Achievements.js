import React from 'react';
import Donors from '../../images/donor.png'
import Volunteer from '../../images/volunteer.png'
import Reward from '../../images/reward.png'
import Coffee from '../../images/coffee.png'

const Achievements = () => {
    return (
        <section className="bg-dark">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-3">
                        <img src={Donors} alt="" />
                        <h1 className='text-white'>10M<span>+</span></h1>
                        <p>VOLUNTEERS</p>
                    </div>
                    <div className="col-md-3">
                        <img src={Volunteer} alt="" />
                        <h1 className='text-white'>6M<span>+</span></h1>
                        <p>VOLUNTEERS</p>
                    </div>
                    <div className="col-md-3">
                        <img src={Reward} alt="" />
                        <h1 className='text-white'>1M<span>+</span></h1>
                        <p>VOLUNTEERS</p>
                    </div>
                    <div className="col-md-3">
                        <img src={Coffee} alt="" />
                        <h1 className='text-white'>5M<span>+</span></h1>
                        <p className='text-white'>VOLUNTEERS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;