import React from 'react';

const NewsData = (props) => {
    const {title, image} = props.data;
    return (
        <div className='col-md-4'>
            <div>
                <img src={image} alt="" />
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default NewsData;