import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Advantage from '../section/Advantage';
import Section from '../section/Section';
import Service from '../Service/Service';

const Home = () => {
    useTitle('home')
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <Advantage></Advantage>
            <Service></Service>
            <Section></Section>
        </div>
    );
};

export default Home;