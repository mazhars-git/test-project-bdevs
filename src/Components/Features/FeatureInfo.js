import React from 'react';

const FeatureInfo = (props) => {
    const {title, icon, details} = props.info;
    return (
        <div className="col-md-4">
            <div className="feature-content d-flex">
                <div>
                    <img className='img-fluid' src={icon} alt="" />
                </div>
                <div className="ms-3">
                    <h3>{title}</h3>
                    <p>{details}</p>
                    <a href="#">Read More</a>
                </div>               
            </div>
        </div>
    );
};

export default FeatureInfo;