import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NewsData = (props) => {
    const {title, image, details} = props.data;
    return (
        <div className='col-md-4'>
            <div>
                <img className='img-fluid' src={image} alt="" />
                <h5>{title}</h5>
                <p>{details}</p>
                <a href="#"><FontAwesomeIcon icon={faAngleDoubleRight} /></a>                
            </div>
        </div>
    );
};

export default NewsData;