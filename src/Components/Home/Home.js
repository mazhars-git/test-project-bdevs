import React from 'react';
import Churches from '../Churches/Churches';
import Events from '../Events/Events';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Churches />
            <Events />
        </div>
    );
};

export default Home;