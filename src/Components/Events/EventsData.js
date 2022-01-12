import React from 'react';

const EventsData = (props) => {
    const {title, date, month, details, location} = props.data;
    return (
        <div className="row events-item">
            <div className="col-md-2 text-center date-item">
                <h2 className="date">{date}</h2>
                <p>{month}</p>
            </div>
            <div className="col-md-7 item-details">
                <div className="ms-3 py-3">
                    <span>{location}</span>
                    <h1 className="heading">{title}</h1>
                    <p>{details}</p>
                </div>
            </div>
            <div className="col-md-3 text-center">
                <button className='btn btn-brand'>Find More</button>
            </div>
        </div>
    );
};

export default EventsData;