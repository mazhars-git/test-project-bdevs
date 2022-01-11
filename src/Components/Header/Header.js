import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import '../Css/Header.css';
import Padri from '../../images/header_img.png';
import TopMenu from '../TopMenu/TopMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <section className="header">
                <TopMenu />
            <div className="container">                
                <MainMenu />

                <div className="row align-items-center">
                    <div className='col-md-8 header-content'>
                        <p><FontAwesomeIcon icon={faCross} /> Our Mission From Jesus</p>
                        <h1 className="heading pb-3">United Churches <br/>
                            People Prayers
                        </h1>
                        <div>
                            <button className='btn btn-brand me-3'>GET STARTED</button>
                            <button className='btn btn-brand'>CAUSES</button>
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