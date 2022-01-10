import React from 'react';
import Churches from '../Churches/Churches';
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
        </div>
    );
};

export default Home;