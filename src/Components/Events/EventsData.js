import React from 'react';

const EventsData = (props) => {
    const {title, date, month, details, location} = props.data;
    return (
        <div className="row">
            <div className="col-md-3">
                <h2>{date}</h2>
                <p>{month}</p>
            </div>
            <div className="col-md-6">
                <span>{location}</span>
                <h1>{title}</h1>
                <p>{details}</p>
            </div>
            <div className="col-md-3">
                <button className='btn btn-secondary'>Find More</button>
            </div>
            
        </div>
    );
};

export default EventsData;