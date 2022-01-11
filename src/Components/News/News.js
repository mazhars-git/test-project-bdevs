import React from 'react';
import Image_1 from '../../images/news_1.png';
import Image_2 from '../../images/news_2.png';
import Image_3 from '../../images/news_3.png';
import NewsData from './NewsData';

const News = () => {
    const newses = [
        {
            image: Image_1,
            date: '14TH MAY 2018',
            title: "Consectetur adipisicing elit, sed do eiusmod tempor.", 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        },
        {
            image: Image_2,
            date: '14TH MAY 2018',
            title: "Consectetur adipisicing elit, sed do eiusmod tempor.", 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        },
        {
            image: Image_3,
            date: '14TH MAY 2018',
            title: "Consectetur adipisicing elit, sed do eiusmod tempor.", 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    return (
        <section>
            <div className='container py-5'>
                <p>News</p>
                <h1>Stay Connect With <br/>
                    Our Feeds
                </h1>
                <div className="row">
                    {
                        newses.map(data => <NewsData data={data}></NewsData>)
                    }
                </div>
            </div>
        </section>
    );
};

export default News;