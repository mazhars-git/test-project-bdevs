import React from 'react';
import Churches from '../Churches/Churches';
import Contact from '../Contact/Contact';
import Events from '../Events/Events';
import Header from '../Header/Header';
import Sermons from '../Sermons/Sermons';

const Home = () => {
    return (
        <div>
            <Header />
            <Churches />
            <Events />
            <Sermons />
            <Contact />
        </div>
    );
};

export default Home;