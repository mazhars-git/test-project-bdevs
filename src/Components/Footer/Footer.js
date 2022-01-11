import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Css/Footer.css';

const Footer = () => {
    return (
        <section className="footer">
            <div className='container py-2 footer-content'>
                <div className="d-flex justify-content-between">
                    <p>Made With Love - <span>FUNDU</span></p>
                    
                    <div className="back">
                        <a href="#" className='d-inline-flex'>
                            
                            <FontAwesomeIcon className="icon" icon={faAngleDoubleUp} />
                            <span>BACK TO TOP</span>
                            <FontAwesomeIcon className="icon" icon={faAngleDoubleUp} />
                        
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;