import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NewsData = (props) => {
    const {title, image, details, date} = props.data;
    return (
        <div className='col-md-4'>
                <img className='img-fluid' src={image} alt="" />
            <div className="news-content">
                <span>{date}</span>
                <h6 className="py-3 heading">{title}</h6>
                <p>{details}</p>
                <a href="#"><FontAwesomeIcon icon={faAngleDoubleRight} /></a>                
            </div>
        </div>
    );
};

export default NewsData;