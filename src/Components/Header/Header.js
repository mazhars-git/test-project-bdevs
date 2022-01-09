import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import '../Css/Header.css';
import Padri from '../../images/header_img.png';

const Header = () => {
    return (
        <section className="header">
            <div className="container">
                <MainMenu />
                <div className="row">
                    <div className='col-md-8 text-white'>
                        <p>Our Mission From Jesus</p>
                        <h1>United Churches <br/>
                            People Prayers
                        </h1>
                        <div>
                            <button className='btn btn-primary'>Get Started</button>
                            <button className='btn btn-primary'>Causes</button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <img src={Padri} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            

        </section>
    );
};

export default Header;