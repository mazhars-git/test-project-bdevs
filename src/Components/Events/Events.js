import React from 'react';
import EventsData from './EventsData';
import '../Css/Event.css';

const Events = () => {
    const info =[
        {
            date: '30',
            month: 'Jun',
            location: 'Limonda, 16/A, New York, USA',
            title: 'Lafanga Little Bird Program', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            date: '31',
            month: 'Jun',
            location: 'Limonda, 16/A, New York, USA',
            title: 'Lafanga Little Bird Program', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            date: '01',
            month: 'Jul',
            location: 'Limonda, 16/A, New York, USA',
            title: 'Lafanga Little Bird Program', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            date: '01',
            month: 'Jul',
            location: 'Limonda, 16/A, New York, USA',
            title: 'Lafanga Little Bird Program', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
    ]
    return (
        <section className="event">
            <div className='container py-5'>
                <p className='text-center'>Upcoming Events</p>
                <h1 className='text-center'>Enjoy & Get Involved <br/>
                    With US</h1>

                <div>
                    {
                        info.map(data => <EventsData data={data}></EventsData>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Events;