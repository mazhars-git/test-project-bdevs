import React from 'react';
import Image_1 from '../../images/news_1.png';
import Image_2 from '../../images/news_2.png';
import Image_3 from '../../images/news_3.png';
import NewsData from './NewsData';
import '../Css/News.css';

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
        <section className="news" id="news">
            <div className='container py-5'>
                <div className="news-header py-5">
                    <p className="semi-heading">News</p>
                    <h1 className="heading text-center">Stay Connect With <br/>
                        Our Feeds
                    </h1>
                </div>
                
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