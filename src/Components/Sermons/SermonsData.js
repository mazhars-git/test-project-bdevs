import React from 'react';

const SermonsData = (props) => {
    const {image, title, details, date, location} = props.info;
    return (
        <div className="col-md-4">
            <div>
                <img src={image} className="img-fluid" alt="" />
                <h3>{title}</h3>
                <p>{details}</p>
                <h5>{location}</h5>
                <span>{date}</span>
            </div>            
        </div>
    );
};

export default SermonsData;