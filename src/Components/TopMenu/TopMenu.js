import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebookF, faPinterestP, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import '../Css/TopMenu.css';

const TopMenu = () => {
    return (
        <section>
            <div className='container'>
            <div className="row top-menu align-items-center">
                    <div className="d-flex justify-content-between social-icon">
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faBehance} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li> 
                            <li><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li> 
                        </ul>

                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faLock} />  SIGNUP/LOGIN</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopMenu;