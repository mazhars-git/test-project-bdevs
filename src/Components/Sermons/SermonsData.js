import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faCloud, faCode, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SermonsData = (props) => {
    const {image, title, details, date, location} = props.info;
    return (
        <div className="col-md-4 pb-3">
            <div className="sermon-box">
                <div className="sermon-img-box">
                    <img src={image} className="sermon-img w-100 " alt="" />
                    <div className="control-menu">
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faPlay}/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faCloud}/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faCode}/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faFilePdf}/></a></li>
                        </ul>
                    </div>
                </div>
                    
                <div className="sermon-content">
                    <h3 className="pt-3">{title}</h3>
                    <p className="pt-3">{details}</p>
                    <h5 className="pt-5">{location}</h5>
                    <span>{date}</span>
                </div>                
            </div>            
        </div>
    );
};

export default SermonsData;