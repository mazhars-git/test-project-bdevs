import React from 'react';
import Image_1 from '../../images/prayer_1.png';
import Image_2 from '../../images/prayer_2.png';
import Image_3 from '../../images/prayer_3.png';
import SermonsData from './SermonsData';

const Sermons = () => {
    const data =[
        {
            image: Image_1,
            title: 'Dolor sit amet, consect etur adipisicing elit.',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            location: 'Romada Linkon',
            date: 'March 17, 2017'
        },
        {
            image: Image_2,
            title: 'Dolor sit amet, consect etur adipisicing elit.',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            location: 'Romada Linkon',
            date: 'March 17, 2017'
        },
        {
            image: Image_3,
            title: 'Dolor sit amet, consect etur adipisicing elit.',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            location: 'Romada Linkon',
            date: 'March 17, 2017'
        },
    ]
    return (
        <section>
            <div className='container py-5'>
                <p>Sermons</p>
                <h1>
                    Pray From Your <br/>
                    Heart & Soul
                </h1>
                <div className='row'>
                    {
                        data.map(info => <SermonsData info={info}></SermonsData>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Sermons;