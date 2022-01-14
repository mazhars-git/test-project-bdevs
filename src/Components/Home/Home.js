import React from 'react';
import About from '../About/About';
import Achievements from '../Achievements/Achievements';
import Churches from '../Churches/Churches';
import Contact from '../Contact/Contact';
import Events from '../Events/Events';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import News from '../News/News';
import ReviewSample from '../Reviews/ReviewSample';
import Sermons from '../Sermons/Sermons';

const Home = () => {
    return (
        <div>
            <Header />
            <Churches />
            <Events />
            <Sermons />
            <Contact />
            <Features />
            <Achievements />
            <ReviewSample />
            <News />
            <About />
            <Footer />
        </div>
    );
};

export default Home;