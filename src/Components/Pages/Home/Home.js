import React from 'react';
import Banner from '../Banner/Banner';
import Advantage from '../section/Advantage';
import Section from '../section/Section';

const Home = () => {
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <Advantage></Advantage>
            <Section></Section>
        </div>
    );
};

export default Home;