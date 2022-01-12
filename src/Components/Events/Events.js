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
            title: 'Rifanda Limango Chocolate', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            date: '01',
            month: 'Jul',
            location: 'Limonda, 16/A, New York, USA',
            title: 'Tomadol Chips Party', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            date: '01',
            month: 'Jul',
            location: 'Limonda, 16/A, New York, USA',
            title: 'Jimuna Lomanda Gang', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
    ]
    return (
        <section className="events" id="event">
            <div className='container py-5'>
                <div className="events-header py-3">
                    <p className='semi-heading'>Upcoming Events</p>
                    <h1 className='text-center heading'>
                        Enjoy & Get Involved <br/>
                        With US
                    </h1>
                </div>

                <div className="pt-4">
                    {
                        info.map(data => <EventsData data={data}></EventsData>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Events;