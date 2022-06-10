import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div id='home'>
            <Banner />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;